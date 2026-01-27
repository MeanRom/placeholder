import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLogo from "./components/AppLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TM Dev - Under Development",
  description: "Currently building something new. Check back soon for updates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex min-h-screen items-center justify-center bg-white md:w-2xl px-4'>
          <main className='flex flex-col gap-8 text-center w-full md:max-w-md'>
            <AppLogo />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
