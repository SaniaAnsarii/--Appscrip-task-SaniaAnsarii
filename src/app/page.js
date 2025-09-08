import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductListing from '../components/ProductListing'
import Footer from '../components/Footer'


async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=12', {
      next: { revalidate: 3600 } 
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    
    const data = await response.json()
    
  
    return data.map(product => ({
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      category: product.category,
      description: product.description,
      inStock: Math.random() > 0.2 // Randomly set some as out of stock
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return mock data as fallback
    return [
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
  }
}

export default async function Home() {
  const initialProducts = await getProducts()

  return (
    <main>
      <Header />
      <Hero />
      <ProductListing initialProducts={initialProducts} />
      <Footer />
    </main>
  )
}
