import { CreditCard } from "lucide-react"

export function PaymentMethods() {
  return (
    <section className="px-4">
      <h2 className="mb-5 text-xl text-[rgba(0,0,0,0.9)]">
        Meios de pagamento
      </h2>
      <div className="flex items-center rounded bg-[#00a650] px-5 py-3">
        <CreditCard className="mr-2.5 h-5 w-5 text-[#fff]" />
        <span className="text-sm text-[#fff]">
          Pague em <strong>ate 18X sem juros!</strong>
        </span>
      </div>
      <span className="mt-6 block text-base text-[rgba(0,0,0,0.9)]">
        Ate 12x sem cartao de credito!
      </span>
      <span className="mt-6 block text-base text-[rgba(0,0,0,0.9)]">
        Cartoes de credito
      </span>
      <span className="mt-6 block text-base text-[rgba(0,0,0,0.9)]">
        {"Pix — Aprovacao imediata."}
      </span>
    </section>
  )
}
