'use client'

import { useState, useEffect } from 'react'
import FilterPanel from './FilterPanel'
import ProductGrid from './ProductGrid'

export default function ProductListing({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [sortBy, setSortBy] = useState('recommended')
  const [showSortOptions, setShowSortOptions] = useState(false)

  useEffect(() => {
    applyFilters(products, sortBy)
  }, [products, sortBy])

  const applyFilters = (items, sortKey) => {
    let filtered = [...items]

    switch (sortKey) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'popular':
        // Using random for demo, replace with rating/popularity if available
        filtered.sort(() => Math.random() - 0.5)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }

  const handleSortChange = (newSort) => {
    setSortBy(newSort)
    setShowSortOptions(false)
  }

  const getSortLabel = () => {
    switch (sortBy) {
      case 'newest': return 'NEWEST FIRST'
      case 'popular': return 'POPULAR'
      case 'price-high': return 'PRICE: HIGH TO LOW'
      case 'price-low': return 'PRICE: LOW TO HIGH'
      default: return 'RECOMMENDED'
    }
  }

  return (
    <div className="container">
      <div className="main-content">
        <FilterPanel 
          totalItems={products.length}
          onFilterChange={setFilteredProducts}
          products={products}
        />
        
        <div className="product-section">
          <div className="product-header">
            <span className="product-label">NEW PRODUCT</span>
            
            <div className="sort-dropdown">
              <button 
                className="sort-button"
                onClick={() => setShowSortOptions(!showSortOptions)}
              >
                {getSortLabel()}
                <svg 
                  className={`filter-arrow ${showSortOptions ? 'expanded' : ''}`}
                  width="16" 
                  height="16" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`sort-options ${showSortOptions ? 'show' : ''}`}>
                <div className="sort-option" onClick={() => handleSortChange('recommended')}>
                  RECOMMENDED
                </div>
                <div className="sort-option" onClick={() => handleSortChange('newest')}>
                  NEWEST FIRST
                </div>
                <div className="sort-option" onClick={() => handleSortChange('popular')}>
                  POPULAR
                </div>
                <div className="sort-option" onClick={() => handleSortChange('price-high')}>
                  PRICE: HIGH TO LOW
                </div>
                <div className="sort-option" onClick={() => handleSortChange('price-low')}>
                  PRICE: LOW TO HIGH
                </div>
              </div>
            </div>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}
