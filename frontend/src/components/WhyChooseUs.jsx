import React from 'react';
import { Zap, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Learn Faster',
    description: 'AI-assisted understanding helps you grasp complex concepts quickly. Personalized learning paths adapt to your pace and style.',
  },
  {
    icon: Lightbulb,
    title: 'Create Better',
    description: 'Generate ideas, refine content, and produce professional-quality work with intelligent assistance at every step.',
  },
  {
    icon: Users,
    title: 'Collaborate Efficiently',
    description: 'Work seamlessly across teams and organizations with AI-powered tools that enhance communication and productivity.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Why choose Longfloat AI?
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Transform how you work with AI that enhances every aspect of your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-stagger"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-900 mb-6 transition-all duration-500 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
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
