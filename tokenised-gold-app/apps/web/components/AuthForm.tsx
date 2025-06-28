'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { AnimatePresence, motion } from 'framer-motion';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

export default function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOTP] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTokensAndRedirect = (tokens: {
    access: string;
    refresh: string;
  }) => {
    // Store tokens in localStorage
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);

    // Navigate to dashboard
    // router.push('/dashboard');
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (mode === 'signup') {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/register/`;
      try {
        const response = await axios.post(
          url,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        console.log('Registration successful:', response.data);
        // After successful registration, switch to OTP mode
        router.push('/auth?mode=otp');
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Registration error:', error.response?.data);
          setIsLoading(false);
        } else {
          console.log('unknown error', error);
          setIsLoading(false);
        }
      }
    } else {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/login/`;
      try {
        const response = await axios.post(
          url,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        console.log('Login successful:', response.data);

        // Handle tokens and redirect
        if (response.data.access && response.data.refresh) {
          handleTokensAndRedirect(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Login error:', error.response?.data);
          setIsLoading(false);
        } else {
          console.log('unknown error', error);
          setIsLoading(false);
        }
      }
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email) {
      setIsLoading(false);
      router.push('/auth?mode=signup');
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/verify-otp/`,
        {
          email: email,
          otp: otp,
        },
        {
          withCredentials: true,
        }
      );
      console.log('OTP verified:', response.data);
      router.push('/auth?mode=login');
      setIsLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('OTP verification error:', error.response?.data);
        setIsLoading(false);
      } else {
        console.log('unknown error', error);
        setIsLoading(false);
      }
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      console.log('Google sign-in successful', credentialResponse);
      const formData = new FormData();
      formData.append('id_token', credentialResponse.credential);
      formData.append('client_id', credentialResponse.clientId);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/google-login/`,
        formData
      );
      console.log(res.data);

      // Handle tokens and redirect for Google login
      if (res.data.access && res.data.refresh) {
        handleTokensAndRedirect(res.data);
      }
    } catch (err: any) {
      console.log(err.response?.data?.error || 'Google sign-in failed');
    }
  };

  const handleModeSwitch = (nextMode: 'signup' | 'login' | 'otp') => {
    router.push('/auth?mode=' + nextMode);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={mode}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='rounded-lg w-2xl mx-2 flex items-center justify-center'
        >
          <Card className='w-full max-w-md'>
            <CardHeader className='space-y-4 pb-8'>
              <div className='text-center space-y-2'>
                <CardTitle className='text-2xl font-normal'>
                  {mode === 'signup'
                    ? 'Create your account'
                    : mode === 'otp'
                      ? 'Verify OTP'
                      : 'Sign in to your account'}
                </CardTitle>
                <CardDescription className='text-sm text-gray-600'>
                  Or{' '}
                  <button
                    type='button'
                    className='text-primary hover:underline font-medium focus:outline-none'
                    aria-label={
                      mode === 'signup'
                        ? 'Switch to login mode'
                        : mode === 'otp'
                          ? 'Switch to login mode'
                          : 'Switch to signup mode'
                    }
                    onClick={() =>
                      handleModeSwitch(
                        mode === 'signup' || mode === 'otp' ? 'login' : 'signup'
                      )
                    }
                  >
                    {mode === 'signup' || mode === 'otp'
                      ? 'sign in'
                      : 'create an account'}
                  </button>{' '}
                  to your account
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className='space-y-6'>
              <form
                onSubmit={mode === 'otp' ? handleOTPSubmit : handleEmailAuth}
                className='space-y-4'
              >
                {mode !== 'otp' && (
                  <>
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
                        className='h-12 border-gray-300'
                      />
                    </div>

                    <div className='space-y-2 relative'>
                      <Label htmlFor='password' className='sr-only'>
                        Password
                      </Label>
                      <div className='relative'>
                        <Input
                          id='password'
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Password*'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className='h-12 border-gray-300 pr-10'
                        />
                        <button
                          type='button'
                          onClick={togglePasswordVisibility}
                          className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none'
                          aria-label={
                            showPassword ? 'Hide password' : 'Show password'
                          }
                        >
                          {showPassword ? (
                            <EyeOff className='h-5 w-5 text-gray-300' />
                          ) : (
                            <Eye className='h-5 w-5 text-gray-300' />
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {mode === 'otp' && (
                  <div className='space-y-2'>
                    <Label htmlFor='otp' className='sr-only'>
                      OTP
                    </Label>
                    <Input
                      id='otp'
                      type='text'
                      placeholder='Enter 6-digit OTP'
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      required
                      maxLength={6}
                      minLength={6}
                      pattern='\d{6}'
                      className='h-12 border-gray-300'
                    />
                  </div>
                )}
                <Button
                  type='submit'
                  className='w-full h-12 bg-primary font-medium'
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Loading...'
                    : mode === 'otp'
                      ? 'Verify OTP'
                      : 'Continue'}
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

              <div className='w-full mx-auto rounded-xl overflow-hidden'>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => console.log('Google Login Failed')}
                  theme='outline'
                  size='large'
                  useOneTap={false}
                  ux_mode='popup'
                  containerProps={{
                    style: {
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </GoogleOAuthProvider>
  );
}
