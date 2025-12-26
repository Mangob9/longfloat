import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Users2, TrendingUp, Check, ArrowRight } from 'lucide-react';

const segments = [
  {
    icon: GraduationCap,
    title: 'Education & Learning',
    description: 'Save time, personalize learning, and reduce manual effort for students and educators using AI built for education.',
    features: [
      'AI-assisted learning',
      'Smart note-taking',
      'Research automation',
    ],
  },
  {
    icon: Users2,
    title: 'Teams & Enterprises',
    description: 'Align teams, streamline workflows, and turn ideas into action with AI-powered collaboration built for organizations.',
    features: [
      'Team collaboration',
      'Workflow automation',
      'Enterprise security',
    ],
  },
  {
    icon: TrendingUp,
    title: 'MSMEs & Businesses',
    description: 'Automate daily operations, create content faster, and compete effectively with AI built for growing businesses.',
    features: [
      'Cost-effective tools',
      'Business automation',
      'Scalable solutions',
    ],
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Who is Longfloat AI for?
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            Purpose-built solutions for every type of organization, from classrooms to corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-gray-200 hover:border-gray-300 transition-all duration-500 p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white mb-6 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-gray-900 mb-4">
                  {segment.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {segment.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {segment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 mr-2 text-gray-900" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-sm text-gray-900 font-normal hover:bg-transparent group/btn"
                >
                  Explore solutions
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
