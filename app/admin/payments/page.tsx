'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function PaymentsPage() {
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPayments() {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .order('payment_date', { ascending: false })

      if (!error) {
        setPayments(data || [])
      }

      setLoading(false)
    }

    loadPayments()
  }, [])

  if (loading) return <p>Loading payments...</p>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Reference</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-3">{p.email}</td>
                <td className="p-3">₵{p.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      p.status === 'success' ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-3">{p.reference}</td>
                <td className="p-3">{new Date(p.payment_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
