"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = [
  "https://http2.mlstatic.com/D_NQ_NP_2X_625586-MLB89120136275_082025-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_815799-MLA81175524508_122024-F.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_2X_960309-MLB81090447504_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_760627-MLB81090437254_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_896615-MLB81090122570_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_782881-MLB81357604175_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_916215-MLB81090122574_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_750366-MLB81357332005_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_788331-MLB81357420027_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_679882-MLB81090565226_122024-F-capacete-fechado-asx-city-solid-preto-fosco-viseira-fum.webp",
]

export function ImageGallery() {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [])

  return (
    <>
      {/* Main Gallery */}
      <div className="relative bg-[#f5f5f5] lg:bg-transparent">
        {/* Counter badge */}
        <div className="absolute left-4 top-4 z-10 flex items-center rounded-full border border-[#eee] bg-[#fff] px-2 py-0.5 text-xs font-semibold text-[#333] lg:hidden">
          {current + 1} / {images.length}
        </div>

        {/* Desktop: thumbnails on the left */}
        <div className="hidden lg:flex lg:gap-4">
          <div className="flex w-[64px] shrink-0 flex-col gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[64px] w-[64px] overflow-hidden rounded-md border-2 transition-colors ${
                  current === i
                    ? "border-[#3483fa]"
                    : "border-[#e5e5e5] hover:border-[#3483fa]"
                }`}
              >
                <img
                  src={img}
                  alt={`Imagem ${i + 1}`}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>

          <div
            className="relative flex min-h-[500px] flex-1 cursor-zoom-in items-center justify-center"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={images[current]}
              alt="Capacete ASX City Solid Preto Fosco"
              className="max-h-[500px] max-w-full object-contain"
            />
          </div>
        </div>

        {/* Mobile: swipe carousel */}
        <div className="relative lg:hidden">
          <div
            className="flex min-h-[400px] cursor-zoom-in items-center justify-center"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={images[current]}
              alt="Capacete ASX City Solid Preto Fosco"
              className="max-h-[400px] max-w-full object-contain"
            />
          </div>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#fff]/80 p-1 shadow"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5 text-[#333]" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#fff]/80 p-1 shadow"
            aria-label="Proxima imagem"
          >
            <ChevronRight className="h-5 w-5 text-[#333]" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 py-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === i ? "bg-[#3483fa]" : "bg-[#e5e5e5]"
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000]/90 p-5"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false)
          }}
          role="dialog"
          aria-label="Ampliar imagem"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff] text-[#333]"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#fff]/80 p-2"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6 text-[#333]" />
          </button>
          <img
            src={images[current]}
            alt="Capacete ASX ampliado"
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#fff]/80 p-2"
            aria-label="Proxima imagem"
          >
            <ChevronRight className="h-6 w-6 text-[#333]" />
          </button>
        </div>
      )}
    </>
  )
}
