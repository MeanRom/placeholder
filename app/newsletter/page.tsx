export default function Home() {
  const formUrl = process.env.NEXT_PUBLIC_FORM_URL;
  const formId = process.env.NEXT_PUBLIC_FORM_ID;
  const formValue = process.env.NEXT_PUBLIC_FORM_VALUE;

  return (
    <>
      <div className='flex flex-col text-left gap-4'>
        <h1 className='text-2xl font-semibold text-black'>Newsletter</h1>
        <div className='flex flex-col'>
          <p className='text-base text-zinc-600 leading-relaxed'>
            Get first notified on the launch of this project!
          </p>
        </div>
      </div>

      <div className='w-full text-left'>
        <form
          method='post'
          action={formUrl}
          className='listmonk-form flex flex-col gap-4'
        >
          <input type='hidden' name='nonce' />

          <h3 className='text-lg font-medium text-black'>Subscribe for free</h3>

          <div className='flex flex-col gap-3'>
            <input
              type='email'
              name='email'
              required
              placeholder='E-mail'
              className='px-4 py-2.5 border border-zinc-300 rounded-lg text-base text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#46DE7F] focus:border-transparent transition-all'
            />
            <label className='items-center gap-2 text-sm text-zinc-600 cursor-pointer hidden'>
              <input
                id={formId}
                type='checkbox'
                name='l'
                defaultChecked
                value={formValue}
                className='w-4 h-4 accent-[#46DE7F] cursor-pointer'
              />
              <span>form</span>
            </label>
          </div>

          <button
            type='submit'
            className='px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-400 disabled:cursor-not-allowed'
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
