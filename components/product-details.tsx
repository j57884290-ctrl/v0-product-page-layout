interface Characteristic {
  label: string
  value: string
}

interface ProductDetailsProps {
  characteristics: Characteristic[]
}

export function ProductDetails({ characteristics }: ProductDetailsProps) {
  return (
    <section className="px-4">
      <h2 className="mb-3 text-lg text-[rgba(0,0,0,0.9)]">
        Detalhes do produto
      </h2>
      <div>
        <span className="text-sm font-semibold text-[#333]">
          Caracteristicas
        </span>
        {characteristics.map((item) => (
          <div
            key={item.label}
            className="flex border-b border-[#eee] py-2.5"
          >
            <span className="w-2/5 text-sm text-[rgba(0,0,0,0.55)]">
              {item.label}
            </span>
            <span className="w-3/5 text-sm text-[rgba(0,0,0,0.9)]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
