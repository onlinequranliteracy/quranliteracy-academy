import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { full_name, email, phone, preferred_day, message } = await req.json()

    // Your email address (where you get notified)
    const adminEmail = 'inusahrashida34@gmail.com'

    // 1️⃣ Send email to YOU (Ustadha Rashida)
    await resend.emails.send({
      from: 'Quran Literacy Academy <info@quranliteracy.academy>',
      to: adminEmail,
      subject: `🌿 New Consultation Booking — ${full_name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Preferred Day:</strong> ${preferred_day || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
        <br />
        <p style="color: #047857;">Quran Literacy Academy 🌙 — New consultation booking received.</p>
      `,
    })

    // 2️⃣ Send confirmation to the STUDENT
    await resend.emails.send({
      from: 'Quran Literacy Academy <info@quranliteracy.academy>',
      to: email,
      subject: '🌸 Your Consultation with Quran Literacy Academy',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #047857;">JazakAllahu Khairan, ${full_name} 🌸</h2>
          <p>
            Your 15-minute consultation request has been received successfully. 
            Insha’Allah, Ustadha Rashida will reach out soon to confirm your time.
          </p>
          <p><strong>Preferred Day:</strong> ${preferred_day || 'Not specified'}</p>
          <p><strong>Submitted Message:</strong> ${message || 'No message provided'}</p>
          <br/>
          <p style="color: #047857; font-weight: bold;">
            May Allah make your Qur’an journey full of light and ease. 🌿
          </p>
          <p>
            With love,<br/>
            <strong>Quran Literacy Academy</strong><br/>
            <em>Guided by Ustadha Rashida</em>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email sending error:', err)
    return NextResponse.json({ success: false, error: 'Email failed' }, { status: 500 })
  }
}
