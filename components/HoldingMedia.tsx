'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const HoldingMedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const cardsPerView = 3
  const maxIndex = Math.max(0, mediaFeatures.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Holding in the <span className="gradient-text">Media</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Brian Etemad Holding has been featured across major international media outlets, 
            showcasing our expertise and leadership in global investment markets.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            View All Coverage
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* Media Features Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-[5.5rem] -top-[2rem] transform -translate-y-1/2 z-20 w-12 h-12 md:w-8 md:h-8 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 hover:scale-110 transition-all duration-300 border-2 border-yellow-300/30 hover:border-yellow-300/60"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[3rem] -top-[2rem] transform -translate-y-1/2 z-20 w-12 h-12 md:w-8 md:h-8 bg-yellow-300/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-300/40 hover:scale-110 transition-all duration-300 border-2 border-yellow-300/30 hover:border-yellow-300/60"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8">
            <motion.div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(mediaFeatures.length / cardsPerView) * 80}%`
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
                      className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Media Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-2">
                        <span className="text-sm font-medium opacity-90">{feature.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">
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
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow our journey as we continue to share insights and expertise across 
            leading international business and financial media platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
              View All Features
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-white hover:text-white transition-all duration-300">
              Media Kit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HoldingMedia
