import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import OurFields from '@/components/OurFields'
import SubCompanies from '@/components/SubCompanies'
import EventsLiberate from '@/components/EventsLiberate'
import HoldingMedia from '@/components/HoldingMedia'
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
      <OurFields />
      <HoldingMedia />
      <Footer />
      {/**<BottomNavbar /> */}
    </main>
  )
}
