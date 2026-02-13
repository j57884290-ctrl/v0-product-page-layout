interface ProductDescriptionProps {
  description: string
  images: string[]
}

export function ProductDescription({
  description,
  images,
}: ProductDescriptionProps) {
  return (
    <>
      {/* Product photos */}
      <section className="px-4">
        <h2 className="mb-4 text-xl text-[rgba(0,0,0,0.9)]">
          Fotos do produto
        </h2>
        <div className="flex flex-col gap-4">
          {images.slice(0, 6).map((img, i) => (
            <div
              key={i}
              className="max-w-[500px] overflow-hidden rounded-lg bg-[#f5f5f5]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Foto do produto ${i + 1}`}
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="my-10 h-px bg-[rgba(0,0,0,0.1)]" />

      {/* Description */}
      <section className="px-4 pb-8">
        <h2 className="mb-3 text-xl font-semibold text-[rgba(0,0,0,0.9)]">
          Descricao
        </h2>
        <div className="whitespace-pre-line text-base leading-relaxed text-[rgba(0,0,0,0.9)]">
          {description}
        </div>
      </section>
    </>
  )
}
