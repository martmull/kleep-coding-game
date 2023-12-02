"use client";
import React, { useState } from 'react'
import SubmitButton from "@/components/submit-button";

const badGuysInfos = [{id: 1, name: 'Age', type: 'NUMBER'}]

export default function Page({params}: { params: { slug: string } }) {
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log('Form data updated:', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Bad Guy Information Form</h2>
      {badGuysInfos.map((field) => (
        <div key={field.id} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
            {field.name}
          </label>
          {field.type === 'TEXT' && (
            <input
              type="text"
              id={field.name}
              name={field.name}
              onInput={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          )}
          {field.type === 'NUMBER' && (
            <input
              type="number"
              id={field.name}
              name={field.name}
              onInput={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          )}
          {field.type === 'DATE' && (
            <input
              type="date"
              id={field.name}
              name={field.name}
              onInput={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          )}
        </div>
      ))}
      <SubmitButton/>
    </form>
  )
}
