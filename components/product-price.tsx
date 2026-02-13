"use client"

import { Truck, RotateCcw, ShieldCheck, Wrench } from "lucide-react"

interface ProductPriceProps {
  originalPrice: number
  price: number
  discount: number
  installments: string
  pixDiscount: string
  freeShipping: boolean
}

export function ProductPrice({
  originalPrice,
  price,
  discount,
  installments,
  pixDiscount,
  freeShipping,
}: ProductPriceProps) {
  return (
    <div className="px-4 pt-4 lg:px-0">
      {/* Deal badge */}
      <div className="mb-2 inline-flex items-center rounded bg-[#3483fa] px-1.5 py-0.5">
        <span className="text-xs font-semibold text-[#fff]">OFERTA DO DIA</span>
      </div>

      {/* Prices */}
      <div className="mt-4">
        <span className="text-base text-[rgba(0,0,0,0.55)] line-through">
          R$ {originalPrice.toFixed(2).replace(".", ",")}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[32px] text-[rgba(0,0,0,0.9)]">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          <span className="rounded bg-[rgba(0,166,80,0.1)] px-1.5 py-0.5 text-base font-semibold text-[#00a650]">
            {discount}% OFF
          </span>
        </div>
        <span className="block text-base text-[#00a650]">
          {"em ate "}
          {installments}
        </span>
        <div className="mt-2 inline-block rounded bg-[rgba(0,166,80,0.1)] px-2 py-1">
          <span className="text-[13px] font-semibold text-[#00a650]">
            {pixDiscount}
          </span>
        </div>
      </div>

      {/* Shipping */}
      <div className="mt-6">
        {freeShipping && (
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-[#00a650]" />
            <span className="text-base font-semibold text-[#00a650]">
              Frete gratis
            </span>
          </div>
        )}
        <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
          Saiba os prazos de entrega e as formas de envio.
        </span>
      </div>

      {/* Stock */}
      <span className="mt-6 block text-base font-semibold text-[rgba(0,0,0,0.9)]">
        Estoque disponivel
      </span>

      {/* Quantity */}
      <div className="mt-4 flex h-[50px] items-center rounded-md bg-[#f5f5f5] px-3">
        <span className="text-base text-[rgba(0,0,0,0.9)]">Quantidade:</span>
        <span className="ml-2.5 font-semibold text-[rgba(0,0,0,0.9)]">1</span>
        <span className="ml-5 text-base text-[rgba(0,0,0,0.25)]">
          disponivel
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2.5">
        <button className="h-12 rounded-md bg-[#3483fa] text-base font-semibold text-[#fff] transition-colors hover:bg-[#2968c8]">
          Comprar agora
        </button>
        <button className="h-12 rounded-md bg-[rgba(65,137,230,0.15)] text-base font-semibold text-[#3483fa] transition-colors hover:bg-[rgba(65,137,230,0.25)]">
          Adicionar ao carrinho
        </button>
      </div>

      {/* Seller */}
      <div className="mt-6 flex items-center">
        <div className="mr-3 flex h-11 w-11 items-center justify-center rounded bg-[#f5f5f5]">
          <span className="text-sm font-bold text-[#333]">ML</span>
        </div>
        <div>
          <span className="block text-sm text-[rgba(0,0,0,0.9)]">
            Loja oficial{" "}
            <span className="text-[#3483fa]">Loja oficial</span>
          </span>
          <span className="mt-0.5 block text-sm text-[rgba(0,0,0,0.55)]">
            +1M de vendas
          </span>
        </div>
      </div>

      {/* Guarantees */}
      <div className="mt-5 flex items-start gap-2.5">
        <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#3483fa]" />
        <div>
          <span className="block text-sm text-[#3483fa]">
            Devolucao gratis.
          </span>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            Voce tem 7 dias a partir da data de recebimento.
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
