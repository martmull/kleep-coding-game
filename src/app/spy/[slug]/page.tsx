"use client";
import React, { useEffect, useState } from 'react'
import SubmitButton from "@/components/submit-button";

export default function Page({params}: { params: { slug: string } }) {
  const [isLoading, setIsLoading] = useState(true)
  const [requestedInfos, setRequestedInfos] = useState([])

  const handleChange = (infoId, e) => {
    setRequestedInfos(requestedInfos.map((selectedInfo) => {
      if (selectedInfo.id === infoId) {
        return {...selectedInfo, value: e.target.value}
      }
      return selectedInfo
    }))
    console.log('Form data updated:', requestedInfos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/fill-requests', {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestedInfos)
    }).then(response => response.json())
      .then(data => console.log(data))
  };

  useEffect(() => {
    fetch(`/api/requests/${params.slug}`)
      .then(response => response.json())
      .then(data => {
        setRequestedInfos(data)
        setIsLoading(false)
      })
  }, [params])

  if (isLoading) return (<></>)

  return requestedInfos.length ? (
    <div className='p-8'>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Informations du Malfrat</h2>
        {requestedInfos.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.info.name}
            </label>
            {field.info.type === 'TEXT' && (
              <input
                type="text"
                id={field.info.name}
                name={field.info.name}
                value={field.value || ''}
                onInput={(e) => handleChange(field.id, e)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            )}
            {field.info.type === 'NUMBER' && (
              <input
                type="number"
                id={field.info.name}
                name={field.info.name}
                value={field.value || ''}
                onInput={(e) => handleChange(field.id, e)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            )}
            {field.info.type === 'DATE' && (
              <input
                type="date"
                id={field.info.name}
                name={field.info.name}
                value={field.value || ''}
                onInput={(e) => handleChange(field.id, e)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            )}
          </div>
        ))}
        <SubmitButton/>
      </form>
    </div>
  ) : (
    <h3 className="text-3xl mb text-gray-700">Pas d'information à renseigner. Contactez M</h3>
  )
}
