import React from 'react';
import { useForm } from 'react-hook-form';

const NewPassword = () => {
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
     <div className='flex justify-center items-center h-screen w-full rounded-md my-10'>
      <div className='max-w-[570px] w-full border-[2px] p-[40px]'>
        <p className='text-2xl text-black font-semibold'>Set New Password</p>
        <form onSubmit={handleSubmit(onSubmit)} className='pt-5'>
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
            value='Set'
          />
        </form>




      </div>
    </div>
  );
};

export default NewPassword;