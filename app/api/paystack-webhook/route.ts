import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

// ✅ Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ✅ Verify Paystack event & update Supabase
export async function POST(req: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY!
  const rawBody = await req.text()
  const hash = crypto.createHmac('sha512', secret).update(rawBody).digest('hex')

  // Verify that Paystack really sent this
  if (req.headers.get('x-paystack-signature') !== hash) {
    console.error('Invalid Paystack signature')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const event = JSON.parse(rawBody)
  console.log('Received Paystack event:', event.event)

  if (event.event === 'charge.success') {
    const email = event.data.customer.email
    const reference = event.data.reference

    // ✅ Update student record
    const { error } = await supabase
      .from('students')
      .update({ paid: true, payment_reference: reference })
      .eq('email', email)

    if (error) {
      console.error('Supabase update error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log(`Payment verified for ${email}`)
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
