'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PaymentSummary() {
  const router = useRouter()

  const [student, setStudent] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // ------------------------------------------------------------
  // LOAD PAYSTACK SDK
  // ------------------------------------------------------------
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = () => {
      console.log("Paystack script loaded")
      setScriptLoaded(true)
    }
    document.body.appendChild(script)
  }, [])

  // ------------------------------------------------------------
  // LOAD STUDENT INFO FROM localStorage
  // ------------------------------------------------------------
  useEffect(() => {
    const data = localStorage.getItem('pendingStudent')
    if (!data) {
      router.push('/register')
      return
    }
    setStudent(JSON.parse(data))
  }, [router])

  if (!student) return null

  // ------------------------------------------------------------
  // CALCULATE PAYMENT DETAILS
  // ------------------------------------------------------------
  const rate = student.classType.includes('One-on-One') ? 10 : 5
  const total = rate * Number(student.daysPerWeek) * 4
  const ghsTotal = total * 18 // conversion rate

  // ------------------------------------------------------------
  // HANDLE PAYMENT (CORRECT CALLBACK VERSION)
  // ------------------------------------------------------------
  const handlePayment = () => {
    const Paystack = (window as any).PaystackPop

    if (!scriptLoaded || !Paystack || typeof Paystack.setup !== 'function') {
      alert("Payment system is still loading. Please wait...")
      return
    }

    setLoading(true)

    const handler = Paystack.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: student.email,
      amount: Math.round(ghsTotal * 100),
      currency: 'GHS',
      ref: 'QLA-' + Date.now(),

      // ------------------------------------------------------------
      // IMPORTANT: PURE FUNCTION CALLBACK (Paystack requirement)
      // ------------------------------------------------------------
      callback: function (response: any) {
        console.log("Paystack callback fired:", response)

        ;(async () => {
          try {
            const verify = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                reference: response.reference,
                student,
              }),
            })

            const result = await verify.json()
            console.log("VERIFY RESULT:", result)

            if (result.success) {
              localStorage.removeItem('pendingStudent')
              router.push('/thank-you')
            } else {
              alert("Payment succeeded but database save failed.")
            }
          } catch (err) {
            console.error(err)
            alert("Verification failed. Please contact support.")
          }

          setLoading(false)
        })()
      },

      // ------------------------------------------------------------
      // USER CLOSED POPUP
      // ------------------------------------------------------------
      onClose: () => {
        alert("Payment window closed.")
        setLoading(false)
      },
    })

    handler.openIframe()
  }

  // ------------------------------------------------------------
  // UI
  // ------------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Summary 🌿</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <p><strong>Full Name:</strong> {student.fullName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Courses:</strong> {student.courses.join(', ')}</p>
        <p><strong>Class Type:</strong> {student.classType}</p>
        <p><strong>Days/Week:</strong> {student.daysPerWeek}</p>

        <hr className="my-4" />

        <p><strong>Rate per Hour:</strong> £{rate}</p>
        <p><strong>Total (Monthly):</strong> £{total.toFixed(2)}</p>
        <p><strong>Approximate in GHS:</strong> ₵{ghsTotal.toFixed(2)}</p>

        <button
          onClick={handlePayment}
          disabled={loading || !scriptLoaded}
          className={`w-full mt-6 py-3 rounded-lg text-white 
            ${!scriptLoaded 
              ? 'bg-gray-400 cursor-not-allowed'
              : loading 
                ? 'bg-gray-500 cursor-wait' 
                : 'bg-green-700 hover:bg-green-800'}
          `}
        >
          {!scriptLoaded
            ? "Loading payment system..."
            : loading
              ? "Processing..."
              : "Pay Now with Paystack"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-2">
          Payments are securely processed via Paystack.
        </p>
      </div>
    </div>
  )
}
