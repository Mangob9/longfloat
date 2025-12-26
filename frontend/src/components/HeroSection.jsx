import React from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10 py-32">
        {/* Animated icon */}
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white animate-fade-in">
          <Sparkles className="w-8 h-8" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6 leading-tight animate-fade-in-up">
          From classrooms to boardrooms,
          <br />
          <span className="text-gray-500">AI that works where you do</span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delayed">
          Learn, create, and collaborate with AI—trusted by teams, educators, and businesses worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delayed-more">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base font-normal rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-base font-normal rounded-lg transition-all duration-300"
          >
            Explore Products
          </Button>
        </div>
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
            transform: scale(0.9);
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

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.4s both;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out 0.6s both;
        }

        .animate-fade-in-up-delayed-more {
          animation: fade-in-up 1s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
}
