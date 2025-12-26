import React from 'react';
import { Card } from './ui/card';
import { Shield, Lock, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote: "Longfloat AI has transformed how our team collaborates. The productivity gains have been remarkable—we're delivering projects 40% faster.",
    author: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'TechCorp Industries',
    initial: 'S',
  },
  {
    quote: "The AI Writer has become indispensable for our content team. It's like having an expert editor available 24/7.",
    author: 'Michael Roberts',
    role: 'Head of Marketing',
    company: 'GlobalEd Foundation',
    initial: 'M',
  },
  {
    quote: "Finally, enterprise-grade AI tools that fit our budget. Longfloat AI has leveled the playing field for small businesses.",
    author: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'SmartBiz Solutions',
    initial: 'P',
  },
];

const trustBadges = [
  {
    icon: Shield,
    text: 'SOC 2 Compliant',
  },
  {
    icon: Lock,
    text: 'End-to-end Encryption',
  },
  {
    icon: TrendingUp,
    text: '99.9% Uptime',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            Join thousands of organizations already transforming their workflows with Longfloat AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl"
              style={{
                animation: 'fade-in-up 0.8s ease-out both',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-6">
                <p className="text-base text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mr-4 text-lg font-light">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="text-sm font-normal text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
                style={{
                  animation: 'fade-in 0.8s ease-out both',
                  animationDelay: `${0.3 + index * 0.1}s`,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-light">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
