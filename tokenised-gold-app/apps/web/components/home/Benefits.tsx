import React from 'react';
import { Card, CardContent } from '@workspace/ui/components/card';
import {
  Shield,
  TrendingUp,
  Zap,
  Globe,
  Clock,
  Users,
  Lock,
  BarChart3,
  Award,
  Smartphone,
  DollarSign,
  RefreshCw,
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Maximum Security',
      description:
        'Multi-signature wallets and military-grade cold storage protection',
      color: 'from-blue-500 to-blue-600',
      stat: '99.99% Secure',
    },
    {
      icon: TrendingUp,
      title: 'Stable Investment',
      description:
        'Gold has maintained value for over 5,000 years of human history',
      color: 'from-green-500 to-green-600',
      stat: '+12% YTD',
    },
    {
      icon: Zap,
      title: 'Instant Liquidity',
      description:
        'Trade your gold tokens 24/7 on global markets with zero delays',
      color: 'from-[rgb(197,153,80)] to-[rgb(255,215,0)]',
      stat: '<1s Trading',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description:
        'Invest from anywhere in the world with just an internet connection',
      color: 'from-purple-500 to-purple-600',
      stat: '150+ Countries',
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description:
        'Markets never close, trade whenever inspiration strikes you',
      color: 'from-orange-500 to-orange-600',
      stat: 'Always Open',
    },
    {
      icon: Users,
      title: 'Fractional Ownership',
      description:
        'Own as little as $1 worth of gold tokens with no minimum limits',
      color: 'from-pink-500 to-pink-600',
      stat: '$1 Minimum',
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable records on a decentralized, tamper-proof network',
      color: 'from-indigo-500 to-indigo-600',
      stat: 'Immutable',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Track portfolio performance with advanced analytics and insights',
      color: 'from-teal-500 to-teal-600',
      stat: 'Live Data',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description:
        'Full-featured mobile app for trading and portfolio management',
      color: 'from-red-500 to-red-600',
      stat: 'iOS & Android',
    },
    {
      icon: DollarSign,
      title: 'Low Fees',
      description:
        'Industry-leading low fees with transparent pricing structure',
      color: 'from-yellow-500 to-yellow-600',
      stat: '0.1% Fee',
    },
    {
      icon: RefreshCw,
      title: 'Auto-Rebalancing',
      description:
        'Automated portfolio rebalancing to optimize your investments',
      color: 'from-cyan-500 to-cyan-600',
      stat: 'Smart AI',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by industry leaders for innovation and security',
      color: 'from-emerald-500 to-emerald-600',
      stat: '15+ Awards',
    },
  ];

  return (
    <section
      id='benefits'
      className='py-32 bg-gradient-to-br from-[rgb(245,235,216)] via-white to-[rgb(245,235,216)] relative overflow-hidden'
    >
      {/* Simplified background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-[rgb(197,153,80)]/10 to-[rgb(255,215,0)]/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-[rgb(255,215,0)]/10 to-[rgb(197,153,80)]/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-[rgb(197,153,80)]/10 border border-[rgb(197,153,80)]/20 mb-8'>
            <Award className='w-5 h-5 text-[rgb(197,153,80)] mr-2' />
            <span className='text-lg font-semibold text-[rgb(18,18,18)]'>
              Industry-leading platform
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-[rgb(18,18,18)] mb-8'>
            Why Choose <span className='gold-gradient'>AuroChain</span>
          </h2>
          <p className='text-xl sm:text-2xl text-[rgb(18,18,18)]/70 max-w-4xl mx-auto leading-relaxed'>
            Experience the perfect fusion of traditional gold investment and
            cutting-edge blockchain technology
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto mb-20'>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className='group bg-white/90 backdrop-blur-sm border-2 border-[rgb(245,235,216)] hover:border-[rgb(197,153,80)]/50 transition-all duration-300 overflow-hidden hover:shadow-lg'
            >
              <CardContent className='p-8 relative'>
                {/* Simplified gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-transparent to-[rgb(197,153,80)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg relative z-10`}
                >
                  <benefit.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-[rgb(18,18,18)] mb-4 relative z-10'>
                  {benefit.title}
                </h3>

                <p className='text-[rgb(18,18,18)]/70 text-sm leading-relaxed mb-4 relative z-10'>
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className='inline-flex items-center px-3 py-1 rounded-full bg-[rgb(197,153,80)]/10 text-[rgb(197,153,80)] font-bold text-sm relative z-10'>
                  {benefit.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simplified stats section */}
        <div className='bg-white rounded-3xl p-12 lg:p-16 shadow-xl relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)]/5 to-transparent'></div>

          <div className='text-center mb-12 relative z-10'>
            <h3 className='text-3xl sm:text-4xl font-bold text-[rgb(18,18,18)] mb-4'>
              Trusted by <span className='gold-gradient'>Thousands</span>{' '}
              Worldwide
            </h3>
            <p className='text-xl text-[rgb(18,18,18)]/70'>
              Join the revolution in digital gold investment
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-3 group-hover:scale-105 transition-transform duration-300'>
                99.99%
              </div>
              <div className='text-lg font-semibold text-[rgb(18,18,18)] mb-1'>
                Uptime
              </div>
              <div className='text-sm text-[rgb(18,18,18)]/70'>
                Always available
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-3 group-hover:scale-105 transition-transform duration-300'>
                0.1%
              </div>
              <div className='text-lg font-semibold text-[rgb(18,18,18)] mb-1'>
                Trading Fees
              </div>
              <div className='text-sm text-[rgb(18,18,18)]/70'>
                Industry lowest
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-3 group-hover:scale-105 transition-transform duration-300'>
                150+
              </div>
              <div className='text-lg font-semibold text-[rgb(18,18,18)] mb-1'>
                Countries
              </div>
              <div className='text-sm text-[rgb(18,18,18)]/70'>
                Global reach
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-3 group-hover:scale-105 transition-transform duration-300'>
                $100M
              </div>
              <div className='text-lg font-semibold text-[rgb(18,18,18)] mb-1'>
                Insurance
              </div>
              <div className='text-sm text-[rgb(18,18,18)]/70'>
                Full coverage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
