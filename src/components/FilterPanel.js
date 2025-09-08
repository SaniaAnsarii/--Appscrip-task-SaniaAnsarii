'use client'

import { useState } from 'react'

export default function FilterPanel({ totalItems, onFilterChange, products }) {
  const [expandedFilters, setExpandedFilters] = useState({})
  const [customizable, setCustomizable] = useState(false)
  const [filters, setFilters] = useState({
    idealFor: 'all',
    occasion: 'all',
    work: 'all',
    fabric: 'all',
    segment: 'all',
    suitableFor: 'all',
    rawMaterials: 'all',
    pattern: 'all'
  })

  const filterOptions = {
    idealFor: ['Men', 'Women', 'Baby & Kids'],
    occasion: ['Casual', 'Formal', 'Party', 'Travel'],
    work: ['Office', 'Outdoor', 'Sports', 'Creative'],
    fabric: ['Cotton', 'Leather', 'Canvas', 'Synthetic'],
    segment: ['Bags', 'Accessories', 'Home', 'Fashion'],
    suitableFor: ['Daily Use', 'Travel', 'Work', 'Special Events'],
    rawMaterials: ['Natural', 'Recycled', 'Organic', 'Premium'],
    pattern: ['Solid', 'Striped', 'Floral', 'Geometric']
  }

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }))
  }

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (currentFilters) => {
    let filtered = [...products]

    if (customizable) {
      filtered = filtered.filter(product => product.category === 'bags')
    }

    // Apply other filters
    Object.entries(currentFilters).forEach(([key, value]) => {
      if (value !== 'all') {
     
      }
    })

    onFilterChange(filtered)
  }

  const handleCustomizableChange = (checked) => {
    setCustomizable(checked)
    applyFilters(filters)
  }

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <span className="items-count">{totalItems} ITEMS</span>
        <a href="#" className="hide-filter">&lt; HIDE FILTER</a>
      </div>

      <div className="customizable-checkbox">
        <label>
          <input 
            type="checkbox" 
            checked={customizable}
            onChange={(e) => handleCustomizableChange(e.target.checked)}
          />
          CUSTOMIZABLE
        </label>
      </div>

      {Object.entries(filterOptions).map(([filterName, options]) => (
        <div key={filterName} className="filter-group">
          <div 
            className="filter-label"
            onClick={() => toggleFilter(filterName)}
          >
            {filterName.replace(/([A-Z])/g, ' $1').toUpperCase()}
            <svg 
              className={`filter-arrow ${expandedFilters[filterName] ? 'expanded' : ''}`}
              width="16" 
              height="16" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className={`filter-options ${expandedFilters[filterName] ? 'expanded' : ''}`}>
            <div className="filter-option">
              <input 
                type="radio" 
                id={`${filterName}-all`}
                name={filterName}
                value="all"
                checked={filters[filterName] === 'all'}
                onChange={(e) => handleFilterChange(filterName, e.target.value)}
              />
              <label htmlFor={`${filterName}-all`}>All</label>
            </div>
            
            {options.map(option => (
              <div key={option} className="filter-option">
                <input 
                  type="radio" 
                  id={`${filterName}-${option}`}
                  name={filterName}
                  value={option.toLowerCase()}
                  checked={filters[filterName] === option.toLowerCase()}
                  onChange={(e) => handleFilterChange(filterName, e.target.value)}
                />
                <label htmlFor={`${filterName}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
