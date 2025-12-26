import React from 'react';
import { Users, Building2, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '300k+',
    label: 'users',
  },
  {
    icon: Building2,
    value: '100+',
    label: 'organizations',
  },
  {
    icon: Globe2,
    value: '50+',
    label: 'countries',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{
                  animation: 'fade-in-up 0.8s ease-out both',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4 transition-all duration-500 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 font-light">
                  {stat.label}
                </div>
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
      `}</style>
    </section>
  );
}
