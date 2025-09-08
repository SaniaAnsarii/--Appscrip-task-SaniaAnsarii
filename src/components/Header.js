'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Top row: Logo and actions */}
          <div className="header-top">
            <a href="/" className="logo">
              LOGO
            </a>
            
            {/* Left spacer for mobile menu toggle */}
            <div className="header-left">
              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="header-actions">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <svg className="wishlist-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              
              <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              
              <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
              </svg>
              
              <button className="language-selector">
                ENG
                <svg className="dropdown-arrow" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Bottom row: Navigation */}
          <div className="header-nav">
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="/shop">SHOP</a>
              <a href="/skills">SKILLS</a>
              <a href="/stories">STORIES</a>
              <a href="/about">ABOUT</a>
              <a href="/contact">CONTACT US</a>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="mobile-breadcrumb">
        <div className="container">
          HOME | SHOP
        </div>
      </div>
      
      {/* Mobile filter bar - positioned under hamburger icon */}
      <div className="mobile-filter-bar">
        <button className="mobile-filter-button" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          FILTER
        </button>
        <select className="mobile-sort-dropdown">
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price-high">PRICE: HIGH TO LOW</option>
          <option value="price-low">PRICE: LOW TO HIGH</option>
        </select>
      </div>
      
      {/* Mobile filter panel overlay */}
      {isFilterOpen && (
        <div className="mobile-filter-overlay" onClick={() => setIsFilterOpen(false)}>
          <div className="mobile-filter-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-filter-header">
              <h3>FILTERS</h3>
              <button onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>
            <div className="mobile-filter-content">
              <div className="filter-section">
                <h4>IDEAL FOR</h4>
                <div className="filter-options">
                  <label><input type="checkbox" /> Men</label>
                  <label><input type="checkbox" /> Women</label>
                  <label><input type="checkbox" /> Kids</label>
                </div>
              </div>
              <div className="filter-section">
                <h4>OCCASION</h4>
                <div className="filter-options">
                  <label><input type="checkbox" /> Casual</label>
                  <label><input type="checkbox" /> Formal</label>
                  <label><input type="checkbox" /> Party</label>
                </div>
              </div>
              <div className="filter-section">
                <h4>WORK</h4>
                <div className="filter-options">
                  <label><input type="checkbox" /> Office</label>
                  <label><input type="checkbox" /> Travel</label>
                  <label><input type="checkbox" /> Gym</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
