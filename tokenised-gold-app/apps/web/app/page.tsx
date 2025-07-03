'use client';
import { Header } from '../components/home/Header';
import { Hero } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { Benefits } from '../components/home/Benefits';
import { Security } from '../components/home/Security';
import { Footer } from '../components/home/Footer';

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Security />
      <Footer />
    </div>
  );
}
