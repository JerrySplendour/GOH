'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Users, Zap, Heart } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/50 rounded-full text-sm font-medium text-accent">
                Welcome to Global Leadership
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Government of Heaven International Agency
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                A visionary holding company serving diverse global sectors. Unified by principles of excellence, integrity, and spiritual stewardship, we lead innovation across technology, education, healthcare, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="w-full sm:w-auto" size="lg">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div
              className={`relative h-96 md:h-full transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 text-center">
                  <Globe className="w-24 h-24 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-foreground/60 font-medium">Global Impact & Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '50+', description: 'Subsidiary Companies' },
              { label: '100K+', description: 'Employees Worldwide' },
              { label: '15+', description: 'Countries Served' },
              { label: '24/7', description: 'Global Operations' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.label}
                </div>
                <p className="text-sm text-foreground/60 mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Driving Forces */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Driving Forces</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Four pillars guide our mission to create lasting value across all sectors of society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: 'Global Vision',
                description: 'Serving diverse markets across continents with culturally-aware solutions.',
              },
              {
                icon: Users,
                title: 'People First',
                description: 'Investing in human capital and fostering inclusive growth opportunities.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Pioneering breakthrough technologies and forward-thinking strategies.',
              },
              {
                icon: Heart,
                title: 'Stewardship',
                description: 'Guided by spiritual principles and commitment to societal wellbeing.',
              },
            ].map((force, idx) => {
              const Icon = force.icon
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:bg-card/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{force.title}</h3>
                  <p className="text-sm text-foreground/60">{force.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Subsidiary Companies</h2>
              <p className="text-foreground/60">Excellence across multiple industries and sectors</p>
            </div>
            <Link href="/businesses">
              <Button variant="outline">View All <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'TechVision Global', category: 'Technology', description: 'Cutting-edge software and infrastructure solutions.' },
              { name: 'Haven Academy', category: 'Education', description: 'World-class educational programs and institutions.' },
              { name: 'Celestial Healthcare', category: 'Healthcare', description: 'Comprehensive medical and wellness services.' },
              { name: 'Divine Finance Corp', category: 'Finance', description: 'Strategic financial services and investments.' },
              { name: 'Heaven Energy', category: 'Energy', description: 'Sustainable energy solutions for tomorrow.' },
              { name: 'Gospel Media Networks', category: 'Media', description: 'Content creation and digital communications.' },
            ].map((business, idx) => (
              <div
                key={idx}
                className="group rounded-lg border border-border bg-background p-6 hover:shadow-md hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-3 inline-block px-3 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">
                  {business.category}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {business.name}
                </h3>
                <p className="text-sm text-foreground/60">{business.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/businesses" className="text-sm text-primary font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To build a global network of thriving enterprises that serve humanity with excellence, guided by spiritual principles of stewardship, justice, and compassion. We are committed to creating economic value while fostering human dignity, environmental sustainability, and community prosperity across all the markets we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', description: 'Pursuing the highest standards in all endeavors' },
              { title: 'Integrity', description: 'Operating with unwavering ethical principles' },
              { title: 'Impact', description: 'Creating lasting positive change in society' },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
          <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
            Discover how Government of Heaven International Agency can support your growth and success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/businesses">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Our Companies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
