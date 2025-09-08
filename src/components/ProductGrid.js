'use client'

import { useState } from 'react'

export default function ProductGrid({ products, loading }) {
  const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId)
      } else {
        newFavorites.add(productId)
      }
      return newFavorites
    })
  }

  if (loading) {
    return (
      <div className="loading">
        <p>Loading products...</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center">
        <p>No products found.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img 
              src={product.image} 
              alt={`${product.name} - Premium lifestyle product from appscrip`}
              className="product-image"
              loading="lazy"
            />
            {!product.inStock && (
              <div className="out-of-stock-overlay">
                <div className="out-of-stock-text">OUT OF STOCK</div>
              </div>
            )}
          </div>
          
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-pricing-row">
              <p className="product-pricing">
                Sign in or Create an account to see pricing
              </p>
              <button 
                className="heart-icon"
                onClick={() => toggleFavorite(product.id)}
                aria-label={`${favorites.has(product.id) ? 'Remove from' : 'Add to'} favorites`}
              >
                <svg 
                  fill={favorites.has(product.id) ? "#ef4444" : "none"} 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="20" 
                  height="20"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
