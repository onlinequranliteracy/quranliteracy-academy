import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY!
    const rawBody = await req.text()

    const computedHash = crypto
      .createHmac('sha512', secret)
      .update(rawBody)
      .digest('hex')

    const sentSignature = req.headers.get('x-paystack-signature')

    if (computedHash !== sentSignature) {
      console.error('Invalid Paystack signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(rawBody)

    if (event.event === 'charge.success') {
      const email = event.data.customer.email
      const reference = event.data.reference
      const amount = event.data.amount / 100

      console.log(`Webhook payment success for: ${email}`)

      const { data: studentRecord } = await supabase
        .from('students')
        .select('*')
        .eq('email', email)
        .single()

      // Update student paid status
      await supabase
        .from('students')
        .update({ paid: true, payment_reference: reference })
        .eq('email', email)

      // Log payment history
      await supabase.from('payments').insert([
        {
          student_id: studentRecord?.id || null,
          email: email,
          amount: amount,
          currency: event.data.currency,
          status: 'success',
          reference: reference
        }
      ])
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
