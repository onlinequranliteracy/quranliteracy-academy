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
    console.log('Paystack webhook received:', event.event)

    if (event.event === 'charge.success') {
      const email = event.data.customer.email
      const reference = event.data.reference

      const { error } = await supabase
        .from('students')
        .update({ paid: true, payment_reference: reference })
        .eq('email', email)

      if (error) {
        console.error('Supabase update error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      console.log(`Payment updated for ${email}`)
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
