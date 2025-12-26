import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
          See how AI fits into your workflow
        </h2>
        <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover how leading organizations are using Longfloat AI to transform their operations.
          Schedule a personalized demo or speak with our team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            Contact Sales
          </Button>
        </div>

        <p className="text-sm text-gray-500 font-light">
          No commitment required • Free consultation • Custom pricing available
        </p>
      </div>
    </section>
  );
}
