'use client'

import { 
  Building2, 
  GraduationCap, 
  Users, 
  Zap
} from 'lucide-react'

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      name: "Real",
      icon: Building2,
      bgColor: "bg-blue-600",
      textColor: "text-blue-200"
    },
    {
      id: 2,
      name: "Education",
      icon: GraduationCap,
      bgColor: "bg-green-600",
      textColor: "text-green-200"
    },
    {
      id: 3,
      name: "HR",
      icon: Users,
      bgColor: "bg-purple-600",
      textColor: "text-purple-200"
    },
    {
      id: 4,
      name: "Accelerator",
      icon: Zap,
      bgColor: "bg-yellow-600",
      textColor: "text-yellow-200"
    }, {
      id: 1,
      name: "Real",
      icon: Building2,
      bgColor: "bg-blue-600",
      textColor: "text-blue-200"
    },
    {
      id: 2,
      name: "Education",
      icon: GraduationCap,
      bgColor: "bg-green-600",
      textColor: "text-green-200"
    },
    {
      id: 3,
      name: "HR",
      icon: Users,
      bgColor: "bg-purple-600",
      textColor: "text-purple-200"
    },
    {
      id: 4,
      name: "Accelerator",
      icon: Zap,
      bgColor: "bg-yellow-600",
      textColor: "text-yellow-200"
    },
  ]

  return (
    <section className="md:hidden bg-gray-900 py-6 rounded-2xl">
      <div className="px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-white mb-2">Our Services</h3>
          <p className="text-sm text-gray-400">Explore what we offer</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className={`h-6 w-6 ${service.textColor}`} />
                </div>
                
                {/* Service Label */}
                <span className="text-xs text-white text-center leading-tight max-w-[60px]">
                  {service.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-6">
          <button className="text-yellow-300 text-sm font-medium hover:text-yellow-400 transition-colors">
            View All Services →
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
