'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, Globe, Zap, Heart, Briefcase, GraduationCap, Truck, Fuel, Mountain } from 'lucide-react'
import Image from 'next/image'

const OurFields = () => {
  const fields = [
    {
      title: "Real Estate Development & Investment",
      icon: Building2,
      color: "from-purple-500 to-violet-500",
      stats: "500+ Properties Developed",
      highlight: "Leading developer in premium real estate",
      backgroundImage: "/images/academy.jpg",
      portfolioLogos: [
        { src: "/svg/tamleek-logo.svg", name: "Tamleek Real Estate" },
        { src: "/svg/tamleek-logo.svg", name: "Golden Life" }
      ]
    },
    {
      title: "Trade Market & Wealth Management",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      stats: "$2B+ Assets Under Management",
      highlight: "Trusted by high-net-worth clients globally",
      backgroundImage: "/images/academy.jpg",
      portfolioLogos: [
        { src: "/svg/gold-logo.svg", name: "Gold Trading" },
        { src: "/svg/estekhdam-logo.svg", name: "Estekhdam Services" },
        { src: "/svg/acclerator-logo.svg", name: "Business Accelerator" }
      ]
    },
    {
      title: "Education & Professional Development",
      icon: GraduationCap,
      color: "from-purple-500 to-violet-500",
      stats: "50,000+ Students Trained",
      highlight: "Transforming careers and businesses worldwide",
      backgroundImage: "/images/academy.jpg",
      portfolioLogos: [
        { src: "/svg/academy-logo.svg", name: "Brian Academy" },
      ]
    },
  ]

  const upcomingVentures = [
    {
      title: "Transportation & Logistics",
      icon: Truck,
      color: "from-orange-500 to-red-500",
      description: "Revolutionary transportation solutions and logistics networks",
      status: "Coming Soon..."
    },
    {
      title: "Oil Trade & Energy",
      icon: Fuel,
      color: "from-amber-500 to-yellow-500",
      description: "Strategic energy trading and petroleum industry ventures",
      status: "Coming Soon..."
    },
    {
      title: "Mining & Natural Resources",
      icon: Mountain,
      color: "from-gray-500 to-slate-600",
      description: "Sustainable mining operations and natural resource extraction",
      status: "Coming Soon..."
    }
  ]

  return (
    <section className="section-padding bg-gray-900">
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
            Our <span className="text-yellow-300">Fields of Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Brian Etemad Holding operates across diverse industries, delivering innovative solutions 
            and strategic expertise that drive sustainable growth and create lasting value for our clients and partners.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto"></div>
        </motion.div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fields.map((field, index) => {
            const Icon = field.icon
            return (
              <motion.div
                key={field.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-300/10 relative overflow-hidden h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={field.backgroundImage}
                      alt={`${field.title} background`}
                      fill
                      className="object-cover opacity-15 group-hover:opacity-20 transition-opacity duration-300"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-gray-900/90"></div>
                  </div>
                  
                  {/* Background Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${field.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                  
                  <div className="flex flex-col items-center text-center relative z-10 h-full">
                    {/* Icon - Made Larger and More Prominent */}
                    <div className="flex-shrink-0 mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${field.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative`}>
                        <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${field.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                        {field.title}
                      </h3>
                      
                      {/* Stats Badge */}
                      <div className="mb-4">
                        <span className="text-yellow-300 font-semibold text-sm bg-yellow-300/10 px-4 py-2 rounded-full border border-yellow-300/20 inline-block">
                          {field.stats}
                        </span>
                      </div>
                      
                      {/* Highlight */}
                      <p className="text-gray-400 text-sm italic leading-relaxed mb-6">
                        {field.highlight}
                      </p>
                      
                      {/* Portfolio Logos */}
                      <div className="mt-auto">
                        <div className="text-xs text-gray-500 mb-3 font-medium">Our subsidiary companies</div>
                        <div className="flex justify-center gap-4">
                          {field.portfolioLogos.map((logo, logoIndex) => {
                            return (
                              <div key={logoIndex} className="flex flex-col items-center group/logo">
                                <div className="w-[5rem] h-[5rem] rounded-full bg-black/30 backdrop-blur-sm p-2 group-hover/logo:scale-110 transition-transform duration-300 shadow-lg border border-gray-600/30">
                                  <Image 
                                    src={logo.src} 
                                    alt={logo.name}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>


        {/***************************************************************** */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          {/* what com */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
              And What Comes<span className="text-yellow-300"> Next?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            In the mind of a skilled and experienced investor, there are always new things on the way! Do you just anchor your ship or do you embark on a new adventure with it?
            </p>
          </motion.div>

          {/* Upcoming Ventures Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingVentures.map((venture, index) => {
              const Icon = venture.icon
              return (
                <motion.div
                  key={venture.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-600/30 hover:border-yellow-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-300/5 relative overflow-hidden backdrop-blur-sm">
                    {/* Background Accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${venture.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      {/* Icon */}
                      <div className="flex-shrink-0 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${venture.color} p-3 group-hover:scale-105 transition-transform duration-300 shadow-lg relative opacity-70`}>
                          <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                          <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Status Badge */}
                        <div className="mb-3">
                          <span className="text-yellow-300/70 font-semibold text-xs bg-yellow-300/5 px-3 py-1 rounded-full border border-yellow-300/10 inline-block">
                            {venture.status}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-300 mb-3 group-hover:text-yellow-300/80 transition-colors duration-300 leading-tight">
                          {venture.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {venture.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-gray-700"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our expertise across multiple industries can help you achieve 
            sustainable growth and unlock new opportunities for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-300/25 transition-all duration-300 hover:scale-105">
              Explore Our Services
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-yellow-300 hover:text-yellow-300 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurFields
