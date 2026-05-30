import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, data } = body

    let subject = ''
    let html = ''

    if (type === 'contact') {
      subject = `New Contact Message — ${data.name}`
      html = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    }

    if (type === 'registration') {
      subject = `New Student Registration — ${data.studentName}`
      html = `
        <h2>New Student Registration</h2>
        <h3>Student Details</h3>
        <p><strong>Student Name:</strong> ${data.studentName}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Program:</strong> ${data.program}</p>
        <p><strong>Current Level:</strong> ${data.level}</p>
        <p><strong>Special Needs:</strong> ${data.specialNeeds || 'None'}</p>
        <h3>Parent/Guardian Details</h3>
        <p><strong>Parent Name:</strong> ${data.parentName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
        <p><strong>Preferred Schedule:</strong> ${data.schedule}</p>
        <p><strong>How they found us:</strong> ${data.referral || 'Not specified'}</p>
        <p><strong>Additional Notes:</strong> ${data.notes || 'None'}</p>
      `
    }

    if (type === 'teaching') {
      subject = `Teaching Application — ${data.name}`
      html = `
        <h2>New Teaching Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Qualifications:</strong> ${data.qualifications}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Programs:</strong> ${data.programs}</p>
        <p><strong>Availability:</strong> ${data.availability}</p>
        <p><strong>Introduction:</strong></p>
        <p>${data.introduction}</p>
      `
    }

    if (type === 'newsletter') {
      subject = `New Newsletter Signup — ${data.email}`
      html = `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${data.email}</p>
      `
    }

    await resend.emails.send({
      from: 'Online Quran Literacy <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}