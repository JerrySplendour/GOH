'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { FileText, Video, Mic } from 'lucide-react'

const mediaItems = [
  {
    id: 1,
    type: 'press-release',
    title: 'Government of Heaven Announces Expansion into African Markets',
    date: 'May 18, 2024',
    excerpt: 'Strategic initiative to establish subsidiary operations across 12 African nations by 2026.',
    category: 'Press Release',
  },
  {
    id: 2,
    type: 'article',
    title: 'Leadership Through Purpose: CEO Interview',
    date: 'May 10, 2024',
    excerpt: 'In-depth discussion on how spiritual values drive business success and social impact.',
    category: 'Feature Article',
  },
  {
    id: 3,
    type: 'press-release',
    title: 'Haven Academy Named Top Education Institution in Europe',
    date: 'April 28, 2024',
    excerpt: 'Recognition for innovative programs and exceptional student outcomes across all campuses.',
    category: 'Press Release',
  },
  {
    id: 4,
    type: 'video',
    title: 'Sustainability Initiative: Our Path Forward',
    date: 'April 15, 2024',
    excerpt: 'Documentary on our commitment to renewable energy and environmental stewardship.',
    category: 'Video',
  },
  {
    id: 5,
    type: 'article',
    title: 'Breaking Barriers: Women in Leadership at GHI Agency',
    date: 'April 5, 2024',
    excerpt: 'Stories of female leaders driving innovation and change across our subsidiaries.',
    category: 'Feature Article',
  },
  {
    id: 6,
    type: 'press-release',
    title: 'TechVision Global Launches Revolutionary AI Platform',
    date: 'March 25, 2024',
    excerpt: 'Next-generation artificial intelligence solutions reshaping industry standards.',
    category: 'Press Release',
  },
  {
    id: 7,
    type: 'podcast',
    title: 'Podcast Series: Building Tomorrow',
    date: 'March 15, 2024',
    excerpt: 'Weekly conversations with business leaders, innovators, and changemakers.',
    category: 'Podcast',
  },
  {
    id: 8,
    type: 'video',
    title: 'Employee Stories: Making a Difference',
    date: 'March 1, 2024',
    excerpt: 'Inspiring narratives from our team members around the world.',
    category: 'Video',
  },
]

const categories = ['All', 'Press Release', 'Feature Article', 'Video', 'Podcast']

export default function Media() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredMedia = selectedCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(m => m.category === selectedCategory)

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5" />
      case 'podcast':
        return <Mic className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Media Center</h1>
          <p className="text-lg text-foreground/60">
            Latest news, press releases, insights, and stories from Government of Heaven International Agency
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-foreground/60 mb-4">Filter by Type</p>
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

      {/* Media Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="group rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="inline-block p-2 bg-primary/10 rounded text-primary group-hover:bg-primary/20 transition-colors">
                      {getIcon(item.type)}
                    </div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p className="text-sm text-foreground/50 mb-3">{item.date}</p>

                  {/* Excerpt */}
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors opacity-0 group-hover:opacity-100 duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-foreground/60">
              Showing {filteredMedia.length} of {mediaItems.length} items
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-foreground/60 mb-6">
            Subscribe to our newsletter for the latest news and updates from Government of Heaven International Agency.
          </p>
          <form className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              required
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
