'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

const AddvertiserSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const companies = [
    {
      name: "Tamleek",
      description: "A group of specialized companies in the fields of tower construction, building, cryptocurrency, consulting, real estate investment, and global investment.",
      icon: Building2,
      color: "from-gray-500 to-cyan-600",
      services: ["Property Development", "Investment Advisory", "Asset Management"],
      image: "/images/holding.webp",
      logo: "/svg/tamleek-logo.svg",
      tag: "Trade Market",
      bottomTags: ["Real Estate", "2010", "Dubai"]
    },
    {
      name: "B.etemad academy",
      description: "Specialized training in digital skills, programming, and business with top instructors and practical courses. The academy, with a hands-on and practical approach, prepares students for the job market.",
      icon: TrendingUp,
      color: "from-gray-500 to-cyan-600",
      services: ["Private Equity", "Venture Capital", "Financial Advisory"],
      image: "/images/academy.jpg",
      logo: "/svg/academy-logo.svg",
      tag: "Educational",
      bottomTags: ["Education", "2025", "Growing", "Online"]
    },
    {
      name: "Estekhdam",
      description: "Connecting Iranian talents to suitable job opportunities using artificial intelligence and data analysis. This platform creates the best match between job seekers and employers through advanced algorithms.",
      icon: Users,
      color: "from-gray-500 to-cyan-600",
      services: ["Hotel Management", "Event Planning", "Luxury Services"],
      image: "/images/holding.webp",
      logo: "/svg/estekhdam-logo.svg",
      tag: "Start Up",
      bottomTags: ["HR Services", "2025", "Business", "Global"]
    },
    {
      name: "Acclerator",
      description: "Supporting emerging startups through investment, mentoring, and access to an extensive business network. The accelerator prepares startups for success with comprehensive programs.",
      icon: Globe,
      color: "from-gray-500 to-cyan-600",
      services: ["Import/Export", "Supply Chain", "Market Analysis"],
      image: "/images/holding.webp",
      logo: "/svg/acclerator-logo.svg",
      tag: "Start Up",
      bottomTags: ["Business", "2025", "Start Up", "UAE"]
    },
    {
      name: "Gold",
      description: "An online platform for buying and selling gold and jewelry with authenticity guarantees and transparent pricing. Gold uses modern technologies to provide customers with a safe and convenient shopping experience.",
      icon: Zap,
      color: "from-gray-500 to-cyan-600",
      services: ["Software Development", "Digital Solutions", "Tech Consulting"],
      image: "/images/holding.webp",
      logo: "/svg/gold-logo.svg",
      tag: "Trade Market",
      bottomTags: ["Trade Market", "2025", "New", "Digital"]
    },
    {
      name: "Golden Life",
      description: "Platform for purchasing and managing commercial units in luxury and exclusive towers",
      icon: TrendingUp,
      color: "from-gray-500 to-cyan-600",
      services: ["Private Equity", "Venture Capital", "Financial Advisory"],
      image: "/images/academy.jpg",
      logo: "/svg/tamleek-logo.svg",
      tag: "Trade Market",
      bottomTags: ["Real Estate", "2025", "Premium", "Luxury"]
    }
  ]

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companies.length)
    }, 3000) // 3 seconds

    return () => clearInterval(interval)
  }, [companies.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="section-padding bg-gray-800 -mt-[3.4rem] -mb-[2.3rem]">
      <div className="max-w-7xl mx-auto px-3 md:hidden relative overflow-hidden">
          {/* Swiper Container */}
          <div className="relative z-10 overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out -mx-[1.35rem]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {companies.map((company, index) => {
                const Icon = company.icon
                return (
                  <div
                    key={company.name}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 h-full flex flex-col mx-2">
                      {/* Company Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-60`}></div>
                        
                        {/* Logo Overlay */}
                        <div className="absolute top-3 w-full">
                          {company.name !== "Brian etemad academy" ? 
                            <div className="absolute right-3 flex items-center justify-center w-20 h-20 rounded-full bg-black/90 backdrop-blur-sm shadow-lg flex-shrink-0">
                              <img 
                                src={company.logo} 
                                alt="Company Logo" 
                                className="w-16 h-16"
                              />
                            </div> 
                            : 
                            <div className="absolute right-3 flex items-center justify-center w-20 h-20 rounded-full bg-black/90 backdrop-blur-sm shadow-lg flex-shrink-0">
                              <img 
                                src={company.logo} 
                                alt="Company Logo" 
                                className="w-16 h-16"
                              />
                            </div>
                          }
                          <div className="absolute top-0 w-full">
                            <span className="absolute top-[1.7rem] right-[6.5rem] text-yellow-300 font-bold text-2xl drop-shadow-lg">{company.name}</span>
                            <span className="absolute top-[0.4rem] right-[6rem] rounded-md p-[0.1rem] text-white font-bold text-sm drop-shadow-lg">{company.tag}</span>
                          </div>
                        </div>
                        
                        {/* Bottom Tags */}
                        <div className="absolute bottom-[2rem] left-2 z-30">
                          <div className="flex flex-wrap gap-1">
                            {company.bottomTags.slice(0,3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-gray-200 text-black text-xs px-2 py-1 rounded-full shadow-xl font-bold border-[0.09rem] border-yellow-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-[3.8rem] bottom-[0.4rem] z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[1.2rem] bottom-[0.4rem] z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-[0.4rem] left-[1.6rem] justify-center mt-6 space-x-2 z-10">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-300 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

export default AddvertiserSwiper