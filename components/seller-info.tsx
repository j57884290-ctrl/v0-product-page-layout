import { Award, ThumbsUp, Clock, ChevronRight } from "lucide-react"

interface SellerInfoProps {
  seller: {
    name: string
    sales: string
    level: string
  }
}

export function SellerInfo({ seller }: SellerInfoProps) {
  return (
    <section className="px-4">
      <h2 className="mb-5 text-xl text-[rgba(0,0,0,0.9)]">
        Informacoes da loja
      </h2>

      {/* Seller avatar + name */}
      <div className="flex items-center">
        <div className="mr-3 flex h-11 w-11 items-center justify-center rounded bg-[#f5f5f5]">
          <span className="text-sm font-bold text-[#333]">ML</span>
        </div>
        <div>
          <span className="block text-sm text-[rgba(0,0,0,0.9)]">
            {seller.name}
          </span>
          <span className="block text-sm text-[rgba(0,0,0,0.55)]">
            Loja oficial
          </span>
        </div>
      </div>

      {/* Level */}
      <div className="mt-5 flex items-start">
        <Award className="mr-2.5 mt-1 h-4 w-4 shrink-0 text-[#00a650]" />
        <div>
          <span className="block text-base font-semibold text-[#00a650]">
            {seller.level}
          </span>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            {"E um dos melhores do site!"}
          </span>
        </div>
      </div>

      {/* Reputation bar */}
      <div className="my-5 flex items-center gap-1.5">
        <div className="h-2 flex-1 rounded-sm bg-[#fff0f0]" />
        <div className="h-2 flex-1 rounded-sm bg-[#fff5e8]" />
        <div className="h-2 flex-1 rounded-sm bg-[#fffcda]" />
        <div className="h-2 flex-1 rounded-sm bg-[#f1fdd7]" />
        <div className="h-3 flex-1 rounded-sm bg-[#39b54a]" />
      </div>

      {/* Stats */}
      <div className="flex items-center">
        <div className="w-1/3 text-center">
          <span className="block text-base font-semibold text-[rgba(0,0,0,0.9)]">
            {seller.sales}
          </span>
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            Vendas nos ultimos 365 dias
          </span>
        </div>
        <div className="mx-auto h-12 w-px bg-[rgba(0,0,0,0.15)]" />
        <div className="flex w-1/3 flex-col items-center text-center">
          <ThumbsUp className="mb-1 h-5 w-5 text-[#00a650]" />
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            Presta bom atendimento
          </span>
        </div>
        <div className="mx-auto h-12 w-px bg-[rgba(0,0,0,0.15)]" />
        <div className="flex w-1/3 flex-col items-center text-center">
          <Clock className="mb-1 h-5 w-5 text-[#00a650]" />
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            Entrega dentro do prazo
          </span>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-6 flex h-12 w-full items-center rounded-md border border-[rgba(0,0,0,0.1)] px-4">
        <span className="text-sm text-[#3483fa]">
          Ver mais dados de {seller.name}
        </span>
        <ChevronRight className="ml-auto h-5 w-5 text-[#3483fa]" />
      </button>
    </section>
  )
}
