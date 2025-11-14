'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    preferred_day: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const { error } = await supabase.from('consultations').insert([form])
    if (error) {
      console.error('Error booking consultation:', error)
      alert('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    // Send email notification
    await fetch('/api/send-consultation-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setLoading(false)
    setSuccess(true)
    setForm({
      full_name: '',
      email: '',
      phone: '',
      preferred_day: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white py-16 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-emerald-700 mb-4">
          Book a Free 15-Minute Consultation 🌿
        </h1>
        <p className="text-gray-600 mb-6">
          Speak with <strong>Ustadha Rashida</strong> to discuss your goals, your child’s needs, or
          find the best starting point for your Quran journey.
        </p>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h2 className="text-emerald-700 font-semibold mb-2">JazakAllahu Khairan!</h2>
            <p className="text-gray-600 text-sm">
              Your consultation request has been received. You’ll receive a response shortly,
              insha’Allah.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone (optional)</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Preferred Day</label>
              <input
                type="text"
                name="preferred_day"
                value={form.preferred_day}
                onChange={handleChange}
                placeholder="e.g., Tuesday evening"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition disabled:opacity-70"
            >
              {loading ? 'Booking...' : 'Book Consultation'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
