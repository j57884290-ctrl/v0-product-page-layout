"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
  title: string
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + images.length) % images.length)
    },
    [images.length]
  )

  return (
    <>
      <div className="relative">
        {/* Counter */}
        <div className="absolute left-4 top-4 z-10 flex items-center rounded-full border border-[#eee] bg-[#fff] px-2 py-0.5 text-xs font-semibold text-[#333]">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Image */}
        <div className="flex min-h-[400px] items-center justify-center">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="cursor-zoom-in border-none bg-transparent p-0"
            aria-label="Ampliar imagem"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[currentIndex]}
              alt={title}
              className="max-h-[400px] max-w-full object-contain"
            />
          </button>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff] text-[#333] shadow-md"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff] text-[#333] shadow-md"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#3483fa]" : "bg-[#e5e5e5]"
              }`}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.92)] p-5"
          role="dialog"
          aria-label="Ampliar imagem"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false)
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxOpen(false)
            if (e.key === "ArrowLeft") goTo(currentIndex - 1)
            if (e.key === "ArrowRight") goTo(currentIndex + 1)
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff] text-[#333]"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => goTo(currentIndex - 1)}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff]/80 text-[#333]"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff]/80 text-[#333]"
                aria-label="Proxima imagem"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentIndex]}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  )
}
