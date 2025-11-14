'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const COURSES = [
  'Qaidatu Nuuraniyya',
  'Tajweed',
  'Hifz',
  'Salah & Du’a',
]

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [daysPerWeek, setDaysPerWeek] = useState('1')
  const [classType, setClassType] = useState<'Group' | 'One-on-One'>('Group')
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedCourses.length === 0) {
      alert('Please select at least one course.')
      return
    }

    setLoading(true)

    try {
      // ✅ 1. Create secure auth user in Supabase (no DB row yet)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        console.error('Sign-up error:', error)
        alert(error.message || 'Could not register. Please try again.')
        setLoading(false)
        return
      }

      const authUserId = data.user?.id

      // ✅ 2. Store pending student data in localStorage (for payment page)
      const pendingStudent = {
        authUserId,     // Supabase auth user id
        fullName,
        email,
        daysPerWeek,
        classType,
        courses: selectedCourses,
      }

      localStorage.setItem('pendingStudent', JSON.stringify(pendingStudent))

      // ✅ 3. Go to payment summary
      router.push('/payment-summary')
    } catch (err: any) {
      console.error('Unexpected error:', err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex justify-center items-center px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-emerald-100"
      >
        <h1 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
          Enroll at Quran Literacy Academy 🌿
        </h1>

        {/* Full Name */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Days per Week */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">
            Days per Week
          </label>
          <select
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4">4 days</option>
            <option value="5">5 days</option>
          </select>
        </div>

        {/* Class Type */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Class Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Group"
                checked={classType === 'Group'}
                onChange={() => setClassType('Group')}
              />
              <span>Group (4 students)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="One-on-One"
                checked={classType === 'One-on-One'}
                onChange={() => setClassType('One-on-One')}
              />
              <span>One-on-One</span>
            </label>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-2">Courses</label>
          <div className="grid grid-cols-1 gap-2">
            {COURSES.map((course) => (
              <label key={course} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course)}
                  onChange={() => toggleCourse(course)}
                />
                <span>{course}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? 'bg-emerald-400 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {loading ? 'Creating Account...' : 'Continue to Payment'}
        </button>
      </form>
    </div>
  )
}
