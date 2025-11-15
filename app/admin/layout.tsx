'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAdmin() {
      const { data, error } = await supabase.auth.getUser()

      if (error || !data?.user) {
        router.push('/admin/login')
        return
      }

      // Allow access only if role = admin
      const role = data.user.user_metadata?.role
      if (role !== 'admin') {
        router.push('/')
        return
      }

      setLoading(false)
    }

    checkAdmin()
  }, [router])

  if (loading) return <p className="p-6">Verifying admin...</p>

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Admin</h1>

        <nav className="space-y-4">
          <a href="/admin" className="block hover:text-green-300">Dashboard</a>
          <a href="/admin/students" className="block hover:text-green-300">Students</a>
          <a href="/admin/payments" className="block hover:text-green-300">Payments</a>
          <a href="/admin/consultations" className="block hover:text-green-300">Consultations</a>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  )
}
