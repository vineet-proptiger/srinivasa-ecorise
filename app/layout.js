import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://sreenivasaecorise.in'),
  title: 'Sreenivasa Sonthalia Ecorise | Luxury 3, 4 BHK Homes in Rajendra Nagar, Hyderabad',
  description: "Sreenivasa Sonthalia Ecorise — A thoughtfully planned 5.24-acre landmark development in Rajendra Nagar, Hyderabad by Sreenivasa Constructions. Luxury 3 BHK and 4 BHK apartments in iconic G+30 towers.",
  alternates: {
    canonical: 'https://sreenivasaecorise.in/',
  },
  openGraph: {
    title: 'Sreenivasa Sonthalia Ecorise | Luxury Integrated Development in Rajendra Nagar',
    description: "Discover luxury 3, 4 BHK apartments at Sreenivasa Sonthalia Ecorise, an integrated 5.24-acre landmark development in Rajendra Nagar, Hyderabad.",
    url: 'https://sreenivasaecorise.in/',
    siteName: 'Sreenivasa Sonthalia Ecorise',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sreenivasa Sonthalia Ecorise Rajendra Nagar Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sreenivasa Sonthalia Ecorise | Luxury 3, 4 BHK Homes in Rajendra Nagar',
    description: "A thoughtfully planned 5.24-acre landmark development in Rajendra Nagar, Hyderabad by Sreenivasa Constructions.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Sreenivasa Sonthalia Ecorise Rajendra Nagar",
              "url": "https://sreenivasaecorise.in/",
              "logo": "https://sreenivasaecorise.in/images/logo/Logo.webp",
              "image": "https://sreenivasaecorise.in/images/hero/banner.webp",
              "description": "Sreenivasa Sonthalia Ecorise, Hyderabad's premier luxury integrated development in Rajendra Nagar offering 3, 4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rajendra Nagar",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500030",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 2.2 Cr Onwards",
              "sameAs": [
                "https://sreenivasaecorise.in"
              ]
            })
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          button,
          button:hover,
          button *,
          button *:hover,
          [type="button"],
          [type="button"]:hover,
          [type="submit"],
          [type="submit"]:hover,
          [type="reset"],
          [type="reset"]:hover,
          [role="button"],
          [role="button"]:hover,
          .btn,
          .btn:hover,
          .btn *,
          .btn *:hover,
          .btn-gold,
          .btn-gold:hover,
          .btn-gold-outline,
          .btn-gold-outline:hover,
          .btn-primary,
          .btn-primary:hover,
          .btn-brand,
          .btn-brand:hover,
          .theme_btn1,
          .theme_btn1:hover,
          .btn-floating-tab,
          .btn-floating-tab:hover,
          a,
          a:hover,
          a *,
          a *:hover,
          .cursor-pointer,
          .cursor-pointer:hover {
            cursor: pointer !important;
          }
        `}} />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
