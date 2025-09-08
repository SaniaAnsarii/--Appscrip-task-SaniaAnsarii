import './globals.css'

export const metadata = {
  title: 'appscrip - Discover Our Products | Premium Lifestyle Collection',
  description: 'Explore appscrip\'s premium collection of lifestyle products. Discover unique, customizable items including bags, accessories, and home decor. Sign in to view pricing and create your perfect collection.',
  keywords: 'appscrip, lifestyle products, premium collection, bags, accessories, home decor, customizable products',
  authors: [{ name: 'appscrip' }],
  openGraph: {
    title: 'appscrip - Discover Our Products',
    description: 'Explore appscrip\'s premium collection of lifestyle products',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'appscrip - Discover Our Products',
    description: 'Explore appscrip\'s premium collection of lifestyle products',
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
        <link rel="canonical" href="https://appscrip.com/products" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "appscrip",
              "url": "https://appscrip.com",
              "description": "Premium lifestyle products and accessories",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://appscrip.com/search?q={search_term_string}",
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
              "name": "appscrip",
              "url": "https://appscrip.com",
              "logo": "https://appscrip.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 221 133 5360",
                "contactType": "customer service",
                "email": "customercare@appscrip.com"
              },
              "sameAs": [
                "https://instagram.com/appscrip",
                "https://linkedin.com/company/appscrip",
                "https://facebook.com/appscrip",
                "https://twitter.com/appscrip"
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
