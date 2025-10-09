'use client'

import { useState } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Camera, Save } from 'lucide-react'

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    bio: 'Passionate learner and entrepreneur focused on personal development and business growth.'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // In a real app, you'd save to backend
    setIsEditing(false)
    // Show success message
  }

  const handleCancel = () => {
    // Reset form data to original values
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
              <User className="h-12 w-12 text-gray-300" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-200 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{formData.firstName} {formData.lastName}</h2>
            <p className="text-yellow-300">Premium Member</p>
            <p className="text-sm text-gray-400 mt-2">{formData.bio}</p>
          </div>
          
          <div className="flex gap-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
              >
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
                >
                  <Save className="h-4 w-4" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">First Name</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Last Name</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Date of Birth</label>
            {isEditing ? (
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{new Date(formData.dateOfBirth).toLocaleDateString()}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.phone}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-white mb-2">Bio</label>
          {isEditing ? (
            <textarea
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 h-24 resize-none"
            />
          ) : (
            <p className="text-gray-300">{formData.bio}</p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Contact Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-gray-300">{formData.email}</p>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                  Verified
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Address Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-2">Street Address</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.address}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">City</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">State/Province</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.state}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">ZIP/Postal Code</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              />
            ) : (
              <p className="text-gray-300">{formData.zipCode}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Country</label>
            {isEditing ? (
              <select
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="text-gray-300">{formData.country}</p>
            )}
          </div>
        </div>
      </div>

      {/* Account Statistics */}
      <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Account Statistics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-yellow-300/20 rounded-lg border border-yellow-300/30">
            <div className="text-2xl font-bold text-yellow-300">24</div>
            <div className="text-sm text-gray-400">Courses Completed</div>
          </div>
          
          <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
            <div className="text-2xl font-bold text-green-400">156</div>
            <div className="text-sm text-gray-400">Hours Learned</div>
          </div>
          
          <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
            <div className="text-2xl font-bold text-purple-400">8</div>
            <div className="text-sm text-gray-400">Certificates Earned</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo