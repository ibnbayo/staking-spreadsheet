'use client'

import { useState } from 'react'
import Image from 'next/image'
import pencil from '../assets/images/pencil.svg'

export default function Spreadsheet() {
  const [data, setData] = useState([
    ['$1,000', '15%', '$150'],
    ['$5,000', '5%', '$250'],
    ['$10,000', '10%', '$1,000'],
  ])

  const handleChange = (
    index: number,
    column: number,
    value: string,
  ) => {
    const updatedData = [...data]
    updatedData[index][column] = value
    setData(updatedData)
  }

  return (
    <div className="max-w-2xl bg-white p-8">
      <table className="w-full text-left text-sm text-gray-900">
        <thead>
          <tr className="border-b border-gray-300 font-medium">
            <th className="py-3 pr-6">Price</th>
            <th className="py-3 pr-6">Reward Rate</th>
            <th className="py-3">Annual Reward in $</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              {row.map((cell, columnIndex) => (
                <td key={columnIndex} className="py-3 pr-6">
                  <div className="relative">
                    <input
                      className="w-full rounded border px-3 py-2 text-gray-900 outline-none"
                      value={cell}
                      onChange={(e) =>
                        handleChange(rowIndex, columnIndex, e.target.value)
                      }
                    />

                    <Image
                      alt="Pencil Image"
                      src={pencil}
                      className="absolute right-2 top-2 h-4 w-4"
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
