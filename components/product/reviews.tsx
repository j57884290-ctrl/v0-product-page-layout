import { Star } from "lucide-react"

const reviewPhotos = [
  "https://http2.mlstatic.com/D_NQ_NP_2X_612660-MLA82769945467_022025-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_821401-MLA75706379360_042024-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_961530-MLA75162564113_032024-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_737910-MLA76713140031_052024-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_865772-MLA84195160463_042025-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_618873-MLA76090471442_052024-O.webp",
]

const reviews = [
  {
    rating: 5,
    date: "12 Feb 2026",
    text: "Muito lindo uso 58 mas peguei 60, recomendo pegar um maior pq ele eh bem justo e era nisso q eu tava com duvidas, mto lindo.",
  },
  {
    rating: 5,
    date: "12 Feb 2026",
    text: "Excelente produto! alem de confortavel, e estiloso! pra quem quer tirar uma onda, esse e ideal rs. Curti demais, recomendo muito.",
  },
  {
    rating: 5,
    date: "12 Feb 2026",
    text: "Capacete de qualidade incrivel, muito bonito e tambem leve. Muito bom.",
  },
  {
    rating: 5,
    date: "12 Feb 2026",
    text: "O capacete e lindo, eu comprei um numero menor pra ficar mais apertado e lacear com o tempo. Eu recomendo a compra.",
  },
]

const breakdown = [
  { rating: 5, count: 4 },
  { rating: 4, count: 0 },
  { rating: 3, count: 0 },
  { rating: 2, count: 0 },
  { rating: 1, count: 0 },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-[#3483fa] text-[#3483fa]"
              : "fill-[rgba(0,0,0,0.08)] text-[rgba(0,0,0,0.08)]"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="pt-6">
      <h2 className="mb-5 text-[22px] font-semibold text-[rgba(0,0,0,0.9)]">
        Opinioes do produto
      </h2>

      {/* Rating Summary */}
      <div className="flex flex-wrap gap-5">
        <div className="min-w-[120px]">
          <span className="block text-[40px] font-semibold text-[#3483fa]">
            5,0
          </span>
          <div className="mt-1">
            <Stars count={5} />
          </div>
          <span className="mt-1 block text-sm text-[rgba(0,0,0,0.55)]">
            4 avaliacoes
          </span>
        </div>

        <div className="flex min-w-[160px] flex-1 flex-col gap-1">
          {breakdown.map((b) => (
            <div key={b.rating} className="flex items-center gap-2.5">
              <span className="w-3 shrink-0 text-right text-sm text-[rgba(0,0,0,0.55)]">
                {b.rating}
              </span>
              <Star className="h-3.5 w-3.5 shrink-0 fill-[rgba(0,0,0,0.25)] text-[rgba(0,0,0,0.25)]" />
              <div className="h-2 min-w-[60px] flex-1 overflow-hidden rounded-full bg-[rgba(0,0,0,0.08)]">
                <div
                  className="h-full rounded-full bg-[#3483fa] transition-all"
                  style={{
                    width: `${(b.count / 4) * 100}%`,
                  }}
                />
              </div>
              <span className="w-[45px] shrink-0 text-right text-[13px] text-[rgba(0,0,0,0.55)]">
                {b.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Photos */}
      <div className="mt-5">
        <span className="mb-2.5 block text-base">Opinioes com fotos</span>
        <div className="flex gap-2.5 overflow-x-auto pb-2">
          {reviewPhotos.map((p, i) => (
            <div
              key={i}
              className="h-[108px] w-[108px] shrink-0 overflow-hidden rounded-lg bg-[#f5f5f5]"
            >
              <img
                src={p}
                alt={`Foto de avaliacao ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-5 border-t border-[rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-4 pt-4">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="border-b border-[rgba(0,0,0,0.1)] pb-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <Stars count={review.rating} />
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
      </div>
    </section>
  )
}
