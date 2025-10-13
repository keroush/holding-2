'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, LogIn } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/login')
  }

  const navItems = [
    {
      name: 'Home',
      href: '#home',
      submenu: ['Overview', 'Vision', 'Mission']
    },
    {
      name: 'Our Fields',
      href: '#fields',
      submenu: ['Real Estate', 'Trade Market', 'Education', 'Upcoming Ventures']
    },
    {
      name: 'Sub Companies',
      href: '#companies',
      submenu: ['Tamleek', 'B.etemad Academy', 'Estekhdam', 'Accelerator', 'Gold', 'Golden Life']
    },
    {
      name: 'About',
      href: '#about',
      submenu: ['Our Story', 'Leadership', 'Values']
    },
    {
      name: 'Contact',
      href: '#contact',
      submenu: ['Get in Touch', 'Locations', 'Partnerships']
    }
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800 overflow-hidden">
      {/* Golden Wave - Mobile Only */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-10" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d="M0,8 Q300,16 600,8 T1200,8 L1200,0 L0,0 Z" fill="url(#goldWave)" opacity="0.5"/>
          <defs>
            <linearGradient id="goldWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#d97706"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d="M0,8 Q300,16 600,8 T1200,8 L1200,0 L0,0 Z" fill="url(#goldWave)" opacity="0.4"/>
          <defs>
            <linearGradient id="goldWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#d97706"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[4rem] rotate-180" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d="M0,8 Q300,16 600,8 T1200,8 L1200,0 L0,0 Z" fill="purple" opacity="0.3"/>
          <defs>
            <linearGradient id="goldWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#d97706"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 md:space-x-4 md:mt-0 overflow-hidden">
            <img 
              src="/svg/logo.svg" 
              alt="Logo" 
              className="h-[12rem] w-[12rem] -mr-[9rem] md:h-[14.5rem] md:w-[14.5rem] md:-mr-[10.9rem] flex-shrink-0"
              style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(85%) saturate(1352%) hue-rotate(15deg) brightness(119%) contrast(119%)' }}
            />
            <h1 className="text-lg md:text-3xl font-bold text-yellow-300/90 truncate z-50">
              TAMLEEK Holding
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleLoginClick}
              className="bg-yellow-300/90 text-black px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/98 backdrop-blur-md max-h-screen overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-800/50 pb-2">
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-3 text-base font-medium transition-colors"
                >
                  {item.name}
                </a>
                {/* Mobile Submenu */}
                <div className="ml-4 mt-2 space-y-1">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4">
              <button 
                onClick={handleLoginClick}
                className="w-full bg-yellow-300/90 text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
