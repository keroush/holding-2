'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: 'About',
      href: '#about',
      submenu: ['The Story', 'The System', 'The Science']
    },
    {
      name: 'Programs',
      href: '#programs',
      submenu: ['All Programs', 'Inner Circle', 'Business Accelerator', 'Platinum Partnership']
    },
    {
      name: 'Events',
      href: '#events',
      submenu: ['Unleash the Power Within', 'Date With Destiny', 'Business Mastery', 'Wealth Mastery']
    },
    {
      name: 'Coaching',
      href: '#coaching',
      submenu: ['Results Coaching', 'Business Coaching', 'Business Results Training']
    },
    {
      name: 'Resources',
      href: '#resources',
      submenu: ['Blog', 'Podcast', 'Newsletter', 'Free Resources']
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
            />
            <h1 className="text-2xl font-bold text-yellow-300">
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
              Get Started
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
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
