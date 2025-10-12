'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CategoryScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const categories = [
    {
      id: 1,
      name: "Real Estate",
      image: "/images/holding.webp",
      description: "Property"
    },
    {
      id: 2,
      name: "Education",
      image: "/images/academy.jpg", 
      description: "Learning"
    },
    {
      id: 3,
      name: "HR Services",
      image: "/images/holding.webp",
      description: "Job Matching"
    },
    {
      id: 4,
      name: "Accelerator",
      image: "/images/academy.jpg",
      description: "Startup"
    },
    {
      id: 5,
      name: "Gold Trading",
      image: "/images/holding.webp",
      description: "Investment"
    },
    {
      id: 6,
      name: "Luxury Life",
      image: "/images/academy.jpg",
      description: "Premium"
    },
    {
      id: 7,
      name: "Consulting",
      image: "/images/holding.webp",
      description: "Business"
    },
    {
      id: 8,
      name: "Technology",
      image: "/images/academy.jpg",
      description: "Digital"
    }
  ]

  return (
    <section className="md:hidden pb-3 pt-4">
      <div className="px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white">Whats new?</h3>
          <span className="text-xs text-gray-400">View All</span>
        </div>

        {/* Scrollable Container */}
        <div className="relative">

          {/* side blur */}
          <div className='absolute -top-[2.4rem] -right-[0.8rem] h-[11rem] w-[0.9rem] bg-gray-500/10 blur-sm'></div>
          <div className='absolute -top-[2.4rem] -left-[0.8rem]  h-[11rem] w-[0.9rem] bg-gray-500/10 blur-sm'></div>
          
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer group bg-gray-800/20"
              >
                {/* Circular Image Container */}
                <div className="relative w-16 h-16 mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-yellow-300/50 group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-yellow-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Category Label */}
                <div className="text-center">
                  <p className="text-xs font-medium text-white mb-1 max-w-[70px] leading-tight">
                    {category.name}
                  </p>
                  <p className="text-[10px] text-gray-400 max-w-[70px] leading-tight">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default CategoryScroll
