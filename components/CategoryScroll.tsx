'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const CategoryScroll = () => {

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

        {/* Swiper Container */}
        <div className="relative">
          {/* side blur */}
          <div className='absolute -top-[50%] -right-[0.8rem] h-[11rem] w-[0.9rem] bg-gray-700/20 blur-sm z-10'></div>
          <div className='absolute -top-[50%] -left-[0.8rem]  h-[11rem] w-[0.9rem] bg-gray-700/20 blur-sm z-10'></div>
          
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode={true}
            grabCursor={true}
            className="px-2 py-2"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id} className="!w-auto">
                <div className="flex flex-col items-center cursor-pointer group bg-gray-800/20">
                  {/* Circular Image Container */}
                  <div className="relative w-[4.4rem] h-[4.4rem] mb-2">
                    {/* Instagram story-style white border */}
                    <div className="w-full h-full rounded-full border-[0.14rem] border-yellow-800 p-[0.15rem] bg-white">
                      <div className="w-full h-full rounded-full overflow-hidden group-hover:scale-105">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0"></div>
                      </div>
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
              </SwiperSlide>
            ))}
          </Swiper>
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
