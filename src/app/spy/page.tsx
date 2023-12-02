import React from 'react';

export default function Page() {
  const badGuys = [
    { id: 1, name: 'Kim-Jung Un'},
    { id: 2, name: 'Xavier Dupont de Ligonnès'},
    { id: 3, name: 'Vladimir Poutine'},
    { id: 4, name: 'Le Chiffre'},
    { id: 5, name: 'Thanos'},
    { id: 5, name: 'Voldemort'},
  ];

  const Table = ({ data }) => (
    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
      <thead>
      <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <th className="py-2 px-4 border-b text-left">Name</th>
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
          <td className="py-2 px-4 border-b">{item.name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Beautiful Table Example</h1>
        <Table data={badGuys} />
      </div>
    </div>
  )
}
