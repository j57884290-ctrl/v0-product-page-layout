import { Award, ThumbsUp, Truck } from "lucide-react"

const reputationBars = [
  { color: "bg-[#fff0f0]", height: "h-2" },
  { color: "bg-[#fff5e8]", height: "h-2" },
  { color: "bg-[#fffcda]", height: "h-2" },
  { color: "bg-[#f1fdd7]", height: "h-2" },
  { color: "bg-[#39b54a]", height: "h-3" },
]

export function SellerInfo() {
  return (
    <section>
      <h2 className="mb-5 text-xl text-[rgba(0,0,0,0.9)]">
        Informacoes da loja
      </h2>

      {/* Seller identity */}
      <div className="flex items-center">
        <div className="mr-2.5 h-11 w-11 rounded bg-[#f5f5f5]" />
        <div>
          <span className="block text-sm text-[rgba(0,0,0,0.9)]">
            Loja oficial
          </span>
          <span className="block text-sm text-[rgba(0,0,0,0.55)]">
            Loja oficial
          </span>
        </div>
      </div>

      {/* MercadoLider */}
      <div className="mt-5 flex items-start gap-2.5">
        <Award className="mt-1 h-4 w-4 shrink-0 text-[#00a650]" />
        <div>
          <span className="block text-base font-semibold text-[#00a650]">
            MercadoLider Platinum
          </span>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            {"E um dos melhores do site!"}
          </span>
        </div>
      </div>

      {/* Reputation bar */}
      <div className="mt-5 flex items-center gap-1">
        {reputationBars.map((bar, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${bar.color} ${bar.height}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-5 flex items-center">
        <div className="w-1/3 text-center">
          <span className="block text-base font-semibold text-[rgba(0,0,0,0.9)]">
            +1M de vendas
          </span>
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            {"Venda nos ultimos 365 dias"}
          </span>
        </div>
        <div className="mx-auto h-[52px] w-px bg-[rgba(0,0,0,0.15)]" />
        <div className="flex w-1/3 flex-col items-center text-center">
          <ThumbsUp className="mb-1 h-5 w-5 text-[#00a650]" />
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            Presta bom atendimento
          </span>
        </div>
        <div className="mx-auto h-[52px] w-px bg-[rgba(0,0,0,0.15)]" />
        <div className="flex w-1/3 flex-col items-center text-center">
          <Truck className="mb-1 h-5 w-5 text-[#00a650]" />
          <span className="block text-xs text-[rgba(0,0,0,0.9)]">
            Entrega os produtos dentro do prazo
          </span>
        </div>
      </div>

      <button className="mt-6 flex h-12 w-full items-center rounded-md border border-[rgba(0,0,0,0.1)] px-4 transition-colors hover:bg-[#f5f5f5]">
        <span className="text-sm text-[#3483fa]">
          Ver mais dados de Loja oficial
        </span>
        <svg
          className="ml-auto h-5 w-5 text-[#3483fa]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  )
}
