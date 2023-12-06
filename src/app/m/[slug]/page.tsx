"use client";
import React, { useEffect, useState } from 'react'
import SubmitButton from "@/components/submit-button";
import { toast, ToastContainer } from "react-toastify";

export default function Page({params}: { params: { slug: string } }) {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedInfos, setSelectedInfos] = useState([])
  const notify = () => toast.success("Information enregistrées !", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
  });

  const toggleField = (infoId) => {
    setSelectedInfos(selectedInfos.map((info) => {
        if (info.id === infoId) info.selected = !info.selected
        return info
      }
    ))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/handle-set-requests/${params.slug}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(selectedInfos)
    })
      .then(response => response.json())
      .then(() => {
        notify()
      })
  };

  useEffect(() => {
    fetch(`/api/infos/${params.slug}`)
      .then(response => response.json())
      .then(data => {
        setSelectedInfos(
          data.map((info) => ({...info, selected: !!info.Request.length}))
        )
        setIsLoading(false)
      })
  }, [params])

  if (isLoading) return (<></>)

  return selectedInfos.length ? (
    <div className='p-8'>
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
        <ToastContainer/>
      </form>
    </div>
  ) : (<></>)
}
