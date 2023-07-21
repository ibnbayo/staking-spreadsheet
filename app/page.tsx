"use client";
import SearchBar from "@/src/components/SearchBar";

const handleSearch = (query: any) => {};

export default function Home() {
  return (
    <main data-testid="main">
      <h1
        data-testid="header"
        className="text-black font-montserrat text-2xl font-bold leading-normal ml-[30px] md:ml-[149px] mt-10"
      >
        Your Personal Staking Calculator
      </h1>
      <SearchBar
        placeholder={`Type a serch query to filter`}
        onSearch={handleSearch}
      />
    </main>
  );
}
