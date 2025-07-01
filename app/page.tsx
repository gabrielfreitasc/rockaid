
'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ActionsSection } from '@/components/actions-section'
import { HelpSection } from '@/components/help-section'
import { ContactSection } from '@/components/contact-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ActionsSection />
        <HelpSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
