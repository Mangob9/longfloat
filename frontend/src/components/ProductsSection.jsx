import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Edit3, FileText, LayoutDashboard, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Wriety',
    description: 'Generate, refine, and structure content with intelligent writing assistance.',
    subtext: 'Create professional content 10x faster',
    icon: Edit3,
    status: 'live',
    link: '/wriety',
  },
  {
    id: 2,
    name: 'Note Taking AI',
    description: 'Capture, summarize, and retrieve information with AI-powered organization.',
    subtext: 'Never lose an important idea again',
    icon: FileText,
    status: 'coming-soon',
    link: null,
  },
  {
    id: 3,
    name: 'Productivity Board',
    description: 'Manage tasks, ideas, and workflows with intelligent automation.',
    subtext: 'Boost team productivity by 40%',
    icon: LayoutDashboard,
    status: 'coming-soon',
    link: null,
  },
  {
    id: 4,
    name: 'AI Appliance for MSMEs',
    description: 'Automate everyday business operations with purpose-built AI solutions.',
    subtext: 'Enterprise capabilities at MSME pricing',
    icon: Briefcase,
    status: 'coming-soon',
    link: null,
  },
];

export default function ProductsSection() {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    if (product.link) {
      navigate(product.link);
    }
  };

  return (
    <section id="products" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            The Longfloat AI Ecosystem
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            A comprehensive suite of AI-powered tools designed to work seamlessly together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isLive = product.status === 'live';
            
            return (
              <Card
                key={product.id}
                onClick={() => handleProductClick(product)}
                className={`group relative overflow-hidden border-gray-200 hover:border-gray-300 transition-all duration-500 p-8 lg:p-10 ${
                  isLive
                    ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white'
                    : 'bg-gray-50/50 hover:bg-gray-50'
                } animate-stagger-${index}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  {isLive ? (
                    <Badge className="bg-gray-900 text-white hover:bg-gray-800 px-3 py-1 text-xs font-normal">
                      Live
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="border-gray-300 text-gray-500 px-3 py-1 text-xs font-normal"
                    >
                      Coming Soon
                    </Badge>
                  )}
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-500 ${
                    isLive
                      ? 'bg-gray-900 text-white group-hover:scale-110'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3
                  className={`text-2xl lg:text-3xl font-light tracking-tight mb-4 ${
                    isLive ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {product.name}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-3 ${
                    isLive ? 'text-gray-600' : 'text-gray-400'
                  }`}
                >
                  {product.description}
                </p>
                <p
                  className={`text-sm font-light mb-6 ${
                    isLive ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {product.subtext}
                </p>

                {/* CTA for live product */}
                {isLive && (
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-sm text-gray-900 font-normal hover:bg-transparent group/btn"
                  >
                    Try it now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                )}

                {isLive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes stagger-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-stagger-0 {
          animation: stagger-fade-in 0.8s ease-out both;
        }

        .animate-stagger-1 {
          animation: stagger-fade-in 0.8s ease-out 0.1s both;
        }

        .animate-stagger-2 {
          animation: stagger-fade-in 0.8s ease-out 0.2s both;
        }

        .animate-stagger-3 {
          animation: stagger-fade-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
