'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { Separator } from '@workspace/ui/components/separator';
import { Apple } from 'lucide-react';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(isSignUp ? 'Signing up' : 'Signing in', { email, password });
    setIsLoading(false);
  };

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);

    // Simulate social auth
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(`Authenticating with ${provider}`);
    setIsLoading(false);
  };

  return (
    <div className='rounded-lg flex items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 pb-8'>
          <div className='text-center space-y-2'>
            <CardTitle className='text-2xl font-normal'>
              {isSignUp ? 'Create your account' : 'Sign in to your account'}
            </CardTitle>
            <CardDescription className='text-sm text-gray-600'>
              Or{' '}
              <button
                type='button'
                onClick={() => setIsSignUp(!isSignUp)}
                className='text-primary hover:underline font-medium cursor-pointer'
              >
                {isSignUp ? 'sign in' : 'create an account'}
              </button>{' '}
              to your account
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='space-y-6'>
          <form onSubmit={handleEmailAuth} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email' className='sr-only'>
                Email address
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='Email address*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            {!isSignUp && (
              <div className='space-y-2'>
                <Label htmlFor='password' className='sr-only'>
                  Password
                </Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Password*'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
            )}

            <Button
              type='submit'
              className='w-full h-12 bg-primary font-medium'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Continue'}
            </Button>
          </form>

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <Separator className='w-full' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white px-2 text-gray-500'>OR</span>
            </div>
          </div>

          <div className='space-y-3'>
            <Button
              type='button'
              variant='outline'
              className='w-full h-12 border-gray-300'
              onClick={() => handleSocialAuth('Google')}
              disabled={isLoading}
            >
              <svg className='w-5 h-5 mr-3' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                />
                <path
                  fill='currentColor'
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                />
                <path
                  fill='currentColor'
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                />
                <path
                  fill='currentColor'
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                />
              </svg>
              Continue with Google
            </Button>

            <Button
              type='button'
              variant='outline'
              className='w-full h-12 border-gray-300'
              onClick={() => handleSocialAuth('Microsoft')}
              disabled={isLoading}
            >
              <svg className='w-5 h-5 mr-3' viewBox='0 0 24 24'>
                <path fill='#f25022' d='M1 1h10v10H1z' />
                <path fill='#00a4ef' d='M13 1h10v10H13z' />
                <path fill='#7fba00' d='M1 13h10v10H1z' />
                <path fill='#ffb900' d='M13 13h10v10H13z' />
              </svg>
              Continue with Microsoft Account
            </Button>

            <Button
              type='button'
              variant='outline'
              className='w-full h-12 border-gray-300'
              onClick={() => handleSocialAuth('Apple')}
              disabled={isLoading}
            >
              <Apple className='w-5 h-5 mr-3' />
              Continue with Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
