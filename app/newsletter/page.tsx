"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const formUrl = process.env.NEXT_PUBLIC_FORM_URL ?? "";
  const formId = process.env.NEXT_PUBLIC_FORM_ID ?? "";
  const formValue = process.env.NEXT_PUBLIC_FORM_VALUE ?? "";

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          l: formValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      router.push("/subscribed");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='flex flex-col text-left gap-4'>
        <h1 className='text-2xl font-semibold text-black'>Newsletter</h1>
        <div className='flex flex-col'>
          <p className='text-base text-zinc-600 leading-relaxed'>
            Get notified!
          </p>
        </div>
      </div>

      <div className='w-full text-left'>
        <form
          onSubmit={handleSubmit}
          className='listmonk-form flex flex-col gap-4'
        >
          <input type='hidden' name='nonce' />

          <h3 className='text-lg font-medium text-black'>Register</h3>

          <div className='flex flex-col gap-3'>
            <input
              type='email'
              name='email'
              required
              placeholder='E-mail'
              className='px-4 py-2.5 border border-zinc-300 rounded-lg text-base text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all'
            />
            <label className='items-center gap-2 text-sm text-zinc-600 cursor-pointer hidden'>
              <input
                id={formId}
                type='checkbox'
                name='l'
                defaultChecked
                value={formValue}
                className='w-4 h-4 accent-emerald-300 cursor-pointer'
              />
              <span>form</span>
            </label>
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-400 disabled:cursor-not-allowed'
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>

      {error && (
        <div className='w-full p-4 bg-red-50 border border-red-200 rounded-lg'>
          <p className='text-red-600 text-sm'>{error}</p>
        </div>
      )}
    </>
  );
}
