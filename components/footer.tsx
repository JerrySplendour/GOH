'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Businesses', href: '/businesses' },
      { name: 'University', href: '/university' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Media Center', href: '/media' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold">
                GH
              </div>
              <span className="text-lg font-bold">Government of Heaven</span>
            </div>
            <p className="text-sm opacity-90">
              Leading international holding company serving diverse sectors with excellence and integrity.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:underline transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">info@govheaven.int</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">Global Operations Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} Government of Heaven International Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-all">
                Privacy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-all">
                Terms
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-all">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
