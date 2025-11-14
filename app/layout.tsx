import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Quran Literacy Academy',
  description:
    'Online Quran classes for women and children — Qaidatu Nuuraniyya, Tajweed, Hifz, Salah & Du’a.',
    icons: {
    icon: '/favicon.ico', // or '/icon.png' if you used PNG
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
        {/* 🌿 Global Navbar on all pages */}
        <Navbar />

        {/* Main content for each page */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t">
          © {new Date().getFullYear()} Quran Literacy Academy — Guided by
          Ustadha Rashida
        </footer>
      </body>
    </html>
  )
}
