'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <section className="md:hidden bg-gray-900 px-4 py-1 pb-2 mt-16 rounded-t-lg rounded-b-3xl overflow-hidden border-b-[0.1rem] border-yellow-600 shadow-b-2xl">
      <div className="flex items-center space-x-3 w-full bg-gradient-to-br from-yellow-500/95 to-yellow-700/95  p-1 rounded-xl">
        {/* Dubai Logo Cube */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg rounded-r-xl">
          <div className="text-white font-bold text-xs text-center leading-tight">
            <div>UAE</div>
            <div className="text-[8px] text-red-200">DUBAI</div>
          </div>
        </div>

        {/* Search Input Container */}
        <div className={`relative flex items-center bg-gray-800 rounded-lg border-2 transition-all duration-200 flex-1 rounded-l-3xl ${
          isFocused ? 'border-yellow-300/50' : 'border-gray-700'
        }`}>
          {/* Search Icon */}
          <div className="flex items-center justify-center w-12 h-12">
            <Search className="h-5 w-5 text-gray-400" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search in TAMLEEK..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm py-3 pr-12 focus:outline-none"
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={handleClear}
              className="absolute right-3 w-6 h-6 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition-colors"
            >
              <X className="h-3 w-3 text-white" />
            </button>
          )}

          {/* Search Suggestions (Optional - can be expanded later) */}
          {isFocused && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg border border-gray-700 shadow-lg z-50">
              <div className="p-3">
                <div className="text-xs text-gray-400 mb-2">Popular Searches</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-white">Real Estate Investment</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-white">Education Services</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-white">Business Consulting</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchBar
