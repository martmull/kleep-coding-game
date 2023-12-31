import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import HomeButton from "@/components/home-button";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'MI6 Spy Kit',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Link href="/"
          className="absolute top-4 left-4 text-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 transition duration-300">
      <HomeButton/>
    </Link>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-md rounded-md w-full max-w-lg my-8">
        {children}
      </div>
    </div>
    </body>
    </html>
  )
}
