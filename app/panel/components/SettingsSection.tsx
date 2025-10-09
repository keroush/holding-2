'use client'

import { useState } from 'react'
import { Bell, Shield, Globe, Moon, Sun, Monitor } from 'lucide-react'

const SettingsSection = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  })
  
  const [theme, setTheme] = useState('system')
  const [language, setLanguage] = useState('en')
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-white">Email Notifications</label>
              <p className="text-sm text-gray-400">Receive notifications via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-300"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-white">Push Notifications</label>
              <p className="text-sm text-gray-400">Receive push notifications on your device</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-300"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-white">SMS Notifications</label>
              <p className="text-sm text-gray-400">Receive notifications via SMS</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-300"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Security</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-white">Two-Factor Authentication</label>
              <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-300"></div>
            </label>
          </div>
          
          <button className="w-full sm:w-auto bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-medium">
            Change Password
          </button>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Preferences</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Theme</label>
            <div className="flex gap-2">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                  theme === 'light' ? 'border-yellow-300 bg-yellow-300/20 text-yellow-300' : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <Sun className="h-4 w-4" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                  theme === 'dark' ? 'border-yellow-300 bg-yellow-300/20 text-yellow-300' : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <Moon className="h-4 w-4" />
                Dark
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                  theme === 'system' ? 'border-yellow-300 bg-yellow-300/20 text-yellow-300' : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <Monitor className="h-4 w-4" />
                System
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="fa">فارسی</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsSection