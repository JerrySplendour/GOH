'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const allBusinesses = [
  {
    id: 1,
    name: 'TechVision Global',
    category: 'Technology',
    description: 'Leading provider of cutting-edge software solutions, cloud infrastructure, and AI-powered technologies.',
    established: '2015',
    employees: '8,500',
    regions: 'Global',
  },
  {
    id: 2,
    name: 'Haven Academy',
    category: 'Education',
    description: 'World-class educational institution offering K-12 programs, vocational training, and professional development.',
    established: '2010',
    employees: '3,200',
    regions: 'North America, Europe, Asia',
  },
  {
    id: 3,
    name: 'Celestial Healthcare',
    category: 'Healthcare',
    description: 'Comprehensive healthcare delivery system including hospitals, clinics, research facilities, and wellness programs.',
    established: '2008',
    employees: '15,000',
    regions: 'Global',
  },
  {
    id: 4,
    name: 'Divine Finance Corp',
    category: 'Finance',
    description: 'Financial services company providing wealth management, investment banking, and corporate finance solutions.',
    established: '2012',
    employees: '4,500',
    regions: 'Global',
  },
  {
    id: 5,
    name: 'Heaven Energy Solutions',
    category: 'Energy',
    description: 'Renewable energy company pioneering sustainable solutions including solar, wind, and clean energy infrastructure.',
    established: '2018',
    employees: '2,800',
    regions: 'Europe, North America, Asia',
  },
  {
    id: 6,
    name: 'Gospel Media Networks',
    category: 'Media',
    description: 'Digital content creation and broadcasting company producing quality programming and digital media.',
    established: '2013',
    employees: '1,200',
    regions: 'Global',
  },
  {
    id: 7,
    name: 'Celestial Manufacturing',
    category: 'Manufacturing',
    description: 'Advanced manufacturing facility specializing in precision engineering and industrial solutions.',
    established: '2011',
    employees: '6,300',
    regions: 'North America, Europe, Asia',
  },
  {
    id: 8,
    name: 'Haven Agribusiness',
    category: 'Agriculture',
    description: 'Sustainable agricultural enterprise focused on food production, research, and rural development.',
    established: '2014',
    employees: '2,100',
    regions: 'Africa, Asia, South America',
  },
  {
    id: 9,
    name: 'Divine Logistics Group',
    category: 'Logistics',
    description: 'Global supply chain and logistics company providing comprehensive transportation and warehousing services.',
    established: '2016',
    employees: '5,600',
    regions: 'Global',
  },
  {
    id: 10,
    name: 'Heaven Real Estate',
    category: 'Real Estate',
    description: 'Premium property development company creating sustainable communities and commercial spaces.',
    established: '2017',
    employees: '1,800',
    regions: 'Global',
  },
  {
    id: 11,
    name: 'Celestial Hospitality',
    category: 'Hospitality',
    description: 'Leading hospitality group managing luxury hotels, resorts, and experience destinations worldwide.',
    established: '2015',
    employees: '4,200',
    regions: 'Global',
  },
  {
    id: 12,
    name: 'Gospel Consulting',
    category: 'Consulting',
    description: 'Strategic management consulting firm providing business advisory and organizational transformation services.',
    established: '2016',
    employees: '1,500',
    regions: 'Global',
  },
]

const categories = ['All', ...Array.from(new Set(allBusinesses.map(b => b.category)))]

export default function Businesses() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBusinesses = selectedCategory === 'All' 
    ? allBusinesses 
    : allBusinesses.filter(b => b.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Businesses</h1>
          <p className="text-lg text-foreground/60">
            A diverse portfolio of world-class companies serving multiple industries and markets
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-foreground/60 mb-4">Filter by Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <div
                key={business.id}
                className="group rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Header with Category */}
                <div className="p-6 pb-4">
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded text-xs font-semibold mb-3 group-hover:bg-accent/30 transition-colors">
                    {business.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {business.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-6 pb-4">
                  <p className="text-sm text-foreground/60 line-clamp-3">
                    {business.description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="px-6 py-4 bg-muted/50 border-t border-border grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">Established</p>
                    <p className="font-semibold text-foreground">{business.established}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">Employees</p>
                    <p className="font-semibold text-foreground text-sm">{business.employees}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">Regions</p>
                    <p className="font-semibold text-foreground text-xs">{business.regions.split(',').length} Regions</p>
                  </div>
                </div>

                {/* Footer with Link */}
                <div className="px-6 py-4 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-12 text-center">
            <p className="text-foreground/60">
              Showing {filteredBusinesses.length} of {allBusinesses.length} businesses
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12+', label: 'Companies' },
              { number: '100K+', label: 'Employees' },
              { number: '15+', label: 'Countries' },
              { number: '$5B+', label: 'Combined Revenue' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
