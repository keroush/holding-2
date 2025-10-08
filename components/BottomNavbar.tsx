'use client'

import { Home, Building2, Users, Mail, Phone } from 'lucide-react'

const BottomNavbar = () => {
  const navItems = [
    {
      icon: Home,
      label: "Home",
      href: "#home"
    },
    {
      icon: Building2,
      label: "Portfolio",
      href: "#portfolio"
    },
    {
      icon: Users,
      label: "About",
      href: "#about"
    },
    {
      icon: Mail,
      label: "Contact",
      href: "#contact"
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890"
    }
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('tel:')) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed bottom-4 left-[20%] z-50 w-[30%] bg-gray-900/95 backdrop-blur-sm border border-gray-700 shadow-lg rounded-full">
      <div className="px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="w-6 h-6 mb-1 text-gray-400 group-hover:text-yellow-300 transition-colors duration-300">
                  <Icon className="w-full h-full" />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-yellow-300 transition-colors duration-300 font-medium">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar
