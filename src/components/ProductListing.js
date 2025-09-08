'use client'

import { useState, useEffect } from 'react'
import FilterPanel from './FilterPanel'
import ProductGrid from './ProductGrid'

export default function ProductListing({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState('recommended')
  const [showSortOptions, setShowSortOptions] = useState(false)

  useEffect(() => {
    if (initialProducts.length === 0) {
      fetchProducts()
    }
  }, [initialProducts.length])

  useEffect(() => {
    applyFilters()
  }, [products, sortBy])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      
      // Transform the data to match our design
      const transformedProducts = data.map(product => ({
        id: product.id,
        name: product.title,
        image: product.image,
        price: product.price,
        category: product.category,
        description: product.description,
        inStock: Math.random() > 0.2 // Randomly set some as out of stock
      }))
      
      setProducts(transformedProducts)
      setFilteredProducts(transformedProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback to mock data if API fails
      setProducts(getMockProducts())
      setFilteredProducts(getMockProducts())
    } finally {
      setLoading(false)
    }
  }

  const getMockProducts = () => [
    {
      id: 1,
      name: 'Premium Backpack',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 89.99,
      category: 'bags',
      description: 'High-quality backpack for everyday use',
      inStock: true
    },
    {
      id: 2,
      name: 'Designer Handbag',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 149.99,
      category: 'bags',
      description: 'Elegant handbag for special occasions',
      inStock: false
    },
    {
      id: 3,
      name: 'Leather Wallet',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 59.99,
      category: 'accessories',
      description: 'Genuine leather wallet',
      inStock: true
    },
    {
      id: 4,
      name: 'Canvas Tote',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 39.99,
      category: 'bags',
      description: 'Eco-friendly canvas tote bag',
      inStock: true
    },
    {
      id: 5,
      name: 'Baseball Cap',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 29.99,
      category: 'accessories',
      description: 'Comfortable baseball cap',
      inStock: true
    },
    {
      id: 6,
      name: 'Travel Duffel',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      price: 79.99,
      category: 'bags',
      description: 'Spacious travel duffel bag',
      inStock: true
    }
  ]

  const applyFilters = () => {
    let filtered = [...products]

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'popular':
        filtered.sort((a, b) => Math.random() - 0.5) // Random for demo
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      default:
        // Keep original order for 'recommended'
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
          
          <ProductGrid 
            products={filteredProducts} 
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
