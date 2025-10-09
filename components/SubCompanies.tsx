'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, Globe, Zap } from 'lucide-react'

const SubCompanies = () => {
  const companies = [
    {
      name: "Tamleek",
      description: "Premium real estate development and investment solutions across strategic locations.",
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
      description: "Strategic investment firm focusing on high-growth opportunities and portfolio diversification.",
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
      description: "Luxury hospitality experiences and premium service management across multiple venues.",
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
      description: "International trade and logistics solutions connecting markets across continents.",
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
      description: "Cutting-edge technology solutions and digital transformation services for modern businesses.",
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
      description: "Strategic investment firm focusing on high-growth opportunities and portfolio diversification.",
      icon: TrendingUp,
      color: "from-gray-500 to-cyan-600",
      services: ["Private Equity", "Venture Capital", "Financial Advisory"],
      image: "/images/academy.jpg",
      logo: "/svg/tamleek-logo.svg",
      tag: "Trade Market",
      bottomTags: ["Real Estate", "2025", "Premium", "Luxury"]
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
            Our <span className="text-yellow-300">subsidiary companies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Brian Etemad Holding encompasses a diverse portfolio of companies, each excelling in their respective industries 
            and contributing to our vision of sustainable growth and innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto"></div>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const Icon = company.icon
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-700 h-full flex flex-col">
                  {/* Company Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Logo Overlay */}
                    <div className="absolute top-3 w-full">
                      {company.name !== "Brian etemad academy" ? <div className="absolute right-3 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-black/90 backdrop-blur-sm shadow-lg group-hover:scale-[115%] transition-transform duration-300 flex-shrink-0">
                        <img 
                          src={company.logo} 
                          alt="Company Logo" 
                          className="w-8 h-8 md:w-[44px] md:h-[44px]"
                        />
                      </div> 
                      : 
                      <div className="absolute right-3 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-black/90 backdrop-blur-sm shadow-lg transition-transform duration-300 flex-shrink-0">
                        <img 
                          src={company.logo} 
                          alt="Company Logo" 
                          className="w-8 h-8 md:w-45 md:h-45"
                        />
                      </div>}
                      <div className="absolute top-0 w-full">
                        <span className="absolute top-[1.7rem] right-[6.5rem] text-yellow-300 font-bold text-sm md:text-2xl drop-shadow-lg">{company.name}</span>
                        <span className="absolute top-[0.4rem] right-[6rem] rounded-md p-[0.1rem] text-white font-bold text-sm md:text-sm drop-shadow-lg">{company.tag}</span>
                      </div>
                    </div>
                    
                    {/* Bottom Tags - Moved outside logo overlay */}
                    <div className="absolute bottom-2 left-2 z-30">
                      <div className="flex flex-wrap gap-1">
                        {company.bottomTags.slice(0,3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-200 text-black text-xs px-2 py-1 rounded-full shadow-xl font-bold border-[0.09rem] border-yellow-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                    
                    {/* Learn More Button - Sticky at bottom */}
                    <div className="mt-auto">
                      <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SubCompanies
