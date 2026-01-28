import Link from "next/link";

export default function Home() {
  const title = process.env.NEXT_PUBLIC_TUTLE;

  return (
    <>
      <div className='flex flex-col text-left gap-4'>
        {title ? (
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold text-black'>{title}</h1>
            <h2 className='text-sm font-light text-black uppercase tracking-tight'>
              In-Dev mode
            </h2>
          </div>
        ) : (
          <h1 className='text-2xl font-semibold text-black'>In-Dev mode</h1>
        )}
        <div className='flex flex-col'>
          <p className='text-base text-zinc-600 leading-relaxed'>
            Building a website.
          </p>
          <p className='text-base text-zinc-600 leading-relaxed'>
            Project is in development.
          </p>
        </div>
      </div>

      <div className='w-full text-left'>
        <p className='text-sm text-zinc-500'>
          Want to be notified?{" "}
          <Link
            href={"/newsletter"}
            className='flex gap-2 items-center mt-5 group before:bg-black before:absolute before:w-0 transition-all before:transition-all duration-100 hover:before:w-full before:h-[.05rem] before:bottom-0 before:left-0 relative w-max'
          >
            Informed by mail{" "}
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
              className='lucide lucide-arrow-right-icon lucide-arrow-right ml-0 group-hover:ml-5 transition-all duration-100'
            >
              <path d='M5 12h14' />
              <path d='m12 5 7 7-7 7' />
            </svg>
          </Link>
        </p>
      </div>
    </>
  );
}
