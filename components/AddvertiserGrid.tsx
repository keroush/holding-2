'use client'

import { useState, useEffect } from 'react'
import { Building2, TrendingUp, Users, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const AddvertiserGrid = () => {
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


  return (
    <section className="section-padding bg-gray-800 -mt-[3.4rem] -mb-[2.5rem] md:hidden mx-[0.3rem]">
      <div className="mx-1 md:hidden relative overflow-hidden grid grid-cols-2 gap-2">
        {/* Swiper Container */}
          {companies.slice(0,4).map((company, index) => {
            const Icon = company.icon;
            return (
                <div className="">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 h-20 w-[100%] flex flex-col">
                    {/* Company Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-60`}
                      ></div>

                      {/* Logo Overlay */}
                      <div className="absolute top-3 w-full">
                        <div className="absolute top-0 w-full">
                          <span className="absolute top-[2.4rem] left-[0.7rem] text-yellow-300 font-bold text-sm drop-shadow-lg">
                            {company.name}
                          </span>
                          <span className="absolute top-[1.6rem] left-[1rem] rounded-md p-[0.1rem] text-white font-bold text-xs drop-shadow-lg">
                            {company.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
        {/* Custom Pagination Dots */}
        <div className="absolute bottom-[0.45rem] right-[0.5rem] z-30">
          <div className="swiper-pagination-advertiser flex space-x-2"></div>
        </div>
      </div>
    </section>
  );
}

export default AddvertiserGrid