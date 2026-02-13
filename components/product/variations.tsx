"use client"

import { useState } from "react"

const colors = [
  {
    name: "Preto",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_625586-MLB89120136275_082025-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  },
  {
    name: "Vermelho",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_790803-MLB88656792494_072025-F-capacete-asx-city-arrow-brilho-preto-grafite-vermelho.webp",
  },
]

const sizes = ["54", "56", "58", "60", "62", "64"]

export function Variations() {
  const [selectedColor, setSelectedColor] = useState("Preto")
  const [selectedSize, setSelectedSize] = useState("54")

  return (
    <div className="flex flex-col gap-5">
      {/* Cor */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-sm text-[rgba(0,0,0,0.9)]">
          <span>Cor:</span>
          <strong>{selectedColor}</strong>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`flex max-w-[80px] flex-col items-center gap-1.5 rounded-md border p-1.5 transition-colors ${
                selectedColor === c.name
                  ? "border-[#3483fa]"
                  : "border-[#c4c4c4] hover:border-[#3483fa]"
              }`}
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-16 w-16 object-cover"
              />
              <span className="truncate text-xs">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tamanho */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-sm text-[rgba(0,0,0,0.9)]">
          <span>Tamanho:</span>
          <strong>{selectedSize}</strong>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`rounded-md border px-3 py-1.5 text-base transition-colors ${
                selectedSize === s
                  ? "border-[#3483fa] text-[rgba(0,0,0,0.9)]"
                  : "border-[#c4c4c4] text-[rgba(0,0,0,0.9)] hover:border-[#3483fa]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
