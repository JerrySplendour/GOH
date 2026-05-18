'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/60">
            We&apos;d love to hear from you. Contact us with any inquiries or to learn more about our organization.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@govheaven.int',
                subtext: 'Response within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                subtext: 'Monday - Friday, 9AM - 6PM EST',
              },
              {
                icon: MapPin,
                title: 'Headquarters',
                content: 'Global Operations Center',
                subtext: '123 Executive Plaza, New York, NY 10001',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-medium text-foreground mb-1">{item.content}</p>
                  <p className="text-sm text-foreground/60">{item.subtext}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form & Hours */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="employment">Employment</option>
                      <option value="media">Media Inquiry</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={submitted}
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                    {!submitted && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>

                  {submitted && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Business Hours & Offices */}
            <div className="space-y-6">
              {/* Hours */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Monday - Friday</p>
                    <p className="text-foreground/60">9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Saturday</p>
                    <p className="text-foreground/60">10:00 AM - 2:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sunday</p>
                    <p className="text-foreground/60">Closed</p>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Regional Offices</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">North America</p>
                    <p className="text-foreground/60 text-xs">New York, Toronto</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Europe</p>
                    <p className="text-foreground/60 text-xs">London, Berlin</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Asia Pacific</p>
                    <p className="text-foreground/60 text-xs">Singapore, Tokyo</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Africa</p>
                    <p className="text-foreground/60 text-xs">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How can I apply to work for Government of Heaven International Agency?',
                a: 'Visit our careers page or contact our human resources team at careers@govheaven.int. We actively recruit for positions across all our subsidiaries.',
              },
              {
                q: 'Are you looking for partnerships or investment opportunities?',
                a: 'Yes! We actively explore strategic partnerships and investment opportunities. Please contact our Business Development team with your proposal.',
              },
              {
                q: 'How is the company structured?',
                a: 'We are a holding company with multiple independent subsidiaries operating across various sectors. Each operates with autonomy while adhering to group-wide standards.',
              },
              {
                q: 'What is the spiritual backing of the company?',
                a: 'Our founding principles are grounded in spiritual values of stewardship, justice, and service. However, we operate as a fully professional secular business.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group cursor-pointer p-4 rounded-lg border border-border hover:border-primary/50 bg-background transition-all"
              >
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-foreground/60 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
