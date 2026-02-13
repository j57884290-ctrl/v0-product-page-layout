"use client"

import { Truck, RotateCcw, ShieldCheck, Wrench } from "lucide-react"

export function BuySection() {
  return (
    <div className="flex flex-col">
      {/* Frete */}
      <div className="mt-6">
        <span className="block text-base font-semibold text-[#00a650]">
          Frete gratis
        </span>
        <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
          Saiba os prazos de entrega e as formas de envio.
        </span>
      </div>

      {/* Estoque */}
      <span className="mt-6 block text-base font-semibold text-[rgba(0,0,0,0.9)]">
        Estoque disponivel
      </span>

      {/* Quantidade */}
      <div className="mt-6 flex h-[50px] items-center rounded-md bg-[#f5f5f5] px-3">
        <span className="text-base text-[rgba(0,0,0,0.9)]">Quantidade:</span>
        <span className="ml-2.5 font-semibold text-[rgba(0,0,0,0.9)]">1</span>
        <span className="ml-5 text-base text-[rgba(0,0,0,0.25)]">
          disponivel
        </span>
      </div>

      {/* Botoes */}
      <div className="mt-6 flex flex-col gap-2.5">
        <button className="h-12 rounded-md bg-[#3483fa] text-base font-semibold text-[#fff] transition-colors hover:bg-[#2968c8]">
          Comprar agora
        </button>
        <button className="h-12 rounded-md bg-[rgba(65,137,230,0.15)] text-base font-semibold text-[#3483fa] transition-colors hover:bg-[rgba(65,137,230,0.25)]">
          Adicionar ao carrinho
        </button>
      </div>

      {/* Vendedor */}
      <div className="mt-6 flex items-center">
        <div className="mr-2.5 h-11 w-11 rounded bg-[#f5f5f5]" />
        <div>
          <span className="block text-sm text-[rgba(0,0,0,0.9)]">
            Loja oficial{" "}
            <span className="text-[#3483fa]">Loja oficial</span>
          </span>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            +1M de vendas
          </span>
        </div>
      </div>

      {/* Garantias */}
      <div className="mt-5 flex items-start gap-2.5">
        <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#3483fa]" />
        <div>
          <span className="block text-sm text-[#3483fa]">
            {"Devolucao gratis."}
          </span>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            {"Voce tem 7 dias a partir da data de recebimento."}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2.5">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#3483fa]" />
        <div>
          <span className="text-sm text-[#3483fa]">Compra Garantida,</span>{" "}
          <span className="text-sm text-[rgba(0,0,0,0.55)]">
            receba o produto que esta esperando ou devolvemos o dinheiro.
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2.5">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-[rgba(0,0,0,0.55)]" />
        <span className="text-sm text-[rgba(0,0,0,0.55)]">
          12 meses de garantia de fabrica.
        </span>
      </div>
    </div>
  )
}
