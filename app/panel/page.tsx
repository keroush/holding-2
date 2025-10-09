'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  CreditCard, 
  Package, 
  LogOut, 
  Bell,
  Shield,
  ChevronRight,
  Home
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Import section components
import PersonalInfo from './components/PersonalInfo'
import SettingsSection from './components/SettingsSection'
import CreditSection from './components/CreditSection'
import SubscriptionsSection from './components/SubscriptionsSection'

const UserPanel = () => {
  const [activeSection, setActiveSection] = useState('personal')
  const router = useRouter()

  const sidebarItems = [
    {
      id: 'personal',
      name: 'Personal Info',
      icon: User,
      description: 'Manage your profile information'
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: Settings,
      description: 'Account preferences and security'
    },
    {
      id: 'credit',
      name: 'Credit & Billing',
      icon: CreditCard,
      description: 'Payment methods and billing history'
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
      icon: Package,
      description: 'Manage your active subscriptions'
    }
  ]

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/')
  }

  const handleBackToHome = () => {
    router.push('/')
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />
      case 'settings':
        return <SettingsSection />
      case 'credit':
        return <CreditSection />
      case 'subscriptions':
        return <SubscriptionsSection />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      </div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-80 bg-gray-800/50 backdrop-blur-md border-r border-gray-700/50 flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/svg/logo.svg" 
                alt="B.Etemad Holding Logo" 
                className="h-30 w-30 -mr-[10rem] mb-[rem]"
                style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(85%) saturate(1352%) hue-rotate(15deg) brightness(119%) contrast(119%)' }}
              />
              <div>
                <h1 className="text-lg font-bold text-yellow-300">B.Etemad Holding</h1>
                <p className="text-xs text-gray-400">User Panel</p>
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="text-white font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Premium Member</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-yellow-300/20 text-yellow-300 border border-yellow-300/30' 
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <div className="flex-1 text-left">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs opacity-70">{item.description}</p>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </motion.button>
              )
            })}
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-700/50 space-y-2">
            <button
              onClick={handleBackToHome}
              className="w-full flex items-center space-x-3 p-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all duration-200"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/95 backdrop-blur-md border-b border-gray-800 p-6 flex-shrink-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {sidebarItems.find(item => item.id === activeSection)?.name}
                </h2>
                <p className="text-gray-400">
                  {sidebarItems.find(item => item.id === activeSection)?.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Secure Connection</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            >
              {renderActiveSection()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPanel
