'use client'

import { useState } from 'react'
import Image from 'next/image'
import SearchIcon from '../assets/images/search.svg'

interface SearchProps {
  placeholder?: string
  onSearch: (query: string) => void
}

export default function Search({
  placeholder,
  onSearch,
}: SearchProps) {
  const [query, setQuery] = useState('')

  return (
    <form className="mt-4" onSubmit={() => onSearch(query)}>
      <div className="ml-8 flex w-[250px] gap-2 rounded-md bg-[#F3F3F3] py-2 md:w-[615px] ">
        <Image
          className="ml-[7px]"
          src={SearchIcon}
          alt="Search Icon"
          width={13}
          height={13}
        />
        <input
          className="w-full bg-[#F3F3F3] px-2 text-xs"
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </form>
  )
}
