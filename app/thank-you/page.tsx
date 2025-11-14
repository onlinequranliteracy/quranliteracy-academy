'use client'

import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Alhamdulillaah — Registration Complete! 🌿
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Your payment was successful and your enrollment has been received.
          <br />
          <strong>Please check your email (and spam folder)</strong> for your welcome message.
          I will contact you shortly in shaa Allaah.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/233243083957?text=Assalamu%20Alaikum%20Ustadha%20Rashida,%20I%20just%20completed%20my%20enrollment%20on%20Quran%20Literacy%20Academy."
          target="_blank"
          className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-green-700 transition"
        >
          Message Ustadha on WhatsApp 💬
        </a>

        <Link
          href="/"
          className="text-green-700 underline text-sm hover:text-green-900"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
