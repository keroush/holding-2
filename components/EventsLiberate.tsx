'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react'

const EventsLiberate = () => {
  const liberateEvents = [
    {
      title: "Grow your business exponentially",
      subtitle: "Business Mastery",
      description: "Get the concrete strategies and tools that have transformed thousands of businesses at every stage.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "May 10-15, 2024",
      location: "Las Vegas, NV",
      attendees: "5,000+",
      gradient: "from-cyan-300/70 to-cyan-300/70"
    },
    {
      title: "Become a great leader",
      subtitle: "Leadership Academy",
      description: "Learn the tools, strategies and secrets to create immediate impact and inspire positive, lasting change in others.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "July 20-25, 2024",
      location: "Chicago, IL",
      attendees: "1,500+",
      gradient: "from-cyan-300/70 to-cyan-300/70"
    },
    {
      title: "Create life according to your terms",
      subtitle: "Date With Destiny",
      description: "Dive deep into the patterns that are holding you back, ignite your motivation, and build momentum toward the life of your dreams.",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "April 22-28, 2024",
      location: "Palm Beach, FL",
      attendees: "3,500+",
      gradient: "from-cyan-300/70 to-cyan-300/70"
    },
    {
      title: "Build your money machine",
      subtitle: "Wealth Mastery",
      description: "Shift your money mindset and learn wealth creation and growth strategies from trusted financial partners.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "June 8-12, 2024",
      location: "New York, NY",
      attendees: "2,500+",
      gradient: "from-cyan-300/70 to-cyan-300/70"
    },
    {
      title: "Master mind and body",
      subtitle: "Life Mastery",
      description: "Gather knowledge and sustainable strategies to reinvigorate your physical, mental, and emotional health.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "September 15-20, 2024",
      location: "San Diego, CA",
      attendees: "2,000+",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Experience explosive growth",
      subtitle: "Unleash the Power Within",
      description: "Get all the tools and strategies you need to break through barriers, harness your power, and create a life you love.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 15-18, 2024",
      location: "Los Angeles, CA",
      attendees: "12,000+",
      gradient: "from-cyan-300/70 to-cyan-300/70"
    }
  ]

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
            Events that <span className="gradient-text">liberate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your life through immersive experiences designed to break through barriers 
            and unlock your full potential.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            Discover Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liberateEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                
                {/* Event Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-sm font-medium opacity-90">{event.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-1 text-sm opacity-90">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-2" />
                      {event.attendees} Expected
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {event.description}
              </p>
            </motion.div>
          ))}
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
            Ready to liberate your potential?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their lives through these powerful experiences. 
            Your extraordinary life is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
              View All Events
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-white hover:text-white transition-all duration-300">
              Get Free Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsLiberate
