import React from 'react';
import { Card, CardContent } from '@workspace/ui/components/card';
import {
  Wallet,
  Coins,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Create Account',
      description:
        'Sign up and complete our secure verification process in minutes with bank-grade KYC.',
      step: '01',
      features: [
        'Identity Verification',
        'Bank Account Link',
        'Security Setup',
      ],
      time: '2-3 minutes',
    },
    {
      icon: Coins,
      title: 'Buy Gold Tokens',
      description:
        'Purchase tokens backed by physical gold stored in secure, insured vaults worldwide.',
      step: '02',
      features: [
        'Real Gold Backing',
        'Instant Purchase',
        'Fractional Ownership',
      ],
      time: 'Instant',
    },
    {
      icon: Shield,
      title: 'Trade & Hold',
      description:
        'Trade your tokens anytime on global markets or hold them as a secure store of value.',
      step: '03',
      features: ['24/7 Trading', 'Global Markets', 'Secure Storage'],
      time: 'Always Available',
    },
  ];

  return (
    <section
      id='how-it-works'
      className='py-32 bg-white relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[rgb(197,153,80)]/10 to-[rgb(255,215,0)]/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[rgb(255,215,0)]/10 to-[rgb(197,153,80)]/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-[rgb(197,153,80)]/10 border border-[rgb(197,153,80)]/20 mb-8'>
            <Clock className='w-5 h-5 text-[rgb(197,153,80)] mr-2' />
            <span className='text-lg font-semibold text-[rgb(18,18,18)]'>
              Get started in under 5 minutes
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-[rgb(18,18,18)] mb-8'>
            How It <span className='gold-gradient'>Works</span>
          </h2>
          <p className='text-xl sm:text-2xl text-[rgb(18,18,18)]/70 max-w-3xl mx-auto leading-relaxed'>
            Three simple steps to start investing in tokenized gold and join the
            future of precious metals trading
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20'>
          {steps.map((step, index) => (
            <div key={index} className='relative group'>
              <Card className='hover-lift bg-white border-2 border-[rgb(245,235,216)] hover:border-[rgb(197,153,80)]/50 transition-all duration-500 h-full overflow-hidden'>
                <CardContent className='p-10 text-center relative'>
                  {/* Step number */}
                  <div className='absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg'>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className='relative mb-8'>
                    <div className='w-24 h-24 bg-gradient-to-br from-[rgb(197,153,80)]/20 to-[rgb(255,215,0)]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500'>
                      <step.icon className='w-12 h-12 text-[rgb(197,153,80)]' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)]/20 to-[rgb(255,215,0)]/10 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl'></div>
                  </div>

                  {/* Content */}
                  <h3 className='text-2xl font-bold text-[rgb(18,18,18)] mb-4'>
                    {step.title}
                  </h3>
                  <p className='text-[rgb(18,18,18)]/70 leading-relaxed mb-6 text-lg'>
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className='space-y-3 mb-6'>
                    {step.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center justify-center space-x-2'
                      >
                        <CheckCircle className='w-5 h-5 text-[rgb(197,153,80)]' />
                        <span className='text-[rgb(18,18,18)]/80 font-medium'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Time indicator */}
                  <div className='inline-flex items-center px-4 py-2 rounded-full bg-[rgb(197,153,80)]/10 text-[rgb(197,153,80)] font-semibold text-sm'>
                    <Clock className='w-4 h-4 mr-2' />
                    {step.time}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10'>
                  <div className='w-12 h-12 bg-white rounded-full border-2 border-[rgb(197,153,80)]/30 flex items-center justify-center shadow-lg'>
                    <ArrowRight className='w-6 h-6 text-[rgb(197,153,80)]' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced process visualization */}
        <div className='bg-gradient-to-br from-[rgb(245,235,216)] via-white to-[rgb(245,235,216)] rounded-3xl p-12 lg:p-16 premium-shadow'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-3xl sm:text-4xl font-bold text-[rgb(18,18,18)] mb-8'>
                Backed by <span className='gold-gradient'>Real Gold</span>
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-3 h-3 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-[rgb(18,18,18)] mb-2'>
                      99.9% Pure Gold Bars
                    </h4>
                    <p className='text-[rgb(18,18,18)]/80 leading-relaxed'>
                      Every token is backed by LBMA-certified gold bars stored
                      in secure, insured vaults across multiple continents
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-3 h-3 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-[rgb(18,18,18)] mb-2'>
                      Real-time Transparency
                    </h4>
                    <p className='text-[rgb(18,18,18)]/80 leading-relaxed'>
                      Monthly third-party audits and live reporting ensure
                      complete transparency of gold reserves
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-3 h-3 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-[rgb(18,18,18)] mb-2'>
                      Physical Redemption
                    </h4>
                    <p className='text-[rgb(18,18,18)]/80 leading-relaxed'>
                      Redeem your tokens for physical gold delivery anywhere in
                      the world, anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='w-full h-80 bg-gradient-to-br from-[rgb(197,153,80)]/20 to-[rgb(255,215,0)]/20 rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)]/10 to-[rgb(255,215,0)]/10 animate-shimmer'></div>
                <div className='w-40 h-40 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full animate-pulse-gold flex items-center justify-center relative z-10'>
                  <Coins className='w-20 h-20 text-white' />
                </div>

                {/* Floating elements */}
                <div className='absolute top-8 right-8 w-8 h-8 bg-[rgb(197,153,80)] rounded-full animate-float opacity-60'></div>
                <div
                  className='absolute bottom-8 left-8 w-6 h-6 bg-[rgb(255,215,0)] rounded-full animate-float opacity-80'
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className='absolute top-1/2 right-12 w-4 h-4 bg-[rgb(197,153,80)] rounded-full animate-float opacity-40'
                  style={{ animationDelay: '2s' }}
                ></div>
              </div>

              {/* Global indicator */}
              <div className='absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[rgb(245,235,216)]'>
                <div className='flex items-center space-x-2'>
                  <Globe className='w-5 h-5 text-[rgb(197,153,80)]' />
                  <span className='text-sm font-semibold text-[rgb(18,18,18)]'>
                    Global Vaults
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
