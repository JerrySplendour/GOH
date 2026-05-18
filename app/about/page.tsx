'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Award, Target } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-lg text-foreground/60">
            Understanding the vision, values, and impact of Government of Heaven International Agency
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Government of Heaven International Agency was established with a singular vision: to create a global network of enterprises that operate with excellence, integrity, and spiritual stewardship. Founded on the principles of divine governance and human flourishing, we have grown into a leading international holding company.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                What began as a mission to serve humanity with purpose has evolved into a diverse portfolio spanning technology, education, healthcare, finance, energy, media, and beyond. Each subsidiary operates independently while remaining united by our core values and commitment to positive impact.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, with operations across 15+ countries and employing over 100,000 professionals worldwide, we continue our commitment to creating value that transcends financial returns—value measured in lives improved, communities strengthened, and futures brightened.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Excellence',
                    description: 'We pursue the highest standards in everything we do, refusing to compromise on quality or integrity.',
                  },
                  {
                    title: 'Integrity',
                    description: 'Honest, ethical conduct is non-negotiable. We operate with transparency and accountability.',
                  },
                  {
                    title: 'Stewardship',
                    description: 'We manage resources responsibly, guided by spiritual principles and long-term thinking.',
                  },
                  {
                    title: 'Innovation',
                    description: 'We embrace change, invest in breakthrough thinking, and lead industry transformation.',
                  },
                  {
                    title: 'Inclusivity',
                    description: 'Diverse perspectives strengthen us. We foster belonging and equal opportunity for all.',
                  },
                  {
                    title: 'Impact',
                    description: 'Our success is measured by the positive change we create in society and the environment.',
                  },
                ].map((value, idx) => (
                  <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                    <p className="text-sm text-foreground/60">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spiritual Foundation */}
            <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Spiritual Foundation</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                While we are a fully professional, secular business operation, our founding principles are grounded in spiritual values. We believe that business can be a powerful force for good when guided by principles of justice, compassion, and stewardship.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our commitment to serving humanity with integrity, protecting the vulnerable, promoting human dignity, and creating sustainable prosperity reflects these spiritual convictions. We believe that true success is measured not only in financial returns but in the wellbeing of people and communities we serve.
              </p>
            </div>

            {/* Leadership & Governance */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Leadership & Governance</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Government of Heaven International Agency operates with transparent governance structures, professional management, and a Board of Directors committed to strategic oversight and accountability. Each of our subsidiary companies maintains operational autonomy while adhering to group-wide standards of excellence and ethics.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: 'Strategic Vision', description: 'Clear long-term direction and growth objectives' },
                  { icon: Award, title: 'Professional Excellence', description: 'Expert management and world-class talent' },
                  { icon: CheckCircle, title: 'Accountability', description: 'Transparent operations and stakeholder responsibility' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Global Reach */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Global Reach, Local Impact</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Operating across multiple continents and serving diverse markets, we maintain a commitment to understanding local cultures, needs, and opportunities. Our global scale enables us to share best practices and resources, while our local presence ensures we remain responsive and relevant.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { region: 'North America', presence: '●●●●●' },
                  { region: 'Europe', presence: '●●●●●' },
                  { region: 'Asia Pacific', presence: '●●●●●' },
                  { region: 'Africa & Middle East', presence: '●●●' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-card border border-border">
                    <p className="font-semibold text-foreground text-sm mb-2">{item.region}</p>
                    <p className="text-accent text-lg">{item.presence}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
