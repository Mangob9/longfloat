import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Sparkles, ArrowRight, Play, Lightbulb, Grid3x3 } from 'lucide-react';

const features = [
  {
    id: 'ideation',
    icon: Lightbulb,
    title: 'AI-Assisted Ideation',
    description: 'Start with a rough thought and watch Wriety expand, structure, and guide your ideas into clarity.',
    animationDescription: 'Ideas appearing, branching, and becoming clearer',
  },
  {
    id: 'spatial',
    icon: Grid3x3,
    title: 'Spatial Thinking',
    description: 'Flexible layout with zooming, grouping, and visual relationships. Think spatially, organize naturally.',
    animationDescription: 'Elements clustering, connections forming',
  },
  {
    id: 'clarity',
    icon: Sparkles,
    title: 'From Chaos to Clarity',
    description: 'Transform scattered thoughts into structured outcomes. Organize, refine, and create with intelligent assistance.',
    animationDescription: 'Elements aligning into clean sections',
  },
];

export default function WrityHeroWithFeatures() {
  const [activeFeature, setActiveFeature] = useState('ideation');

  return (
    <section className="hero-with-features-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white pt-24 pb-12">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Hero headline */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white">
            <Sparkles className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900 mb-4 leading-tight">
            A whiteboard that
            <br />
            <span className="text-gray-500">thinks with you</span>
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Wriety is an AI-assisted space for ideation, planning, and structured thinking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-5 text-sm font-normal rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Try Wriety
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:border-gray-900 hover:bg-gray-50 px-8 py-5 text-sm font-normal rounded-lg transition-all duration-300 group"
            >
              <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              See how it works
            </Button>
          </div>
        </div>

        {/* Three features side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <Card
                key={feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onClick={() => setActiveFeature(feature.id)}
                className={`group relative overflow-hidden border-gray-200 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'border-gray-900 shadow-2xl scale-105 bg-white'
                    : 'border-gray-200 hover:border-gray-400 hover:shadow-xl bg-white/80'
                }`}
                style={
                  {
                    animation: 'fade-in-up 0.8s ease-out both',
                    animationDelay: `${index * 0.1}s`,
                  }
                }
              >
                {/* Animation area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 border-b border-gray-100">
                  <div
                    className={`text-center transition-all duration-700 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 transition-all duration-700 ${
                        isActive
                          ? 'bg-gray-900 text-white animate-pulse-slow'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Icon className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-gray-400 font-light px-4">
                      {feature.animationDescription}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 transition-all duration-500 ${
                      isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`text-xl font-light tracking-tight mb-3 transition-colors duration-500 ${
                      isActive ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Active indicator line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transition-all duration-500 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></div>
              </Card>
            );
          })}
        </div>

        {/* Subtle instruction */}
        <p className="text-center text-sm text-gray-400 font-light mt-8">
          Hover or click to explore each feature
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
