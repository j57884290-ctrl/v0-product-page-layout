const products = [
  {
    name: "Capacete Asx City Arrow Brilho Preto Grafite Vermelho",
    price: "R$ 98,90",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_790803-MLB88656792494_072025-F-capacete-asx-city-arrow-brilho-preto-grafite-vermelho.webp",
  },
]

export function RelatedProducts({
  title,
  bgColor = "bg-transparent",
}: {
  title: string
  bgColor?: string
}) {
  return (
    <section className={`py-6 ${bgColor}`}>
      <h2 className="mb-2.5 text-xl font-normal text-[rgba(0,0,0,0.9)]">
        {title}
      </h2>
      <div className="flex gap-2.5 overflow-x-auto pb-2.5">
        {products.map((p, i) => (
          <a
            key={i}
            href="#"
            className="flex w-[140px] shrink-0 flex-col no-underline"
          >
            <div className="h-[140px] w-[140px] overflow-hidden rounded-lg bg-[#f5f5f5]">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="mt-1.5 text-[13px] leading-tight text-[rgba(0,0,0,0.9)]">
              {p.name}
            </span>
            <span className="text-lg font-bold text-[rgba(0,0,0,0.9)]">
              {p.price}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
