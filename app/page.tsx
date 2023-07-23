'use client'
import SearchBar from '@/src/components/SearchBar'
import Spreadsheet from '@/src/components/Spreadsheet'

const handleSearch = (query: any) => {}

export default function Home() {
  return (
    <main data-testid="main" className="mx-auto max-w-2xl">
      <h1
        data-testid="header"
        className="font-montserrat mt-10 text-2xl font-bold leading-normal text-black md:ml-[149px]"
      >
        Your Personal Staking Calculator
      </h1>
      <SearchBar
        placeholder={`Type a serch query to filter`}
        onSearch={handleSearch}
      />
      <Spreadsheet />
    </main>
  )
}
