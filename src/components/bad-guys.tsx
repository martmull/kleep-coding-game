import React from 'react';
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import { badGuys } from "@/data/bad-guys";

export default function BadGuys({type}) {
  const Table = ({data}) => (
    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
      <thead>
      <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <th className="py-2 px-4 border-b text-left">Nom</th>
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}>
          <Link href={`${type}/${slugify(item.name)}`}>
            <td className="py-2 px-4 border-b block">{item.name}</td>
          </Link>
        </tr>
      ))}
      </tbody>
    </table>
  );
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Liste des Malfrats</h1>
      <Table data={badGuys}/>
    </>
  )
}
