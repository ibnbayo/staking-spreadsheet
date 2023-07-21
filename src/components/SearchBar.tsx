"use client";

import { useState } from "react";
import Image from "next/image";
import SearchIcon from "../assets/images/search.svg";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function Search({ placeholder, onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  return (
    <form className="mt-4" onSubmit={() => onSearch(query)}>
      <div className="flex ml-8 gap-2 bg-[#F3F3F3] rounded-md w-[250px] md:w-[615px] py-2 ">
        <Image
          className="ml-[7px]"
          src={SearchIcon}
          alt="Search Icon"
          width={13}
          height={13}
        />
        <input
          className="w-full bg-[#F3F3F3] text-xs px-2"
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}
