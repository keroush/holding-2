import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SubCompanies from '@/components/SubCompanies'
import EventsLiberate from '@/components/EventsLiberate'
import Pillars from '@/components/Pillars'
import Results from '@/components/Results'
import Footer from '@/components/Footer'
import BottomNavbar from '@/components/BottomNavbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <SubCompanies />
      <EventsLiberate />
      <Results />
      <Footer />
      {/**<BottomNavbar /> */}
    </main>
  )
}
