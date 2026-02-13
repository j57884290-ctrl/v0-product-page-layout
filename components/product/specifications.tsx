const specs = [
  { label: "Marca", value: "ASX" },
  { label: "Linha", value: "City" },
  { label: "Modelo", value: "City Solid" },
  { label: "Modelo detalhado", value: "Capacete Fechado" },
  { label: "Posicoes da ventilacao", value: "Inferior, Superior" },
  { label: "Tipo de fechamento", value: "Micrometrico" },
  { label: "E desmontavel", value: "Sim" },
  {
    label: "Materiais do interior",
    value:
      "Eps canaletado de dupla densidade, Espuma de multiplas densidades, Tecido removivel e hipoalergenico",
  },
  { label: "Materiais do exterior", value: "Resina termoplastica abs" },
  { label: "Tipo de viseira", value: "Simples" },
  { label: "Materiais da viseira", value: "Policarbonato" },
  { label: "Espessura da viseira", value: "2 mm" },
  { label: "Com viseira de protecao UV", value: "Sim" },
  { label: "Com viseira resistente a riscos", value: "Sim" },
  { label: "Com viseira preparada para Pinlock", value: "Nao" },
  { label: "Com forro respiravel", value: "Sim" },
  { label: "E um produto hipoalergenico", value: "Sim" },
  { label: "Cor", value: "Preto" },
  { label: "Desenho", value: "Liso" },
  { label: "Acabamento", value: "Fosco" },
  { label: "Tamanho do capacete", value: "L" },
  { label: "Tipo de capacete", value: "Integral" },
  { label: "Tamanho da circunferencia da cabeca", value: "60 cm" },
  { label: "Estilo de conducao em moto", value: "Esportivo" },
  { label: "Idade", value: "Adultos" },
  { label: "Normas de seguranca", value: "Certificado pelo Inmetro" },
]

export function Specifications() {
  return (
    <section>
      <h2 className="mb-3 text-lg text-[rgba(0,0,0,0.9)]">
        Detalhes do produto
      </h2>
      <h3 className="mb-2 text-sm font-semibold text-[#333]">
        Caracteristicas
      </h3>
      <div className="flex flex-col">
        {specs.map((spec, i) => (
          <div
            key={i}
            className={`flex border-b border-[#eee] py-2.5 ${
              i % 2 === 0 ? "bg-[#fafafa]" : "bg-[#fff]"
            }`}
          >
            <span className="w-[40%] px-2 text-sm text-[rgba(0,0,0,0.55)]">
              {spec.label}
            </span>
            <span className="w-[60%] px-2 text-sm text-[rgba(0,0,0,0.9)]">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
