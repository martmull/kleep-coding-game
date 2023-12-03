import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Qui êtes vous ?</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
          href={'m'}
        >
          M
        </Link>
        <Link
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-purple-300 transition duration-300"
          href={'spy'}
        >
          Espion
        </Link>
      </div>
    </div>
  )
}
