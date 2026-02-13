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
      {/* ===== DESKTOP: thumbnails on left + main image on right ===== */}
      <div className="hidden lg:flex lg:gap-4 lg:py-4">
        {/* Thumbnail column */}
        <div className="flex w-[64px] shrink-0 flex-col gap-2 overflow-y-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setCurrentIndex(i)}
              onClick={() => setCurrentIndex(i)}
              className={`h-[64px] w-[64px] shrink-0 overflow-hidden rounded border-2 transition-colors ${
                currentIndex === i
                  ? "border-[#3483fa]"
                  : "border-[#e5e5e5] hover:border-[#3483fa]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Miniatura ${i + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div
          className="relative flex flex-1 cursor-zoom-in items-center justify-center"
          onClick={() => setLightboxOpen(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentIndex]}
            alt={title}
            className="max-h-[500px] max-w-full object-contain transition-opacity"
          />
        </div>
      </div>

      {/* ===== MOBILE: carousel with arrows + dots ===== */}
      <div className="relative lg:hidden">
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

      {/* ===== LIGHTBOX ===== */}
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
