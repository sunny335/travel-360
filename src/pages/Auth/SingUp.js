import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center h-full rounded-md my-10'>
      <div className='max-w-[570px] w-full border-[2px] p-[40px]'>
        <p className='text-2xl text-black font-semibold'>Create an account</p>
        <form onSubmit={handleSubmit(onSubmit)} className='pt-5'>
          <div>
            <input
              className='mt-4 w-full border-b-[1px] border-gray-300 h-[48px] text-base focus:outline-none placeholder:text-black'
              placeholder='First Name'
              type='text'
              {...register("firstName", {
                  required: {
                    value: true,
                    message: "Enter First Name",
                  },
                })}
            />
             <label class="label">
                {errors.firstName?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.firstName?.message}
                  </span>
                )}
              </label>
          </div>
          <div>
            <input
              className='mt-4 w-full border-b-[1px] border-gray-300 h-[48px] text-base focus:outline-none placeholder:text-black'
              placeholder='Last Name'
              type='text'
              {...register("lastName", {
                  required: {
                    value: true,
                    message: "Enter Last First Name",
                  },
                })}
            />
             <label class="label">
                {errors.lastName?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.lastName?.message}
                  </span>
                )}
              </label>
          </div>

          <div>
            <input
              className='mt-4 w-full border-b-[1px] border-gray-300 h-[48px] text-base focus:outline-none placeholder:text-black'
              placeholder='Email'
              type='email'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Enter Your Email',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Enter a valid email',
                },
              })}
            />
              <label class='label'>
              {errors.email?.type === 'required' && (
                <span class='label-text-alt text-red-600'>
                  {errors?.email?.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span class='label-text-alt text-red-600'>
                  {errors?.email?.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              className='mt-4 w-full border-b-[1px] border-gray-300 h-[48px] text-base focus:outline-none placeholder:text-black'
              placeholder='Password'
              type='password'
                 {...register('password', {
                required: {
                  value: true,
                  message: 'Enter Your Password',
                },

              })}
            />

                 <label class='label'>
              {errors.password?.type === 'required' && (
                <span class='label-text-alt text-red-600'>
                  {errors?.password?.message}
                </span>
              )}

            </label>
          </div>
          <div>
            <input
              className='mt-4 w-full border-b-[1px] border-gray-300 h-[48px] text-base focus:outline-none placeholder:text-black'
              placeholder='Confirm Password'
              type='password'
                 {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Enter Confirm Your Password',
                },

              })}
            />

                 <label class='label'>
              {errors.confirmPassword?.type === 'required' && (
                <span class='label-text-alt text-red-600'>
                  {errors?.confirmPassword?.message}
                </span>
              )}

            </label>
          </div>

          <input
            className='h-[50px] w-full bg-amber-500 text-black text-base font-semibold mt-8 cursor-pointer hover:bg-white hover:border-[2px] hover:border-amber-500 duration-300'
            type='submit'
            value='Sign Up'
          />
        </form>
        <div className='text-center pt-5'>
          <p className='text-black text-base font-medium'>
            Already have an account?{' '}
            <Link
              to='/sign-in'
              className='text-amber-500 text-base font-medium underline'
            >
              {' '}
              SignIn
            </Link>
          </p>
        </div>

        <div className='pt-10'>
          <span class='flex items-center justify-center space-x-2'>
            <span class='h-px bg-gray-400 w-20'></span>
            <span class='font-normal text-gray-500'>or sign up with</span>
            <span class='h-px bg-gray-400 w-20'></span>
          </span>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
          <button className='max-w-[461px] w-full h-[51px] bg-white rounded-[57px] border border-stone-300'>
            <div className='flex px-1 items-center gap-[21%]'>
              <span>
                <svg
                  width='37'
                  height='37'
                  viewBox='0 0 37 37'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='18.5' cy='18.5' r='18.5' fill='#3076FF' />
                  <g clip-path='url(#clip0_19_561)'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M20.4084 27.1334V19.7334H22.6555L23.0223 16.4445H20.4084V14.8426C20.4084 13.9957 20.4306 13.1556 21.6138 13.1556H22.8126V10.8042C22.8126 10.7688 21.7824 10.6889 20.7406 10.6889C18.5658 10.6889 17.2034 12.0515 17.2034 14.5535V16.4445H14.8V19.7334H17.2034V27.1334H20.4084Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_19_561'>
                      <rect
                        width='8.22222'
                        height='16.4444'
                        fill='white'
                        transform='translate(14.8 10.6889)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className='text-black text-base font-medium'>
                Continue with Facebook
              </p>
            </div>
          </button>
          <button className='max-w-[461px] w-full h-[51px] bg-white rounded-[57px] border border-stone-300'>
            <div className='flex items-center gap-[25%] px-1'>
              <span>
                <svg
                  width='31'
                  height='32'
                  viewBox='0 0 31 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_19_571)'>
                    <path
                      d='M30.9999 16.2335C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.998 21.0907 22.8592 22.8342 21.1915 23.9421V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2335Z'
                      fill='#4285F4'
                    />
                    <path
                      d='M15.811 31.7381C20.0761 31.7381 23.6729 30.3328 26.2935 27.9071L21.1975 23.942C19.7797 24.91 17.9494 25.4581 15.8168 25.4581C11.6913 25.4581 8.19322 22.665 6.93811 18.9099H1.67944V22.9974C4.36398 28.3561 9.83183 31.7381 15.811 31.7381Z'
                      fill='#34A853'
                    />
                    <path
                      d='M6.93224 18.9099C6.26983 16.939 6.26983 14.8049 6.93224 12.834V8.74649H1.67939C-0.563539 13.2305 -0.563539 18.5134 1.67939 22.9974L6.93224 18.9099Z'
                      fill='#FBBC04'
                    />
                    <path
                      d='M15.811 6.28001C18.0656 6.24503 20.2446 7.09635 21.8774 8.65906L26.3923 4.12838C23.5334 1.43446 19.739 -0.0466162 15.811 3.17992e-05C9.83183 3.17992e-05 4.36398 3.38201 1.67944 8.74652L6.9323 12.8341C8.1816 9.07306 11.6854 6.28001 15.811 6.28001Z'
                      fill='#EA4335'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_19_571'>
                      <rect width='31' height='31.7381' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className='text-black text-base font-medium'>
                Continue with Google
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
