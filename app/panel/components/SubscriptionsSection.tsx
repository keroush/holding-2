'use client'

import { useState } from 'react'
import { Crown, Star, Check, X, Package } from 'lucide-react'

const SubscriptionsSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium')

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$9.99',
      period: 'per month',
      description: 'Perfect for individuals getting started',
      features: [
        'Access to basic courses',
        'Community forum access',
        'Email support',
        'Mobile app access'
      ],
      limitations: [
        'Limited to 5 courses per month',
        'No premium content',
        'No 1-on-1 mentoring'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$29.99',
      period: 'per month',
      description: 'Best for serious learners and professionals',
      features: [
        'Unlimited course access',
        'Premium content library',
        'Priority support',
        'Mobile & desktop apps',
        'Downloadable resources',
        'Certificate of completion',
        'Live webinars'
      ],
      limitations: [
        'No 1-on-1 mentoring'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99.99',
      period: 'per month',
      description: 'For teams and organizations',
      features: [
        'Everything in Premium',
        'Team management',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        '1-on-1 mentoring sessions',
        'Custom content creation'
      ],
      limitations: [],
      popular: false
    }
  ]

  const currentPlan = plans.find(plan => plan.id === 'premium')

  return (
    <div className="space-y-6">
      {/* Current Subscription */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Current Subscription</h3>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-lg border border-yellow-300/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
              <Crown className="h-5 w-5 text-gray-900" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{currentPlan?.name} Plan</h4>
              <p className="text-sm text-gray-400">Active until December 15, 2024</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{currentPlan?.price}</p>
            <p className="text-sm text-gray-400">{currentPlan?.period}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-medium">
            Manage Subscription
          </button>
          <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Download Invoice
          </button>
        </div>
      </div>

      {/* Available Plans */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Available Plans</h3>
        <p className="text-gray-400 text-center mb-6">
          Choose the plan that best fits your learning goals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-6 rounded-lg border-2 transition-all cursor-pointer ${
                plan.popular 
                  ? 'border-yellow-300 bg-yellow-300/10' 
                  : selectedPlan === plan.id 
                    ? 'border-yellow-300/50 bg-yellow-300/5' 
                    : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-white mb-2">Features included:</h5>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h5 className="font-medium text-white mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                className={`w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors ${
                  plan.id === 'premium'
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : selectedPlan === plan.id
                      ? 'bg-yellow-300 text-gray-900 hover:bg-yellow-200'
                      : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
                disabled={plan.id === 'premium'}
              >
                {plan.id === 'premium' ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Ready to upgrade your learning experience?
          </p>
          <button className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-200 transition-colors font-medium">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Billing History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-3 text-sm font-medium text-gray-400">Date</th>
                <th className="text-left py-3 text-sm font-medium text-gray-400">Description</th>
                <th className="text-left py-3 text-sm font-medium text-gray-400">Amount</th>
                <th className="text-left py-3 text-sm font-medium text-gray-400">Status</th>
                <th className="text-left py-3 text-sm font-medium text-gray-400">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 text-sm text-gray-300">Nov 15, 2024</td>
                <td className="py-3 text-sm text-gray-300">Premium Subscription</td>
                <td className="py-3 text-sm text-gray-300">$29.99</td>
                <td className="py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-yellow-300 hover:text-yellow-200 text-sm">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 text-sm text-gray-300">Oct 15, 2024</td>
                <td className="py-3 text-sm text-gray-300">Premium Subscription</td>
                <td className="py-3 text-sm text-gray-300">$29.99</td>
                <td className="py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-yellow-300 hover:text-yellow-200 text-sm">
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-gray-300">Sep 15, 2024</td>
                <td className="py-3 text-sm text-gray-300">Premium Subscription</td>
                <td className="py-3 text-sm text-gray-300">$29.99</td>
                <td className="py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-yellow-300 hover:text-yellow-200 text-sm">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionsSection