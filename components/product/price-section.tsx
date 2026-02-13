export function PriceSection() {
  return (
    <div>
      <span className="text-base text-[rgba(0,0,0,0.55)] line-through">
        R$ 339,00
      </span>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <span className="text-[32px] text-[rgba(0,0,0,0.9)]">R$ 98,90</span>
        <span className="rounded-sm bg-[rgba(0,166,80,0.1)] px-1.5 py-0.5 text-base font-semibold text-[#00a650]">
          71% OFF
        </span>
      </div>
      <span className="mt-1 block text-base text-[#00a650]">
        {"em ate 12x de R$ 32,97 sem juros"}
      </span>
      <div className="mt-2 inline-block rounded-sm bg-[rgba(0,166,80,0.1)] px-2 py-1">
        <span className="text-[13px] font-semibold text-[#00a650]">
          5% OFF no Pix
        </span>
      </div>
    </div>
  )
}
