import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function WrityCTA() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
          Start thinking with Wriety
        </h2>
        <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the calm, intelligent whiteboarding space designed for how you actually think.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-base font-normal rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Try Wriety Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500 font-light">
          Free to start • No credit card required • Works on all devices
        </p>
      </div>
    </section>
  );
}
