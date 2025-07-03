import React from 'react';
import {
  Coins,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Globe,
  Shield,
  Award,
} from 'lucide-react';
import { Button } from '@workspace/ui/components/button';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Security', href: '#security' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Risk Disclosure', href: '#' },
  ];

  const resources = [
    { name: 'API Documentation', href: '#' },
    { name: 'White Paper', href: '#' },
    { name: 'Gold Price API', href: '#' },
    { name: 'Developer Tools', href: '#' },
  ];

  return (
    <footer className='bg-[rgb(18,18,18)] text-white relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[rgb(197,153,80)]/10 to-[rgb(255,215,0)]/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[rgb(255,215,0)]/10 to-[rgb(197,153,80)]/5 rounded-full blur-3xl'></div>
      </div>

      {/* Newsletter section */}
      <div className='border-b border-white/10 py-16 relative z-10'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h3 className='text-3xl sm:text-4xl font-bold mb-6'>
              Stay Updated with <span className='gold-gradient'>AuroChain</span>
            </h3>
            <p className='text-xl text-white/70 mb-8'>
              Get the latest news, market insights, and exclusive offers
              delivered to your inbox
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[rgb(197,153,80)] transition-colors'
              />
              <Button className='btn-primary px-8 py-4 rounded-2xl font-semibold'>
                Subscribe
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className='py-20 relative z-10'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16'>
            {/* Brand */}
            <div className='lg:col-span-2'>
              <div className='flex items-center space-x-3 mb-8'>
                <div className='w-12 h-12 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-2xl flex items-center justify-center'>
                  <Coins className='w-7 h-7 text-white' />
                </div>
                <span className='text-2xl font-bold'>
                  Auro<span className='gold-gradient'>Chain</span>
                </span>
              </div>
              <p className='text-white/70 mb-8 max-w-md leading-relaxed text-lg'>
                The world's most trusted platform for tokenizing physical gold
                on the blockchain. Secure, transparent, and accessible to
                everyone, everywhere.
              </p>

              {/* Trust badges */}
              <div className='flex flex-wrap gap-4 mb-8'>
                <div className='flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10'>
                  <Shield className='w-4 h-4 text-[rgb(197,153,80)]' />
                  <span className='text-sm font-medium'>SEC Regulated</span>
                </div>
                <div className='flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10'>
                  <Award className='w-4 h-4 text-[rgb(197,153,80)]' />
                  <span className='text-sm font-medium'>ISO Certified</span>
                </div>
                <div className='flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10'>
                  <Globe className='w-4 h-4 text-[rgb(197,153,80)]' />
                  <span className='text-sm font-medium'>Global Coverage</span>
                </div>
              </div>

              {/* Social links */}
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-[rgb(197,153,80)] transition-all duration-300 hover:scale-110'
                >
                  <Twitter className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-[rgb(197,153,80)] transition-all duration-300 hover:scale-110'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-[rgb(197,153,80)] transition-all duration-300 hover:scale-110'
                >
                  <Github className='w-6 h-6' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-xl font-bold mb-8'>Quick Links</h3>
              <div className='space-y-4'>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className='block text-white/70 hover:text-[rgb(197,153,80)] transition-colors duration-300 text-lg'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className='text-xl font-bold mb-8'>Resources</h3>
              <div className='space-y-4'>
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className='block text-white/70 hover:text-[rgb(197,153,80)] transition-colors duration-300 text-lg'
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className='text-xl font-bold mb-8'>Contact</h3>
              <div className='space-y-6'>
                <div className='flex items-start space-x-3 text-white/70'>
                  <Mail className='w-5 h-5 mt-1 text-[rgb(197,153,80)]' />
                  <div>
                    <div className='font-medium'>Email</div>
                    <div>hello@aurochain.com</div>
                  </div>
                </div>
                <div className='flex items-start space-x-3 text-white/70'>
                  <Phone className='w-5 h-5 mt-1 text-[rgb(197,153,80)]' />
                  <div>
                    <div className='font-medium'>Phone</div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className='flex items-start space-x-3 text-white/70'>
                  <MapPin className='w-5 h-5 mt-1 text-[rgb(197,153,80)]' />
                  <div>
                    <div className='font-medium'>Address</div>
                    <div>New York, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className='border-t border-white/10 pt-12'>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
              <div className='text-white/70 text-lg mb-6 lg:mb-0'>
                © 2025 AuroChain. All rights reserved.
              </div>
              <div className='flex flex-wrap gap-8 text-lg'>
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className='text-white/70 hover:text-[rgb(197,153,80)] transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
