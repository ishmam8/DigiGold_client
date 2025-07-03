'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
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
import { Eye, EyeOff, Mail, Shield, Sparkles } from 'lucide-react';
import axios from 'axios';

export default function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOTP] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTokensAndRedirect = (tokens: {
    access: string;
    refresh: string;
  }) => {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
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
          { email, password },
          { withCredentials: true }
        );
        console.log('Registration successful:', response.data);
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
          { email, password },
          { withCredentials: true }
        );
        console.log('Login successful:', response.data);
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
        { email: email, otp: otp },
        { withCredentials: true }
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

  const getTitle = () => {
    switch (mode) {
      case 'signup':
        return 'Create your account';
      case 'otp':
        return 'Verify your identity';
      default:
        return 'Welcome back';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'signup':
        return 'Join our premium platform';
      case 'otp':
        return 'Enter the verification code sent to your email';
      default:
        return 'Sign in to continue to your account';
    }
  };

  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const iframe = window.document.getElementsByTagName('iframe');
      if (iframe[0]) {
        iframe[0].style.width = '100%';
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className='w-full min-h-screen hero-bg flex items-center justify-center p-4 relative overflow-hidden dark:hero-bg-dark'>
        {/* Animated background elements */}
        <div className='absolute inset-0 grid-pattern opacity-30'></div>

        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={mode}
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              scale: { duration: 0.3 },
            }}
            className='w-full max-w-md relative z-10'
          >
            <Card className='glass-effect hover-lift premium-shadow border-0 backdrop-blur-xl bg-white/90 dark:bg-black/90'>
              <CardHeader className='space-y-6 pb-8 text-center relative'>
                <div className='space-y-3'>
                  <CardTitle className='text-3xl font-bold gold-gradient text-balance'>
                    {getTitle()}
                  </CardTitle>
                  <CardDescription className='text-base text-gray-600 dark:text-gray-300'>
                    {getDescription()}
                  </CardDescription>

                  {mode !== 'otp' && (
                    <div className='pt-2'>
                      <span className='text-sm text-gray-500'>
                        {mode === 'signup'
                          ? 'Already have an account?'
                          : "Don't have an account?"}{' '}
                      </span>
                      <button
                        type='button'
                        className='text-sm font-semibold gold-gradient hover:underline focus:outline-none transition-all duration-200'
                        onClick={() =>
                          handleModeSwitch(
                            mode === 'signup' ? 'login' : 'signup'
                          )
                        }
                      >
                        {mode === 'signup' ? 'Sign in' : 'Create account'}
                      </button>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className='space-y-6 px-8 pb-8'>
                <form
                  onSubmit={mode === 'otp' ? handleOTPSubmit : handleEmailAuth}
                  className='space-y-5'
                >
                  {mode !== 'otp' && (
                    <>
                      <div className='space-y-2 relative'>
                        <Label
                          htmlFor='email'
                          className='text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                          Email address
                        </Label>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                          <Input
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='h-12 pl-10 border-2 border-gray-200 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 transition-all duration-200 bg-white/50 dark:bg-black/50'
                          />
                        </div>
                      </div>

                      <div className='space-y-2 relative'>
                        <Label
                          htmlFor='password'
                          className='text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                          Password
                        </Label>
                        <div className='relative'>
                          <Input
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='h-12 pr-10 border-2 border-gray-200 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 transition-all duration-200 bg-white/50 dark:bg-black/50'
                          />
                          <button
                            type='button'
                            onClick={togglePasswordVisibility}
                            className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-yellow-600 focus:outline-none transition-colors duration-200'
                          >
                            {showPassword ? (
                              <EyeOff className='h-5 w-5' />
                            ) : (
                              <Eye className='h-5 w-5' />
                            )}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {mode === 'otp' && (
                    <div className='space-y-2'>
                      <Label
                        htmlFor='otp'
                        className='text-sm font-medium text-gray-700 dark:text-gray-300'
                      >
                        Verification Code
                      </Label>
                      <Input
                        id='otp'
                        type='text'
                        placeholder='Enter 6-digit code'
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        required
                        maxLength={6}
                        minLength={6}
                        pattern='\d{6}'
                        className='h-12 text-center text-2xl font-mono tracking-widest border-2 border-gray-200 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 transition-all duration-200 bg-white/50 dark:bg-black/50'
                      />
                    </div>
                  )}

                  <Button
                    type='submit'
                    className='w-full h-12 btn-primary text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <span>
                        {mode === 'otp'
                          ? 'Verify Code'
                          : mode === 'signup'
                            ? 'Create Account'
                            : 'Sign In'}
                      </span>
                    )}
                  </Button>
                </form>

                {mode !== 'otp' && (
                  <>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <Separator className='w-full bg-gray-200 dark:bg-gray-700' />
                      </div>
                      <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-white dark:bg-black px-4 text-gray-500 font-medium'>
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className='w-full'>
                      <div className='p-1 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500'>
                        <div className='bg-white dark:bg-black rounded-md cursor-pointer'>
                          <div
                            ref={googleButtonRef}
                            style={{ pointerEvents: 'auto' }}
                          >
                            <GoogleLogin
                              onSuccess={handleGoogleSuccess}
                              onError={() => console.log('Google Login Failed')}
                              theme='outline'
                              shape='rectangular'
                              width='100%'
                              containerProps={{
                                style: {
                                  width: '100%',
                                  height: '48px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {mode === 'otp' && (
                  <div className='text-center'>
                    <button
                      type='button'
                      className='text-sm gold-gradient hover:underline focus:outline-none transition-all duration-200'
                      onClick={() => handleModeSwitch('signup')}
                    >
                      Didn't receive the code? Resend
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Floating decorative elements */}
          </motion.div>
        </AnimatePresence>
      </div>
    </GoogleOAuthProvider>
  );
}
