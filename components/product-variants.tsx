"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ColorVariant {
  name: string
  image: string
  selected: boolean
}

interface ProductVariantsProps {
  colorVariants: ColorVariant[]
  sizeVariants: string[]
}

export function ProductVariants({
  colorVariants,
  sizeVariants,
}: ProductVariantsProps) {
  const [selectedColor, setSelectedColor] = useState(
    colorVariants.findIndex((v) => v.selected) ?? 0
  )
  const [selectedSize, setSelectedSize] = useState(0)

  return (
    <div className="flex flex-col gap-5 px-4 pt-4">
      {/* Color */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-[rgba(0,0,0,0.9)]">Cor:</span>
          <strong className="text-sm text-[rgba(0,0,0,0.9)]">
            {colorVariants[selectedColor].name}
          </strong>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {colorVariants.map((variant, i) => (
            <button
              key={variant.name}
              onClick={() => setSelectedColor(i)}
              className={cn(
                "flex w-20 flex-col items-center gap-1.5 rounded-md border p-1.5",
                i === selectedColor
                  ? "border-[#3483fa]"
                  : "border-[#c4c4c4] hover:border-[#3483fa]"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={variant.image}
                alt={variant.name}
                className="h-16 w-16 object-cover"
              />
              <span className="truncate text-xs text-[rgba(0,0,0,0.9)]">
                {variant.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-[rgba(0,0,0,0.9)]">Tamanho:</span>
          <strong className="text-sm text-[rgba(0,0,0,0.9)]">
            {sizeVariants[selectedSize]}
          </strong>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {sizeVariants.map((size, i) => (
            <button
              key={size}
              onClick={() => setSelectedSize(i)}
              className={cn(
                "flex w-14 items-center justify-center rounded-md border px-2.5 py-1.5 text-base",
                i === selectedSize
                  ? "border-[#3483fa] text-[rgba(0,0,0,0.9)]"
                  : "border-[#c4c4c4] text-[rgba(0,0,0,0.9)] hover:border-[#3483fa]"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
