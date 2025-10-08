'use client'

import { motion } from 'framer-motion'
import { Brain, DollarSign, Heart, Users, Briefcase, Crown, Smile } from 'lucide-react'

const Pillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Mindset',
      description: 'Master your psychology and unlock your true potential with proven mindset strategies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Wealth',
      description: 'Build sustainable wealth with time-tested financial strategies and investment principles.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Health',
      description: 'Optimize your physical and mental well-being for peak performance and vitality.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Relationships',
      description: 'Create deeper connections and meaningful relationships in all areas of your life.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Business',
      description: 'Scale your business with proven strategies used by industry leaders worldwide.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Crown,
      title: 'Leadership',
      description: 'Develop the leadership skills to inspire and create positive change in others.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smile,
      title: 'Happiness',
      description: 'Discover the keys to lasting fulfillment and joy in your personal and professional life.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master Every Area of Your Life
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Close the gap between where you are and where you want to be with our scientifically 
            proven system across the 7 pillars of an extraordinary life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg card-hover cursor-pointer group border border-gray-700"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="mt-4">
                  <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                    Explore →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
            Start Your Journey Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pillars
