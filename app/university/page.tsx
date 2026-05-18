'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookOpen, Users, Award, Globe, Lightbulb, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function University() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Haven Academy</h1>
          <p className="text-lg text-foreground/60">
            Transforming lives through exceptional education and professional development
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Educational Mission</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Haven Academy, our world-class educational institution, is dedicated to developing capable, compassionate leaders who will shape a better future. We combine rigorous academic excellence with character development and practical skills training.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                With campuses across North America, Europe, and Asia, we serve students from K-12 through professional development, offering a comprehensive educational ecosystem that adapts to each learner's unique needs and aspirations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20 flex items-center justify-center h-80">
              <BookOpen className="w-32 h-32 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Primary Education',
                description: 'Foundational learning with emphasis on critical thinking, creativity, and character development.',
                icon: BookOpen,
              },
              {
                title: 'Secondary Education',
                description: 'Comprehensive curriculum preparing students for higher education and professional success.',
                icon: Target,
              },
              {
                title: 'Vocational Training',
                description: 'Practical skill development programs aligned with industry needs and career advancement.',
                icon: Lightbulb,
              },
              {
                title: 'Professional Development',
                description: 'Continuing education and certification programs for working professionals and organizations.',
                icon: Award,
              },
              {
                title: 'Leadership Programs',
                description: 'Advanced training in business, governance, and transformational leadership principles.',
                icon: Users,
              },
              {
                title: 'Global Studies',
                description: 'International education experiences fostering cultural competence and global perspective.',
                icon: Globe,
              },
            ].map((program, idx) => {
              const Icon = program.icon
              return (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:shadow-md hover:border-primary/50 transition-all duration-300">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-foreground/60">{program.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Haven Academy</h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Excellence in Teaching',
                description: 'Faculty members are subject matter experts, passionate educators, and committed mentors who inspire curiosity and achievement.',
              },
              {
                title: 'Holistic Development',
                description: 'We develop the whole person—intellectually, physically, emotionally, and spiritually—creating well-rounded individuals.',
              },
              {
                title: 'Innovation in Learning',
                description: 'State-of-the-art facilities, technology integration, and contemporary teaching methodologies ensure relevance and engagement.',
              },
              {
                title: 'Global Community',
                description: 'A diverse student body from around the world creates rich cross-cultural learning environments and lasting international connections.',
              },
              {
                title: 'Career Preparation',
                description: 'Practical internships, industry partnerships, and career services ensure students graduate ready for real-world success.',
              },
              {
                title: 'Values-Based Education',
                description: 'Rooted in principles of integrity, service, and excellence, our education shapes character as well as competence.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Campus Locations</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: 'Boston', region: 'North America', founded: '2010', students: '5,200' },
              { city: 'Toronto', region: 'North America', founded: '2012', students: '4,800' },
              { city: 'London', region: 'Europe', founded: '2013', students: '3,600' },
              { city: 'Berlin', region: 'Europe', founded: '2014', students: '3,200' },
              { city: 'Singapore', region: 'Asia Pacific', founded: '2015', students: '4,100' },
              { city: 'Tokyo', region: 'Asia Pacific', founded: '2016', students: '3,800' },
            ].map((campus, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-1">{campus.city}</h3>
                <p className="text-sm text-accent font-medium mb-3">{campus.region}</p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <p>Founded: {campus.founded}</p>
                  <p>Students: {campus.students}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Student Success</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '98%', label: 'Graduation Rate' },
              { stat: '95%', label: 'Employment Rate' },
              { stat: '4.2M+', label: 'Alumni Network' },
              { stat: '$250K+', label: 'Avg. Starting Salary' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                <p className="text-sm text-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
            <p className="text-foreground/60 mb-6">
              Discover how Haven Academy can transform your educational journey and career prospects.
            </p>
            <Button size="lg">Apply Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
