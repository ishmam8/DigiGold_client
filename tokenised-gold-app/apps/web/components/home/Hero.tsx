import React from 'react';
import { Button } from '@workspace/ui/components/button';
import {
  ArrowRight,
  Play,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Globe,
  Award,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center hero-bg overflow-hidden'
    >
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[rgb(197,153,80)]/20 to-[rgb(255,215,0)]/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[rgb(255,215,0)]/20 to-[rgb(197,153,80)]/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(197,153,80)]/5 to-[rgb(255,215,0)]/5 rounded-full blur-3xl animate-rotate'></div>

        {/* Grid pattern */}
        <div className='absolute inset-0 grid-pattern opacity-30'></div>

        {/* Floating particles */}
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-[rgb(197,153,80)] rounded-full animate-float opacity-60'></div>
        <div
          className='absolute top-3/4 right-1/4 w-3 h-3 bg-[rgb(255,215,0)] rounded-full animate-float opacity-40'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute top-1/2 right-1/3 w-1 h-1 bg-[rgb(197,153,80)] rounded-full animate-float opacity-80'
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className='container mx-auto my-20 px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-6xl mx-auto'>
          {/* Trust badges */}
          <div className='flex justify-center items-center space-x-8 mb-8 opacity-70'>
            <div className='flex items-center space-x-2 text-sm font-medium text-foreground'>
              <Award className='w-5 h-5 text-[rgb(197,153,80)]' />
              <span>SEC Compliant</span>
            </div>
            <div className='flex items-center space-x-2 text-sm font-medium text-foreground'>
              <Shield className='w-5 h-5 text-[rgb(197,153,80)]' />
              <span>$100M Insured</span>
            </div>
            <div className='flex items-center space-x-2 text-sm font-medium text-foreground'>
              <Globe className='w-5 h-5 text-[rgb(197,153,80)]' />
              <span>Global Access</span>
            </div>
          </div>

          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full glass-effect border border-[rgb(197,153,80)]/30 mb-12 hover-lift'>
            <TrendingUp className='w-5 h-5 text-[rgb(197,153,80)] mr-3' />
            <span className='text-lg font-semibold text-foreground'>
              Gold prices are up 12% this year
            </span>
            <div className='flex ml-3'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 text-[rgb(255,215,0)] fill-current'
                />
              ))}
            </div>
          </div>

          {/* Main headline */}
          <h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight'>
            Own Physical{' '}
            <span className='gold-gradient block lg:inline'>Gold</span>
            <br />
            <span className='text-4xl sm:text-5xl lg:text-7xl'>Through </span>
            <span className='gold-gradient'>Blockchain</span>
          </h1>

          {/* Subheadline */}
          <p className='text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light'>
            Invest in real, vault-stored gold through secure blockchain tokens.
            <br className='hidden sm:block' />
            Get the{' '}
            <span className='font-semibold text-[rgb(197,153,80)]'>
              stability of gold
            </span>{' '}
            with the{' '}
            <span className='font-semibold text-[rgb(197,153,80)]'>
              flexibility of digital assets
            </span>
            .
          </p>

          {/* CTA buttons */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'>
            <Button
              size='lg'
              className='btn-primary text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 will-change-transform'
            >
              Start Investing Today
              <ArrowRight className='ml-3 w-6 h-6' />
            </Button>

            <Button
              variant='outline'
              size='lg'
              className='border-2 border-[rgb(197,153,80)] text-[rgb(197,153,80)] hover:bg-[rgb(197,153,80)] hover:text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 hover:scale-105 glass-effect will-change-transform'
            >
              <Play className='mr-3 w-6 h-6' />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16'>
            <div className='text-center p-6 rounded-3xl glass-effect hover-lift'>
              <div className='text-5xl font-bold gold-gradient mb-3'>
                $2.1B+
              </div>
              <div className='text-lg text-foreground/70 font-medium'>
                Gold Tokenized
              </div>
              <div className='text-sm text-foreground mt-2'>
                ↗ +23% this month
              </div>
            </div>
            <div className='text-center p-6 rounded-3xl glass-effect hover-lift'>
              <div className='text-5xl font-bold gold-gradient mb-3'>50K+</div>
              <div className='text-lg text-foreground/70 font-medium'>
                Active Investors
              </div>
              <div className='text-sm text-foreground mt-2'>
                ↗ +15% this week
              </div>
            </div>
            <div className='text-center p-6 rounded-3xl glass-effect hover-lift'>
              <div className='text-5xl font-bold gold-gradient mb-3'>99.9%</div>
              <div className='text-lg text-foreground/70 font-medium'>
                Purity Guaranteed
              </div>
              <div className='text-sm text-foreground mt-2'>LBMA Certified</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className='flex justify-center items-center space-x-12 opacity-60'>
            <div className='flex items-center space-x-3 group'>
              <Shield className='w-6 h-6 text-[rgb(197,153,80)] group-hover:scale-110 transition-transform duration-300' />
              <span className='text-lg font-semibold text-foreground'>
                Bank-Grade Security
              </span>
            </div>
            <div className='flex items-center space-x-3 group'>
              <Zap className='w-6 h-6 text-[rgb(197,153,80)] group-hover:scale-110 transition-transform duration-300' />
              <span className='text-lg font-semibold text-foreground'>
                Instant Trading
              </span>
            </div>
            <div className='flex items-center space-x-3 group'>
              <Award className='w-6 h-6 text-[rgb(197,153,80)] group-hover:scale-110 transition-transform duration-300' />
              <span className='text-lg font-semibold text-foreground'>
                Fully Regulated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
