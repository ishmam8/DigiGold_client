import React from 'react';
import { Button } from '@workspace/ui/components/button';
import { Menu, X, Coins, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[rgb(245,235,216)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='w-12 h-12 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 animate-pulse-gold'>
                <Coins className='w-7 h-7 text-white' />
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-[rgb(197,153,80)] to-[rgb(255,215,0)] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl'></div>
            </div>
            <span
              className='text-2xl font-bold text-foreground tracking-tight'
              style={{ color: isScrolled ? 'black' : undefined }}
            >
              Auro
              <span className='gold-gradient text-foreground'>Chain</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-12'>
            <a
              href='#home'
              className='relative text-foreground hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium group'
              style={{ color: isScrolled ? 'black' : undefined }}
            >
              Home
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <div className='relative group'>
              <a
                href='#how-it-works'
                className='flex items-center text-foreground hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium'
                style={{ color: isScrolled ? 'black' : undefined }}
              >
                How It Works
                <ChevronDown className='w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180' />
              </a>
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] transition-all duration-300 group-hover:w-full'></span>
            </div>
            <a
              href='#benefits'
              className='relative text-foreground hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium group'
              style={{ color: isScrolled ? 'black' : undefined }}
            >
              Benefits
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#security'
              className='relative text-foreground hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium group'
              style={{ color: isScrolled ? 'black' : undefined }}
            >
              Security
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(197,153,80)] to-[rgb(255,215,0)] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <Button className='btn-primary text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-3 rounded-xl text-foreground hover:text-[rgb(197,153,80)] hover:bg-[rgb(245,235,216)] transition-all duration-300'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[rgb(245,235,216)] shadow-xl'>
            <nav className='flex flex-col p-6 space-y-6'>
              <a
                href='#home'
                className='dark:text-[rgb(18,18,18)] hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium text-lg'
              >
                Home
              </a>
              <a
                href='#how-it-works'
                className='dark:text-[rgb(18,18,18)] hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium text-lg'
              >
                How It Works
              </a>
              <a
                href='#benefits'
                className='text-[rgb(18,18,18)] hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium text-lg'
              >
                Benefits
              </a>
              <a
                href='#security'
                className='text-[rgb(18,18,18)] hover:text-[rgb(197,153,80)] transition-colors duration-300 font-medium text-lg'
              >
                Security
              </a>
              <Button className='btn-primary text-white w-full py-4 rounded-2xl font-semibold text-lg shadow-lg'>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
