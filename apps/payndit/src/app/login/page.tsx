'use client'

import Link from 'next/link';
import { SocialMediaLogin, socialMediaLogin } from '../../constants/social-media';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { supabase } from '../../constants/conf/common';

export default function Login() {
  const router = useRouter()
  const [emailForm, setEmailForm] = useState({email: "", password: ""})
  
  const handleSignin = () => {
    router.push('/account')
  }

  const signInWithEmail = (event: FormEvent) => {
    event.preventDefault()

    const signIn = async () => {
        const {data, error } = await supabase.auth.signInWithPassword({
          email: emailForm.email,
          password: emailForm.password,
        });
      
        if (error) {
          console.error('Error signing in:', error.message);
          return;
        }

        console.log(data)
        handleSignin()
    }
    
    signIn()
  }

  const handleFormChange = (type: "email" | "password", val: ChangeEvent<HTMLInputElement>) => {
    setEmailForm((state) => ({...state, [type]: val.target.value }))
  }

  return (
    <div className="bg-black text-white">
      <div className="max-w-sm bg-black/90 mx-auto min-h-dvh grid pt-20 p-4">
        <div className="w-full">
          <div className="mb-10 text-center text-white">
            <h4 className="text-2xl font-bold">Login to Payndit</h4>
          </div>
          <div className="w-full  grid grid-flow-row mx-auto">
            {socialMediaLogin.map((item: SocialMediaLogin) => item.enabled && (
              <div key={item.name} className="mb-4 ">
                <button className="p-4 w-full h-16 border border-white text-white font-bold rounded-full hover:bg-primary">
                  Continue with {item.name}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <hr />
          </div>
          <div className="mt-4 w-full  grid grid-flow-row mx-auto">
            <form onSubmit={signInWithEmail}>
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
                  value={emailForm.email}
                  onChange={(val) => handleFormChange("email", val)}
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
                  value={emailForm.password}
                  onChange={(val) => handleFormChange("password", val)}
                />
              </div>
              <div className="mt-4">
                <button type='submit' className="p-4 w-full h-16 border-2 border-black bg-primary rounded-full text-white font-bold text-lg">
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-white text-center mt-8">
              <Link href="/reset-password" className='underline'>Forgot your password?</Link>
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
