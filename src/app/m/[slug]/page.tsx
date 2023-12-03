"use client";
import React, { useEffect, useState } from 'react'
import SubmitButton from "@/components/submit-button";

export default function Page({params}: { params: { slug: string } }) {
  const [selectedInfos, setSelectedInfos] = useState([])
  const toggleField = (infoId) => {
    setSelectedInfos(selectedInfos.map((info) => {
        if (info.id === infoId) info.selected = !info.selected
        return info
      }
    ))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/handle_set_requests/${params.slug}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(selectedInfos)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  };

  useEffect(() => {
    fetch(`/api/infos/${params.slug}`)
      .then(response => response.json())
      .then(data => {
        setSelectedInfos(
          data.map((info) => ({...info, selected: !!info.Request.length}))
        )
      })
  }, [params])

  return selectedInfos.length ? (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Informations à collecter</h2>
      {selectedInfos.map((info) => (
        <div key={info.id} className="flex items-center mb-4">
          <input
            type="checkbox"
            id={info.name}
            name={info.name}
            checked={info.selected}
            onInput={() => toggleField(info.id)}
            className="mr-2 focus:outline-none"
          />
          <label className="text-gray-700 text-sm" htmlFor={info.name}>
            {info.name}
          </label>
        </div>
      ))}
      <SubmitButton/>
    </form>
  ) : (<></>)
}
