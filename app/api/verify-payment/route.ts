import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const { reference, student } = await req.json()

    if (!reference || !student?.email) {
      return NextResponse.json(
        { error: 'Missing payment reference or student info' },
        { status: 400 }
      )
    }

    const verifyRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
      }
    )

    const result = await verifyRes.json()

    if (!result.status || result.data.status !== 'success') {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('students').insert([
      {
        full_name: student.fullName,
        email: student.email,
        password: student.password || null,
        days_per_week: student.daysPerWeek,
        courses: student.courses,
        class_type: student.classType,
        paid: true,
        payment_reference: reference
      }
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Verify Payment Error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
