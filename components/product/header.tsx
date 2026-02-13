import { Search, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center border-b border-[rgba(0,0,0,0.1)] bg-[#ffe600] px-4 py-2.5 shadow-sm">
      <div className="h-8 w-11 cursor-pointer rounded bg-[#ffe600]">
        <span className="sr-only">Logo</span>
      </div>

      <div className="mx-2 flex h-[34px] flex-1 items-center rounded-sm bg-[#fff]">
        <Search className="ml-2.5 h-4 w-4 text-[#cacaca]" />
        <input
          type="search"
          placeholder="Estou buscando..."
          className="flex-1 border-none bg-transparent px-2.5 text-sm text-[#333] outline-none placeholder:text-[#cacaca]"
        />
      </div>

      <div className="relative ml-2 cursor-pointer">
        <ShoppingCart className="h-5 w-5 text-[#333]" />
      </div>
    </header>
  )
}
