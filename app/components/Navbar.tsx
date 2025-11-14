'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-emerald-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/" className="text-emerald-700 text-xl font-bold">
          Quran Literacy Academy
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-emerald-600 transition"
          >
            Home
          </Link>

          <Link
            href="/register"
            className="hover:text-emerald-600 transition"
          >
            Enroll
          </Link>

          <Link
            href="/contact"
            className="hover:text-emerald-600 transition"
          >
            Free Consultation
          </Link>

          <Link
            href="/about"
            className="hover:text-emerald-600 transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
