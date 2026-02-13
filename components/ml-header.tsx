"use client"

import { Search, ShoppingCart } from "lucide-react"
import { useState } from "react"

export function MlHeader() {
  const [search, setSearch] = useState("")

  return (
    <header className="sticky top-0 z-50 flex items-center gap-2 bg-[#ffe600] px-4 py-2.5 shadow-sm">
      <div className="flex h-8 w-11 items-center justify-center">
        <span className="text-lg font-bold text-[#333]">ML</span>
      </div>
      <div className="flex flex-1 items-center rounded bg-[#fff] shadow-sm">
        <Search className="ml-2.5 h-4 w-4 text-[#999]" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Estou buscando..."
          className="flex-1 border-none bg-transparent px-2.5 py-2 text-sm text-[#333] outline-none placeholder:text-[#999]"
        />
      </div>
      <button
        className="relative flex h-7 w-7 items-center justify-center"
        aria-label="Carrinho"
      >
        <ShoppingCart className="h-5 w-5 text-[#333]" />
      </button>
    </header>
  )
}
