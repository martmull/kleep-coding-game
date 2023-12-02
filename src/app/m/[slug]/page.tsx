"use client";
import React, { useState } from 'react'
import { badGuysInfos } from "@/data/bad-guys-infos";

export default function Page({params}: { params: { slug: string } }) {
  const [selectedFields, setSelectedFields] = useState(
    badGuysInfos.reduce(
      (acc, val) => Object.assign(acc, {[val.id]: false}), {}
    )
  );

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
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Select Bad Guy Information</h2>
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
      >
        Submit
      </button>
    </form>
  )
}
