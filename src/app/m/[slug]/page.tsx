"use client";
import React, { useState } from 'react'
import SubmitButton from "@/components/submit-button";

const badGuysInfos = [{id: 1, name: 'Age', type: 'NUMBER'}]

export default function Page({params}: { params: { slug: string } }) {
  const [selectedFields, setSelectedFields] = useState({});

  const toggleField = (fieldId) => {
    setSelectedFields((prevFields) => ({
      ...prevFields,
      [fieldId]: !prevFields[fieldId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Fields:', selectedFields);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Informations à collecter</h2>
      {badGuysInfos.map((field) => (
        <div key={field.id} className="flex items-center mb-4">
          <input
            type="checkbox"
            id={field.name}
            name={field.name}
            checked={selectedFields[field.name]}
            onInput={() => toggleField(field.id)}
            className="mr-2 focus:outline-none"
          />
          <label className="text-gray-700 text-sm" htmlFor={field.name}>
            {field.name}
          </label>
        </div>
      ))}
      <SubmitButton/>
    </form>
  )
}
