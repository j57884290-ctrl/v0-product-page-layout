"use client"

import { Star } from "lucide-react"

interface Review {
  rating: number
  date: string
  text: string
}

interface ProductReviewsProps {
  rating: number
  ratingCount: number
  reviews: Review[]
  reviewPhotos: string[]
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <Star
      className={`h-[18px] w-[18px] ${
        filled ? "fill-[#3483fa] text-[#3483fa]" : "fill-[#e5e5e5] text-[#e5e5e5]"
      }`}
    />
  )
}

function RatingBar({
  stars,
  count,
  total,
}: {
  stars: number
  count: number
  total: number
}) {
  const pct = total > 0 ? (count / total) * 100 : 0
  return (
    <div className="flex items-center gap-2.5" style={{ minHeight: 20 }}>
      <span className="w-3 text-right text-sm text-[rgba(0,0,0,0.55)]">
        {stars}
      </span>
      <span className="w-[18px] text-sm text-[rgba(0,0,0,0.25)]" aria-hidden>
        {"★"}
      </span>
      <div className="h-2 min-w-[60px] flex-1 overflow-hidden rounded bg-[rgba(0,0,0,0.08)]">
        <div
          className="h-full rounded bg-[#3483fa] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-[45px] text-right text-[13px] text-[rgba(0,0,0,0.55)]">
        {count}
      </span>
    </div>
  )
}

export function ProductReviews({
  rating,
  ratingCount,
  reviews,
  reviewPhotos,
}: ProductReviewsProps) {
  const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }))

  return (
    <section className="px-4 pt-6">
      <h2 className="mb-5 text-[22px] font-semibold text-[rgba(0,0,0,0.9)]">
        Opinioes do produto
      </h2>

      {/* Summary + breakdown */}
      <div className="flex flex-wrap gap-5">
        <div className="min-w-[120px]">
          <span className="block text-[40px] font-semibold text-[#3483fa]">
            {rating.toFixed(1).replace(".", ",")}
          </span>
          <div className="mt-1 flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <StarIcon key={s} filled={s <= Math.round(rating)} />
            ))}
          </div>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            {ratingCount} avaliacoes
          </span>
        </div>
        <div className="flex min-w-[160px] flex-1 flex-col gap-1">
          {breakdown.map((b) => (
            <RatingBar
              key={b.stars}
              stars={b.stars}
              count={b.count}
              total={ratingCount}
            />
          ))}
        </div>
      </div>

      {/* Review photos */}
      {reviewPhotos.length > 0 && (
        <div className="mt-5">
          <span className="mb-2.5 block text-base">Opinioes com fotos</span>
          <div className="scrollbar-hide flex gap-2.5 overflow-x-auto pb-2">
            {reviewPhotos.map((photo, i) => (
              <div
                key={i}
                className="h-[108px] w-[108px] flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f5]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={`Foto de avaliacao ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="mt-5 h-px bg-[rgba(0,0,0,0.1)]" />

      {/* Reviews list */}
      <div className="mt-4 flex flex-col gap-4">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="border-b border-[rgba(0,0,0,0.1)] pb-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} filled={s <= review.rating} />
                ))}
              </div>
              <span className="text-sm text-[rgba(0,0,0,0.55)]">
                {review.date}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[rgba(0,0,0,0.9)]">
              {review.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
