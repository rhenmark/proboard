'use client';

import Link from 'next/link';
import {
  SocialMediaLogin,
  socialMediaLogin,
} from '../../constants/social-media';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

type UserType = "user" | "provider"

type FormInput = {
  email: string;
  password: string;
  type: UserType,
  termsAndCondition: boolean;
};

const Signup = () => {
  const searchParams = useSearchParams();
  const queryType: UserType | string | null = searchParams.get('type') ;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormInput>();
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  useEffect(() => {
     if(queryType) {
      setValue("type", queryType as UserType || "user")
     }
  }, [queryType, setValue])

  const isServiceProvider = watch('type') === "provider";

  return (
    <div className="bg-black/90 text-white py-10">
      <div className="max-w-sm mx-auto items-start h-dvh grid py-10 p-4 ">
        <div className="w-full">
          <div className="w-full">
            <h4 className="text-4xl font-bold">Sign up with Payndit</h4>
          </div>
          <div className="mt-10">
            <form className="w-full" onSubmit={onSubmit}>
              <div className="grid grid-flow-row w-full mb-4">
                <label htmlFor="email" className="text-md mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                  autoComplete=""
                  className={`w-full p-4 mb-2 bg-black border border-white rounded-md outline-none ${errors?.email ? "border-red-600" : ""}`}
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
                    {errors.email?.message}
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
                  className={`w-full p-4 mb-2 bg-black border border-white rounded-md ${errors?.password ? "border-red-600 outline-none" : ""}`}
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
                        'Password must be at least 6 characters and include uppercase, lowercase, numbers, and special characters',
                    },
                  })}
                />
                <span className={`text-xs ${errors?.password ? "text-red-600" : ""}`}>
                 Password must be at least 6 characters and include uppercase, lowercase, numbers, and special characters
                </span>
              </div>
              <div className='grid grid-cols-2 gap-2 my-8 mt-12'>
                <ProviderTab label='I am looking for services' isSelected={!isServiceProvider} onClick={() => setValue("type", "user")} /> 
                <ProviderTab label='I am a service provider' isSelected={isServiceProvider} onClick={() => setValue("type", "provider")} />
              </div>
              
              <div>
                <div className='grid grid-flow-col gap-2 justify-start'>
                  <input type='checkbox' id="terms_and_conditions" {...register('termsAndCondition', {
                    required: "Please accept the Terms and Condition"
                  })} />
                  <label htmlFor="terms_and_conditions">
                    Accept Terms and Conditions
                  </label>
                </div>
              {errors.termsAndCondition && <span className='text-sm text-red-600'>{errors.termsAndCondition.message}</span>}
              </div>

              <div className="mt-8">
                <button type='submit' className="w-full p-4 rounded-full bg-primary text-white/90">
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
                      Sign up with {item.name}
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

type ProviderTabType = {
  label: string;
  isSelected?: boolean
  onClick: () => void
}
const ProviderTab = ({label, isSelected, onClick}: ProviderTabType) => {
  return (
    <button onClick={onClick} type='button' className={`border-2 rounded-md p-2 text-sm hover:bg-primary/80 ${isSelected ? "bg-primary/80" : ""}`}>{label}</button>
  )
}

const SignupProvider = () => {
  return (
    <Suspense>
      <Signup />
    </Suspense>
  )
}

export default SignupProvider;
