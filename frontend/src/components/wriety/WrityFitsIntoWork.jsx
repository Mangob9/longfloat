import React from 'react';
import { Users, Briefcase, GraduationCap, Layers } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'Designers & Creatives',
    description: 'Early-stage exploration, mood boarding, and concept development',
  },
  {
    icon: Briefcase,
    title: 'Founders & Leaders',
    description: 'Strategic thinking, problem framing, and decision-making clarity',
  },
  {
    icon: GraduationCap,
    title: 'Educators & Students',
    description: 'Collaborative learning, visual explanation, and knowledge mapping',
  },
  {
    icon: Layers,
    title: 'Teams & Collaborators',
    description: 'Brainstorming sessions, project planning, and shared understanding',
  },
];

export default function WrityFitsIntoWork() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            How Wriety Fits Into Work
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Built for early-stage thinking, exploration, and problem framing.
            Not a final documentation tool—a space where ideas come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{
                  animation: 'fade-in-up 0.8s ease-out both',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4 transition-all duration-500 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl lg:text-3xl font-light tracking-tight text-gray-900 leading-relaxed">
            "Wriety is where thinking happens, not where it ends.
            A tool for the messy, creative process that comes before clarity."
          </blockquote>
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
      `}</style>
    </section>
  );
}
