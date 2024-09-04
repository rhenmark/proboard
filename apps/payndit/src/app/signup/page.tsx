'use client';

import Link from 'next/link';
import {
  SocialMediaLogin,
  socialMediaLogin,
} from '../../constants/social-media';
import { useForm } from 'react-hook-form';
import { supabase } from '../../constants/conf/common';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
};

const Signup = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Inputs) => handleRegister(data)

  const handleRegister = async (form: Inputs) => {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    })
    
    if (error) {
      alert("Failed to register");
      return
    }

    if (data.session) {
      router.push("/account")
    }

  }

  return (
    <div className="bg-black/90 text-white">
      <div className="max-w-sm mx-auto items-start h-dvh grid pt-40 p-4 ">
        <div className="w-full">
          <div className="w-full">
            <h4 className="text-4xl font-bold">Sign up with Payndit</h4>
          </div>
          <div className="mt-10">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-flow-row w-full mb-4">
                <label htmlFor="email" className="text-md mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                  autoComplete=""
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors?.email && (
                  <span className="text-xs text-red-500/70">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div className="grid grid-flow-row w-full">
                <label htmlFor="password" className="text-md mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        'Password must include uppercase, lowercase, numbers, and special characters',
                    },
                  })}
                />
                <span className="text-xs">
                  Password should contain upper and lower case letters, numbers,
                  and special characters.
                </span>
              </div>
              <div className="mt-8">
                <button className="w-full p-4 rounded-full bg-primary text-white/90">
                  Signup
                </button>
              </div>
            </form>
          </div>
          <div className="my-14">
            <hr />
          </div>
          <div>
            {socialMediaLogin.map(
              (item: SocialMediaLogin) =>
                item.enabled && (
                  <div key={item.name} className="mb-4 ">
                    <button className="p-2 w-full h-14 border border-white text-white font-bold rounded-full hover:bg-primary">
                      Signup with {item.name}
                    </button>
                  </div>
                )
            )}
          </div>
          <div className="my-14">
            <hr />
          </div>
          <div className="text-center">
            <span>Already have an account? </span>
            <Link href={'/login?from=signup'} className="underline">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
