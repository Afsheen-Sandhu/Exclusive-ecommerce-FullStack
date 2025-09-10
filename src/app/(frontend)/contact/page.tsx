// ✅ Correct for Next.js App Router
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactSidebar } from '@/components/contact/ContactSidebar'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='flex flex-col md:flex-row md:gap-10 pt-10 min-h-screen px-4 md:px-15'>
      <ContactSidebar />
      <ContactForm />
    </div>
  )
}
