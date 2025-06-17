'use client';
import AuthForm from '@/components/AuthForm';
import { useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <AuthForm mode={mode === 'signup' ? 'signup' : 'login'} />
    </div>
  );
}
