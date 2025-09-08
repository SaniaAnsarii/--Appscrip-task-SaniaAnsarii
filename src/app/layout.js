import './globals.css'

export const metadata = {
  title: 'mettä muse - Discover Our Products | Premium Lifestyle Collection',
  description: 'Explore mettä muse\'s premium collection of lifestyle products. Discover unique, customizable items including bags, accessories, and home decor. Sign in to view pricing and create your perfect collection.',
  keywords: 'mettä muse, lifestyle products, premium collection, bags, accessories, home decor, customizable products',
  authors: [{ name: 'mettä muse' }],
  openGraph: {
    title: 'mettä muse - Discover Our Products',
    description: 'Explore mettä muse\'s premium collection of lifestyle products',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mettä muse - Discover Our Products',
    description: 'Explore mettä muse\'s premium collection of lifestyle products',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mettamuse.com/products" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "mettä muse",
              "url": "https://mettamuse.com",
              "description": "Premium lifestyle products and accessories",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mettamuse.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mettä muse",
              "url": "https://mettamuse.com",
              "logo": "https://mettamuse.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 221 133 5360",
                "contactType": "customer service",
                "email": "customercare@mettamuse.com"
              },
              "sameAs": [
                "https://instagram.com/mettamuse",
                "https://linkedin.com/company/mettamuse",
                "https://facebook.com/mettamuse",
                "https://twitter.com/mettamuse"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
