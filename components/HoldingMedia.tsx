'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const HoldingMedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const mediaFeatures = [
    {
      title: "Global Investment Leadership",
      subtitle: "CNN Business Interview",
      description: "Discussing international investment strategies and market insights with CNN's business team.",
      image: "/images/brian-media/3.jpg",
      outlet: "CNN",
      date: "March 2024",
      type: "Interview",
      gradient: "from-black/40 to-black/40"
    },
    {
      title: "Sustainable Business Practices",
      subtitle: "BBC World Service Feature",
      description: "Featured documentary on sustainable investment practices and corporate responsibility in emerging markets.",
      image: "/images/brian-media/8.jpg",
      outlet: "BBC",
      date: "February 2024",
      type: "Documentary",
      gradient: "from-black/40 to-black/40"
    },
    {
      title: "Middle East Market Analysis",
      subtitle: "Forbes Middle East Cover Story",
      description: "In-depth analysis of Middle Eastern investment opportunities and regional economic development strategies.",
      image: "/images/brian-media/9.jpg",
      outlet: "Forbes",
      date: "January 2024",
      type: "Cover Story",
      gradient: "from-black/40 to-black/40"
    },
    {
      title: "Real Estate Innovation",
      subtitle: "Financial Times Exclusive",
      description: "Exclusive interview on innovative real estate development and smart city investments across the Gulf region.",
      image: "/images/brian-media/4.jpg",
      outlet: "Financial Times",
      date: "December 2023",
      type: "Exclusive",
      gradient: "from-black/40 to-black/40"
    },
    {
      title: "Economic Outlook 2024",
      subtitle: "Bloomberg Markets Report",
      description: "Contributing expert analysis on global economic trends and investment opportunities for the coming year.",
      image: "/images/brian-media/7.jpg",
      outlet: "Bloomberg",
      date: "November 2023",
      type: "Expert Analysis",
      gradient: "from-black/40 to-black/40"
    },
  ]

  const [cardsPerView, setCardsPerView] = useState(1)
  const maxIndex = Math.max(0, mediaFeatures.length - cardsPerView)

  // Responsive cardsPerView
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3) // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(1) // Mobile: 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Mobile swiper functions
  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % mediaFeatures.length)
  }

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + mediaFeatures.length) % mediaFeatures.length)
  }

  const goToMobileSlide = (index: number) => {
    setCurrentMobileSlide(index)
  }

  // Mouse swipe functionality for mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const newCurrentX = e.clientX
    const diff = newCurrentX - startX
    setCurrentX(newCurrentX)
    setDragOffset(diff)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    setIsDragging(false)
    
    const threshold = 50 // Minimum drag distance to trigger slide change
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right - go to previous slide
        prevMobileSlide()
      } else {
        // Dragged left - go to next slide
        nextMobileSlide()
      }
    }
    
    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  // Mobile auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mediaFeatures.length)
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [mediaFeatures.length])

  return (
    <section className="section-padding bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
            Holding in the <span className="gradient-text">Media</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Brian Etemad Holding has been featured across major international media outlets, 
            showcasing our expertise and leadership in global investment markets.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            View All Coverage
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* Desktop Media Features Carousel */}
        <div className="relative hidden md:block">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-[5.5rem] -top-[2rem] transform -translate-y-1/2 z-20 w-8 h-8 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 hover:scale-110 transition-all duration-300 border-2 border-yellow-300/30 hover:border-yellow-300/60"
          >
            <ChevronLeft className="h-6 w-6 text-yellow-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[3rem] -top-[2rem] transform -translate-y-1/2 z-20 w-8 h-8 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 hover:scale-110 transition-all duration-300 border-2 border-yellow-300/30 hover:border-yellow-300/60"
          >
            <ChevronRight className="h-6 w-6 text-yellow-300" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8">
            <motion.div 
              className="flex gap-2 md:gap-4 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(mediaFeatures.length / cardsPerView) * 100}%`
              }}
            >
              {mediaFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ width: `${100 / mediaFeatures.length}%` }}
                >
                  <div className="relative overflow-hidden rounded-md mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Media Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <div className="mb-2">
                        <span className="text-xs md:text-sm font-medium opacity-90">{feature.subtitle}</span>
                      </div>
                      <h3 className="text-sm md:text-lg font-bold mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      
                      <div className="space-y-1 text-sm opacity-90">
                        <div className="flex items-center">
                          <span className="font-medium">{feature.outlet}</span>
                          <span className="mx-2">•</span>
                          <span>{feature.date}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                            {feature.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 px-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-300 scale-125 shadow-lg shadow-yellow-300/50' 
                    : 'bg-yellow-300/50 hover:bg-yellow-300/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Media Features Swiper */}
        <div className="md:hidden relative">
          {/* Mobile Swiper Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing select-none"
              style={{ 
                transform: `translateX(calc(-${currentMobileSlide * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? 'none' : 'transform 300ms ease-in-out'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {mediaFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg mx-2">
                    {/* Media Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60`}></div>
                      
                      {/* Media Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="mb-2">
                          <span className="text-xs font-medium opacity-90">{feature.subtitle}</span>
                        </div>
                        <h3 className="text-sm font-bold mb-2 leading-tight">
                          {feature.title}
                        </h3>
                        
                        <div className="space-y-1 text-xs opacity-90">
                          <div className="flex items-center">
                            <span className="font-medium">{feature.outlet}</span>
                            <span className="mx-2">•</span>
                            <span>{feature.date}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                              {feature.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevMobileSlide}
            className="absolute right-[3rem] -bottom-[2.3rem] z-20 w-10 h-10 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 transition-all duration-300 border-2 border-yellow-300/30"
          >
            <ChevronLeft className="h-4 w-4 text-yellow-300" />
          </button>
          
          <button
            onClick={nextMobileSlide}
            className="absolute right-[0.4rem] -bottom-[2.3rem] z-20 w-10 h-10 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 transition-all duration-300 border-2 border-yellow-300/30"
          >
            <ChevronRight className="h-4 w-4 text-yellow-300" />
          </button>

          {/* Mobile Slide Indicators */}
          <div className="absolute -bottom-[1.3rem] left-4 flex space-x-2 z-10">
            {mediaFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMobileSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentMobileSlide 
                    ? 'bg-yellow-300 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-gray-800"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay informed with our media presence
          </h3>
          <p className="text-sm text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow our journey as we continue to share insights and expertise across 
            leading international business and financial media platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300">
              View All Features
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-sm hover:border-white hover:text-white transition-all duration-300">
              Media Kit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HoldingMedia
