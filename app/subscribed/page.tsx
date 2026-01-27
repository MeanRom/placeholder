"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className='flex flex-col text-left gap-4'>
        <h1 className='text-2xl font-semibold text-black'>Newsletter</h1>
        <div className='flex flex-col gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-badge-check-icon lucide-badge-check w-20 aspect-square h-auto mb-4 text-emerald-300'
          >
            <motion.path
              d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d='m9 12 2 2 4-4'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
            />
          </svg>
          <p className='text-base text-zinc-600 leading-relaxed'>
            Congrats, you are subscribed! You&apos;ll receive email(s).
          </p>
          <em className='text-sm text-zinc-600 leading-relaxed mt-10'>
            Your email is only for project. Thank you!
          </em>
        </div>
      </div>
    </>
  );
}
