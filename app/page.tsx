import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CategoryScroll from '@/components/CategoryScroll'
import ServicesGrid from '@/components/ServicesGrid'
import OurFields from '@/components/OurFields'
import SubCompanies from '@/components/SubCompanies'
import EventsLiberate from '@/components/EventsLiberate'
import HoldingMedia from '@/components/HoldingMedia'
import Pillars from '@/components/Pillars'
import Results from '@/components/Results'
import Footer from '@/components/Footer'
import BottomNavbar from '@/components/BottomNavbar'
import AddvertiserSwiper from '@/components/AddvertiserSwiper'
import AddvertiserGrid from '@/components/AddvertiserGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 overflow-x-hidden">
      <Navigation />
      {/**<SearchBar /> */}
      <Hero />
      <CategoryScroll />
      <AddvertiserSwiper />
      <ServicesGrid />
      <SubCompanies />
      <AddvertiserGrid />
      <OurFields />
      <HoldingMedia />
      <Footer />
      {/**<BottomNavbar /> */}
    </main>
  )
}
