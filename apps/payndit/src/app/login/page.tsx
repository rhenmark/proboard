'use client';

import Link from 'next/link';
import {
  SocialMediaLogin,
  socialMediaLogin,
} from '../../constants/social-media';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Suspense } from 'react';

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const handleSignin = () => {
    if (returnTo) {
      router.push(returnTo);
      return;
    }

    router.push('/account');
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    handleSignin();
  });
  return (
    <div className="bg-black text-white">
      <div className="max-w-sm bg-black/90 mx-auto min-h-dvh grid pt-20 p-4">
        <div className="w-full">
          <div className="mb-10 text-center text-white">
            <h4 className="text-2xl font-bold">Login to Payndit</h4>
          </div>
          <div className="w-full  grid grid-flow-row mx-auto">
            {socialMediaLogin.map(
              (item: SocialMediaLogin) =>
                item.enabled && (
                  <div key={item.name} className="mb-4 ">
                    <button className="p-4 w-full h-16 border border-white text-white font-bold rounded-full hover:bg-primary">
                      Continue with {item.name}
                    </button>
                  </div>
                )
            )}
          </div>
          <div className="mt-12">
            <hr />
          </div>
          <div className="mt-4 w-full  grid grid-flow-row mx-auto">
            <form onSubmit={onSubmit}>
              <div className="my-4">
                <label htmlFor="email" className="text-md mb-2 inline-block">
                  Email or username
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email or username"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  autoCorrect="false"
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className="text-md mb-2 inline-block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  autoComplete="false"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="p-4 w-full h-16 border-2 border-black bg-primary rounded-full text-white font-bold text-lg"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-white text-center mt-8">
              <Link href="/reset-password" className="underline">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="my-12">
            <hr />
          </div>
          <div className="text-white text-center">
            <span>Don{"'"}t have an account? </span>
            <Link href="/signup?from=login" className="underline font-semibold">
              Sign up for Payndit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const PageLogin = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  )
}

export default PageLogin;