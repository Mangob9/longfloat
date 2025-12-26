import React from 'react';
import { Lightbulb, Target, Compass } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Deep Work',
    description: 'We believe in sustained focus over constant context switching. Quality thinking takes time and space.',
  },
  {
    icon: Target,
    title: 'Clarity First',
    description: 'Complexity is easy. Clarity is hard. We build tools that help you see what matters.',
  },
  {
    icon: Compass,
    title: 'Long-term Thinking',
    description: 'Quick wins fade. We design for work that lasts, ideas that compound, and thinking that deepens.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            We're building tools for people who care about how they think, not just what they produce.
            In a world obsessed with speed, we champion depth, clarity, and sustained productivity.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-stagger"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-900 mb-6 transition-all duration-500 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote section */}
        <div className="max-w-4xl mx-auto text-center py-16 border-t border-b border-gray-200">
          <blockquote className="text-2xl lg:text-3xl font-light tracking-tight text-gray-900 leading-relaxed mb-6">
            "The best tools are invisible. They amplify your thinking without getting in the way."
          </blockquote>
          <p className="text-base text-gray-500 font-light">
            — Long Float Team
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-stagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-stagger {
          animation: fade-in-stagger 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
