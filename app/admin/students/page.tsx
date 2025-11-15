'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([])

  useEffect(() => {
    async function loadStudents() {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error) setStudents(data || [])
    }

    loadStudents()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Students</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Class Type</th>
              <th className="p-3">Days</th>
              <th className="p-3">Paid</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="p-3">{s.full_name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.class_type}</td>
                <td className="p-3">{s.days_per_week}</td>
                <td className="p-3">
                  {s.paid ? (
                    <span className="text-green-600 font-bold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-bold">Unpaid</span>
                  )}
                </td>
                <td className="p-3">{new Date(s.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
