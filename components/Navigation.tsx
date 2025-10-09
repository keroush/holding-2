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
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3 -ml-20">
            <img 
              src="/svg/logo.svg" 
              alt="Logo" 
              className="h-30 w-30 -mr-[170px]"
              style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(85%) saturate(1352%) hue-rotate(15deg) brightness(119%) contrast(119%)' }}
            />
            <h1 className="text-2xl font-bold text-yellow-300/90">
              B.Etemed Holding
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              </div>
            ))}
            <button 
              onClick={handleLoginClick}
              className="w-full mt-4 bg-yellow-300/90 text-black px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
