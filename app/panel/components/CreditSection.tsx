'use client'

import { useState } from 'react'
import { CreditCard, Plus, Trash2, Shield, Calendar, DollarSign } from 'lucide-react'

const CreditSection = () => {
  const [showAddCard, setShowAddCard] = useState(false)
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true
    },
    {
      id: 2,
      type: 'mastercard',
      last4: '8888',
      expiryMonth: '08',
      expiryYear: '2026',
      isDefault: false
    }
  ])

  const [newCard, setNewCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    isDefault: false
  })

  const handleAddCard = () => {
    const card = {
      id: Date.now(),
      type: newCard.number.startsWith('4') ? 'visa' : 'mastercard',
      last4: newCard.number.slice(-4),
      expiryMonth: newCard.expiry.split('/')[0],
      expiryYear: '20' + newCard.expiry.split('/')[1],
      isDefault: newCard.isDefault
    }
    
    setCards([...cards, card])
    setNewCard({ number: '', expiry: '', cvc: '', name: '', isDefault: false })
    setShowAddCard(false)
  }

  const handleDeleteCard = (cardId: number) => {
    setCards(cards.filter(card => card.id !== cardId))
  }

  const handleSetDefault = (cardId: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === cardId
    })))
  }

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return (
          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
            VISA
          </div>
        )
      case 'mastercard':
        return (
          <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
            MC
          </div>
        )
      default:
        return <CreditCard className="h-5 w-5 text-yellow-300" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Balance */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 text-gray-900">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
            <p className="text-3xl font-bold">$247.50</p>
            <p className="text-gray-800 text-sm mt-1">Available for purchases</p>
          </div>
          <div className="text-right">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Add Funds
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-yellow-300" />
            <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
          </div>
          <button
            onClick={() => setShowAddCard(true)}
            className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors flex items-center gap-2 font-medium"
          >
            <Plus className="h-4 w-4" />
            Add Card
          </button>
        </div>

        <div className="space-y-3">
          {cards.map((card) => (
            <div key={card.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
              <div className="flex items-center gap-3">
                {getCardIcon(card.type)}
                <div>
                  <p className="font-medium text-white">•••• •••• •••• {card.last4}</p>
                  <p className="text-sm text-gray-400">Expires {card.expiryMonth}/{card.expiryYear}</p>
                </div>
                {card.isDefault && (
                  <span className="bg-yellow-300/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                    Default
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {!card.isDefault && (
                  <button
                    onClick={() => handleSetDefault(card.id)}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Set Default
                  </button>
                )}
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showAddCard && (
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
            <h4 className="text-white font-medium mb-4">Add New Card</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Card Number</label>
                <input
                  type="text"
                  value={newCard.number}
                  onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Expiry Date</label>
                <input
                  type="text"
                  value={newCard.expiry}
                  onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">CVC</label>
                <input
                  type="text"
                  value={newCard.cvc}
                  onChange={(e) => setNewCard({...newCard, cvc: e.target.value})}
                  placeholder="123"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Cardholder Name</label>
                <input
                  type="text"
                  value={newCard.name}
                  onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddCard}
                className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
              >
                Add Card
              </button>
              <button
                onClick={() => setShowAddCard(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-700/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="h-5 w-5 text-yellow-300" />
          <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <Plus className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="font-medium text-white">Funds Added</p>
                <p className="text-sm text-gray-400">Nov 15, 2024</p>
              </div>
            </div>
            <span className="text-green-400 font-medium">+$50.00</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-white">Premium Subscription</p>
                <p className="text-sm text-gray-400">Nov 15, 2024</p>
              </div>
            </div>
            <span className="text-red-400 font-medium">-$29.99</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-white">Course Purchase</p>
                <p className="text-sm text-gray-400">Nov 10, 2024</p>
              </div>
            </div>
            <span className="text-red-400 font-medium">-$49.99</span>
          </div>
        </div>
        
        <button className="w-full mt-4 text-yellow-300 hover:text-yellow-200 font-medium text-sm">
          View All Transactions
        </button>
      </div>
    </div>
  )
}

export default CreditSection