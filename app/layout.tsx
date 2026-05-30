import './globals.css'

export const metadata = {
  title: {
    default: 'Online Quran Literacy',
    template: '%s | Online Quran Literacy',
  },
  description: 'Personalized one-on-one Quran memorization and Tajweed for children and adults worldwide — via WhatsApp and Zoom.',
  keywords: ['Quran', 'Hifz', 'Tajweed', 'Islamic education', 'online Quran classes', 'Ghana'],
  openGraph: {
    title: 'Online Quran Literacy',
    description: 'Personalized one-on-one Quran memorization and Tajweed for children and adults worldwide.',
    url: 'https://onlinequranliteracy.com',
    siteName: 'Online Quran Literacy',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0F2318', color: '#F5EDD8' }}>
        {children}
      </body>
    </html>
  )
}