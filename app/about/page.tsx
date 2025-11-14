'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16 px-6 flex justify-center">
      <div className="max-w-3xl text-gray-700">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-emerald-700 text-center mb-8"
        >
          About Quran Literacy Academy
        </motion.h1>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="leading-relaxed">
            Quran Literacy Academy was created with one goal: to help women and children 
            develop a deep, beautiful connection with the Book of Allah — no matter 
            their background, busy schedule, or level of experience.
          </p>

          <p className="leading-relaxed">
            The academy is led by <strong>Ustadha Rashida</strong>, a Qur’an teacher with 
            over <strong>10 years of teaching experience</strong>, including 5 years of dedicated 
            online teaching. As a mother of three, she has witnessed the healing and 
            transformative power of Qur’an recitation within her own family.
          </p>

          <p className="leading-relaxed">
            Two of her children once struggled with severe speech delays, yet through 
            consistent recitation, patience, and the mercy of Allah, their tongues 
            softened and their confidence blossomed. This personal journey inspired 
            her mission to support:
          </p>

          <ul className="list-disc ml-6 leading-relaxed">
            <li>Mothers who wish they had learned Qur’an earlier</li>
            <li>Career women beginning their spiritual journey</li>
            <li>Children ages 4–17 who need gentle, structured Qur’an learning</li>
          </ul>

          <p className="leading-relaxed">
            At Quran Literacy Academy, we focus on <strong>Qaidatu Nuuraniyya, Tajweed, Hifz, 
            Salah, and Du’a</strong> — all taught with clarity, compassion, and encouragement.
          </p>

          <p className="leading-relaxed">
            Whether you are starting fresh or continuing your journey, this academy is 
            your safe, spiritual space to grow — at your own pace, in your own home.
          </p>
        </motion.section>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl italic text-emerald-800">
            “The Qur’an is not just learned — it is lived, loved, and carried in the heart.”
          </blockquote>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="/register"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition"
          >
            Enroll Now
          </a>

          <a
            href="/contact"
            className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
