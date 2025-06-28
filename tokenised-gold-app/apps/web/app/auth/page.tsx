'use client';
import AuthForm from '@/components/AuthForm';
import { useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  if (!mode || (mode !== 'login' && mode !== 'signup' && mode !== 'otp')) {
    if (typeof window !== 'undefined') {
      window.location.replace('/auth?mode=login');
      return null;
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <AuthForm />
    </div>
  );
}
