'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {/* 🌿 Hero Section */}
     
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          Welcome to Quran Literacy Academy
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          A calm, spiritual space where women and children learn to recite, memorize, 
          and understand the Qur’an — guided by Ustadha Rashida. 🌿
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="/register"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition"
          >
            Enroll Now
          </Link>

          <Link
            href="/contact"
            className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            Book Free Consultation
          </Link>
        </div>

        
      {/* 🌸 Courses Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl"
      >
        {[
          {
            title: 'Qaidatu Nuuraniyya',
            desc: 'Build strong Arabic letter and pronunciation foundations.',
          },
          {
            title: 'Tajweed',
            desc: 'Master precise recitation rules with clarity and confidence.',
          },
          {
            title: 'Hifz',
            desc: 'Memorize the Qur’an beautifully with structured support.',
          },
          {
            title: 'Salah & Du’a',
            desc: 'Learn daily prayers and supplications with correct meaning.',
          },
        ].map((course) => (
          <div
            key={course.title}
            className="bg-white shadow-md rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 text-sm">{course.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* 🌷 About Ustadha Rashida */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-3xl mt-24 text-gray-700"
      >
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          About Ustadha Rashida
        </h2>
        <p className="leading-relaxed">
          I have taught the Qur’an for over 10 years — 5 of those online. As a
          mother of three, I experienced the healing power of the Qur’an when
          two of my children faced speech delays. Through recitation, their
          voices blossomed, and so did my passion to teach others.
        </p>
        <p className="mt-4 leading-relaxed">
          Now, I dedicate this academy to helping <strong>mothers, working women, 
          and children</strong> who wish to learn recitation, Tajweed, or memorization 
          from the comfort of home — with patience, love, and faith.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/register"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700"
          >
            Enroll Now
          </Link>
          <Link
            href="/contact"
            className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-xl hover:bg-emerald-50"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* WhatsApp button repeated */}
        <div className="mt-6 text-center">
          <a
            href="https://wa.me/233243083957?text=Assalamu%20Alaikum%2C%20I%20want%20to%20learn%20more%20about%20Quran%20Literacy%20Academy."
            target="_blank"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.section>

      {/* 🌙 Inspirational Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-2xl mt-24 text-center"
      >
        <blockquote className="text-emerald-800 italic text-lg leading-relaxed">
          “The best among you are those who learn the Qur’an and teach it.”
        </blockquote>
        <p className="text-gray-500 mt-2">— Prophet Muhammad ﷺ (Bukhari)</p>
      </motion.section>
    </div>
  )
}
