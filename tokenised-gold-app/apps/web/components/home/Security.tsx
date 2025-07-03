import React from 'react';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Button } from '@workspace/ui/components/button';
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Award,
  CheckCircle,
  Server,
  Fingerprint,
  Key,
  AlertTriangle,
} from 'lucide-react';

export const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Signature Security',
      description:
        'Multiple cryptographic keys required for all high-value transactions',
      level: 'Military Grade',
    },
    {
      icon: Lock,
      title: 'Cold Storage Vaults',
      description:
        '95% of digital assets stored offline in secure, air-gapped systems',
      level: 'Bank Standard',
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description:
        '24/7 AI-powered surveillance and automated threat detection',
      level: 'Advanced AI',
    },
    {
      icon: FileCheck,
      title: 'Regular Security Audits',
      description: 'Monthly penetration testing by leading cybersecurity firms',
      level: 'Continuous',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description:
        'Advanced biometric verification for enhanced account security',
      level: 'Next-Gen',
    },
    {
      icon: Key,
      title: 'Hardware Security Modules',
      description: 'FIPS 140-2 Level 4 certified hardware for key management',
      level: 'Enterprise',
    },
  ];

  const certifications = [
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'FIPS 140-2 Level 3', description: 'Cryptographic Security' },
    { name: 'PCI DSS Level 1', description: 'Payment Security' },
  ];

  const insurancePartners = [
    "Lloyd's of London",
    'Marsh & McLennan',
    'Aon Risk Solutions',
    'Willis Towers Watson',
  ];

  return (
    <section
      id='security'
      className='py-32 bg-[rgb(18,18,18)] relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[rgb(197,153,80)]/20 to-[rgb(255,215,0)]/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[rgb(255,215,0)]/20 to-[rgb(197,153,80)]/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
        <div className='absolute inset-0 grid-pattern opacity-10'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-6 py-3 rounded-full glass-effect border border-[rgb(197,153,80)]/30 mb-8'>
            <AlertTriangle className='w-5 h-5 text-[rgb(197,153,80)] mr-2' />
            <span className='text-lg font-semibold text-white'>
              Zero security breaches since 2019
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8'>
            Fort Knox-Level <span className='gold-gradient'>Security</span>
          </h2>
          <p className='text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed'>
            Your gold and digital assets are protected by the most advanced
            security protocols in the industry
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto mb-20'>
          {/* Security features */}
          <div className='space-y-8'>
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className='bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover-lift'
              >
                <CardContent className='p-8 flex items-start space-x-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-[rgb(197,153,80)]/30 to-[rgb(255,215,0)]/20 rounded-2xl flex items-center justify-center flex-shrink-0'>
                    <feature.icon className='w-8 h-8 text-[rgb(197,153,80)]' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-3'>
                      <h3 className='text-xl font-bold text-white'>
                        {feature.title}
                      </h3>
                      <span className='px-3 py-1 rounded-full bg-[rgb(197,153,80)]/20 text-[rgb(197,153,80)] text-sm font-semibold'>
                        {feature.level}
                      </span>
                    </div>
                    <p className='text-white/70 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vault visualization */}
          <div className='relative'>
            <div className='bg-gradient-to-br from-[rgb(197,153,80)]/20 via-transparent to-[rgb(255,215,0)]/10 rounded-3xl p-12 backdrop-blur-sm border border-[rgb(197,153,80)]/20 relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)]/10 to-transparent animate-shimmer'></div>

              <div className='text-center relative z-10'>
                <div className='w-32 h-32 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse-gold relative'>
                  <Shield className='w-16 h-16 text-white' />
                  <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-full opacity-50 animate-ping'></div>
                </div>

                <h3 className='text-3xl font-bold text-white mb-6'>
                  Secure Vault Network
                </h3>
                <p className='text-white/70 mb-8 leading-relaxed'>
                  Physical gold stored in Brink's, Loomis, and other tier-1
                  certified vaults across 6 continents
                </p>

                {/* Certifications grid */}
                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className='bg-white/5 rounded-2xl p-4 border border-white/10'
                    >
                      <div className='flex items-center space-x-2 mb-2'>
                        <CheckCircle className='w-5 h-5 text-[rgb(197,153,80)]' />
                        <span className='text-white font-semibold text-sm'>
                          {cert.name}
                        </span>
                      </div>
                      <p className='text-white/60 text-xs'>
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Insurance partners */}
                <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                  <h4 className='text-white font-bold mb-4 flex items-center'>
                    <Server className='w-5 h-5 mr-2 text-[rgb(197,153,80)]' />
                    Insurance Partners
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {insurancePartners.map((partner, index) => (
                      <div
                        key={index}
                        className='text-white/70 text-sm font-medium'
                      >
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating security badges */}
            <div className='absolute -top-6 -right-6 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] text-white px-4 py-2 rounded-2xl text-sm font-bold animate-float shadow-lg'>
              <Award className='w-4 h-4 inline mr-2' />
              Certified Secure
            </div>
            <div
              className='absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-2xl text-sm font-bold border border-white/20 animate-float'
              style={{ animationDelay: '1s' }}
            >
              <Lock className='w-4 h-4 inline mr-2' />
              Zero Breaches
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className='bg-white/5 rounded-3xl p-12 lg:p-16 backdrop-blur-sm border border-white/10 mb-16'>
          <h3 className='text-3xl font-bold text-white mb-12 text-center'>
            Trusted by institutions worldwide
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-12'>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300'>
                $100M+
              </div>
              <div className='text-lg font-semibold text-white mb-2'>
                Insurance Coverage
              </div>
              <div className='text-sm text-white/70'>
                Comprehensive protection
              </div>
            </div>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300'>
                0
              </div>
              <div className='text-lg font-semibold text-white mb-2'>
                Security Breaches
              </div>
              <div className='text-sm text-white/70'>Perfect track record</div>
            </div>
            <div className='text-center group'>
              <div className='text-5xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300'>
                99.9%
              </div>
              <div className='text-lg font-semibold text-white mb-2'>
                Gold Purity
              </div>
              <div className='text-sm text-white/70'>LBMA certified</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <Button
            size='lg'
            className='btn-primary text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105'
          >
            Learn More About Our Security
          </Button>
        </div>
      </div>
    </section>
  );
};
