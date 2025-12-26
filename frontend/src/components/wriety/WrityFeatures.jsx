import React from 'react';
import { Card } from '../ui/card';
import { Lightbulb, Grid3x3, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'AI-Assisted Ideation',
    description: 'Start with a rough thought and watch Wriety expand, structure, and guide your ideas into clarity.',
    demonstration: 'Ideas appearing, branching, and becoming clearer with AI assistance',
  },
  {
    icon: Grid3x3,
    title: 'Spatial Thinking & Freeform Whiteboarding',
    description: 'Flexible layout with zooming, grouping, and visual relationships. Think spatially, organize naturally.',
    demonstration: 'Boards panning, elements clustering, connections forming dynamically',
  },
  {
    icon: Sparkles,
    title: 'From Chaos to Clarity',
    description: 'Transform scattered thoughts into structured outcomes. Organize, refine, and create with intelligent assistance.',
    demonstration: 'Unstructured elements aligning into clean sections and flows',
  },
];

export default function WrityFeatures() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Three powerful capabilities that transform how you think and create
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
                style={{
                  animation: 'fade-in-up 1s ease-out both',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Content */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white mb-6">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-500 font-light italic">
                    Visual demonstration: {feature.demonstration}
                  </p>
                </div>

                {/* Animation placeholder */}
                <Card
                  className={`relative overflow-hidden border-gray-200 p-12 bg-gradient-to-br from-gray-50 to-white min-h-[400px] flex items-center justify-center ${
                    !isEven ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 text-gray-400 mb-6 animate-pulse-slow">
                      <Icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-400 font-light max-w-xs mx-auto">
                      Lottie animation placeholder
                      <br />
                      <span className="text-xs">{feature.demonstration}</span>
                    </p>
                  </div>

                  {/* Subtle animation effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/20 to-transparent opacity-50 animate-shimmer"></div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
