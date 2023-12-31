"use client"
import React, { useEffect, useState } from 'react';
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";


export default function BadGuys({type}: { type: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [badGuys, setBadGuys] = useState([])
  const setInfosCompleted = (infos) => {
    return infos.map((info) => {
      info.infoCompleted = info.Request.length && !!info.Request.every((req) => req.value);
      return info
    })
  }

  useEffect(() => {
    const getBadGuys = () => {
      fetch(`/api/bad-guys?type=${type}`)
        .then(response => response.json())
        .then(data => {
          setBadGuys(setInfosCompleted(data))
          setIsLoading(false)
        })
    }
    getBadGuys()
  }, [type])

  const Table = ({data}) => (
    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
      <thead>
      <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <th className="py-2 px-4 border-b text-left">Nom</th>
        <th className="py-2 px-4 border-b text-left"></th>
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}>
          <td className="py-2 px-4 border-b ">
            <Link href={`${type}/${slugify(item.name)}`}>
              {item.name}
            </Link>
          </td>
          <td className="py-2 px-4 border-b ">
            {item.infoCompleted ? (<FaCheck/>) : ''}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );

  if (isLoading) return (<></>)

  return (
    <div className='p-8'>
      {badGuys.length ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Liste des Malfrats</h1>
          <Table data={badGuys}/>
        </>
      ) : (<h1 className="text-3xl font-bold mb-4 text-indigo-600">Aucun information à récolter</h1>)}
    </div>
  )
}
