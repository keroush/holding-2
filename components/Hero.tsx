'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      SuperTitle: "Brian Etemad Holding",
      title: "",
      subtitle: '"Be with God and reign"',
      description: "Master Your Mindest Unlock Potential",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600 via-gray-700 to-gray-600",
      bgImage: "/images/holding.webp",
      logo: null
    },
    {
      SuperTitle: "Tamleek",
      title: "Real State  ",
      highlight: "Investment",
      subtitle: "Trust",
      description: "Tamleek, a Multi-Billion Dirham Global Investment Firm",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/60 via-gray-700/60 to-gray-600/60",
      bgImage: "/images/tamleek.jpg",
      logo: "/svg/tamleek-logo.svg"
    },
    {
      SuperTitle: "Brian etemad academy",
      title: "Join the circle of",
      highlight: "successful",
      subtitle: "achievers",
      description: "Transform your thinking patterns and develop the mental frameworks that drive extraordinary success.",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/70 via-gray-700/70 to-gray-600/70",
      bgImage: "/images/academy.jpg",
      logo: "/svg/academy-logo.svg"
    },
    {
      SuperTitle: "Estekhdam",
      title: "Build Your",
      highlight: "Wealth",
      subtitle: "Machine",
      description: "Create sustainable wealth through proven investment strategies and financial intelligence systems.",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/70 via-gray-700/70 to-gray-600/70",
      bgImage: "/images/academy.jpg",
      logo: "/svg/estekhdam-logo.svg"
    },
    {
      SuperTitle: "Acclerator",
      title: "Become a",
      highlight: "Leader",
      subtitle: "That Inspires",
      description: "Develop the leadership skills and influence that create lasting impact and drive organizational excellence.",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/70 via-gray-700/70 to-gray-600/70",
      bgImage: "/images/academy.jpg",
      logo: "/svg/acclerator-logo.svg"
    },
    {
      SuperTitle: "Gold",
      title: "Become a",
      highlight: "Leader",
      subtitle: "That Inspires",
      description: "Optimize your health, relationships, and personal fulfillment with science-backed wellness strategies.",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/70 via-gray-700/70 to-gray-600/70",
      bgImage: "/images/academy.jpg",
      logo: "/svg/gold-logo.svg"
    },
    {
      SuperTitle: "Golden Life",
      title: "Live Your",
      highlight: "Best Life",
      subtitle: "Every Day",
      description: "A gateway to the world's top commercial buildings",
      primaryButton: "Grow Your Business",
      secondaryButton: "View More",
      gradient: "from-gray-600/70 via-gray-700/70 to-gray-600/70",
      bgImage: "/images/academy.jpg",
      logo: "/svg/tamleek-logo.svg"
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].bgImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80`}></div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
              <div className="mb-2">
                  {currentSlide !== 2 && currentSlide !== 0 ? (<div className="ml-[4rem] flex w-16 h-16 md:w-56 md:h-56 rounded-full bg-black/60 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"></div>) : null}
                  {currentSlide == 2 && (<div className="ml-[18.4rem] mb-3 flex w-16 h-16 md:w-[17.7rem] md:h-[17.7rem] rounded-full bg-black/60 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"></div>)}
              </div> 
              {slides[currentSlide].logo && currentSlide !== 0 && currentSlide !== 2 ? (<img 
                        src={slides[currentSlide].logo} 
                        alt="Logo" 
                        className="absolute bottom-[0.5rem] left-[0.5rem] w-12 h-12 md:w-[40rem] md:h-[40rem]"
                        style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(1200%) hue-rotate(15deg) brightness(1.3)' }}
                      />) : null}
              {slides[currentSlide].logo && currentSlide == 2 ? (<img 
                        src={slides[currentSlide].logo} 
                        alt="Logo" 
                        className="absolute bottom-[17rem] left-[22.3rem] w-12 h-12 md:w-[14rem] md:h-[14rem]"
                        style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(1200%) hue-rotate(15deg) brightness(1.3)' }}
                      />) : null}
              <div>
                  {currentSlide !== 0 ? null : (<h1 className=" text-6xl opacity-0.5 md:text-6xl lg:text-7xl font-bold text-yellow-300">{slides[currentSlide].SuperTitle}</h1>)}
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {slides[currentSlide].title}{' '}
                <span className="text-yellow-300">{slides[currentSlide].highlight}{' '}</span>
                {slides[currentSlide].subtitle}
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center group">
                {slides[currentSlide].primaryButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                {slides[currentSlide].secondaryButton}
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/10 hover:border-white/60"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/10 hover:border-white/60"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-300 scale-125 shadow-lg shadow-yellow-300/50' 
                : 'bg-yellow-300/50 hover:bg-yellow-300/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300/20 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="h-full bg-yellow-300 shadow-sm shadow-yellow-300/50"
        />
      </div>
    </section>
  )
}

export default Hero
