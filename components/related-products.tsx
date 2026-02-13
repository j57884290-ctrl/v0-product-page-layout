interface RelatedProduct {
  name: string
  price: string
  image: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
  title: string
  background?: string
}

export function RelatedProducts({
  products,
  title,
  background = "transparent",
}: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section
      className="py-6"
      style={{ backgroundColor: background }}
    >
      <h2 className="mb-2.5 px-4 text-xl font-normal text-[rgba(0,0,0,0.9)]">
        {title}
      </h2>
      <div className="scrollbar-hide flex gap-2.5 overflow-x-auto px-4 pb-2.5">
        {products.map((product, i) => (
          <a
            key={i}
            href="#"
            className="block w-[140px] flex-shrink-0 no-underline"
          >
            <div className="h-[140px] w-[140px] overflow-hidden rounded-lg bg-[#f5f5f5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-1.5 text-[13px] leading-snug text-[rgba(0,0,0,0.9)]">
              {product.name}
            </p>
            <p className="text-lg font-bold text-[rgba(0,0,0,0.9)]">{product.price}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
