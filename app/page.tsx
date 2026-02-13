import { MlHeader } from "@/components/ml-header"
import { ProductGallery } from "@/components/product-gallery"
import { ProductVariants } from "@/components/product-variants"
import { ProductPrice } from "@/components/product-price"
import { ProductDetails } from "@/components/product-details"
import { ProductDescription } from "@/components/product-description"
import { SellerInfo } from "@/components/seller-info"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { PaymentMethods } from "@/components/payment-methods"
import { productData } from "@/lib/product-data"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#ededed]">
      <MlHeader />

      <main className="mx-auto w-full max-w-[1200px] lg:px-4 lg:py-4">
        {/* ===== MAIN CARD ===== */}
        <div className="bg-[#fff] lg:rounded-lg lg:p-6">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* ===== LEFT COLUMN: Gallery + Info ===== */}
            <div className="flex-1 lg:max-w-[65%]">
              {/* Badges row */}
              <div className="flex items-center px-4 pt-4 lg:px-0 lg:pt-0">
                <span className="text-xs text-[rgba(0,0,0,0.55)]">
                  {productData.condition}
                </span>
                <span className="ml-auto text-xs text-[rgba(0,0,0,0.55)]">
                  {productData.rating.toFixed(1).replace(".", ",")}{" "}
                  <span className="text-[#3483fa]">{"★★★★★"}</span>
                </span>
              </div>

              {/* Best seller badge */}
              <div className="flex items-center gap-2 px-4 pt-2.5 lg:px-0">
                <span className="rounded bg-[#f73] px-1.5 py-0.5 text-[10px] font-semibold text-[#fff]">
                  MAIS VENDIDO
                </span>
                <span className="text-xs text-[#3483fa]">
                  {"1\u00ba em "}
                  {productData.category}
                </span>
              </div>

              {/* Title */}
              <div className="px-4 pt-2.5 lg:px-0">
                <h1 className="text-balance text-base font-normal text-[rgba(0,0,0,0.9)] lg:text-xl">
                  {productData.title}
                </h1>
              </div>

              {/* Image gallery */}
              <ProductGallery
                images={productData.images}
                title={productData.title}
              />

              {/* Mobile only: variants + price below gallery */}
              <div className="lg:hidden">
                <ProductVariants
                  colorVariants={productData.colorVariants}
                  sizeVariants={productData.sizeVariants}
                />
                <ProductPrice
                  originalPrice={productData.originalPrice}
                  price={productData.price}
                  discount={productData.discount}
                  installments={productData.installments}
                  pixDiscount={productData.pixDiscount}
                  freeShipping={productData.freeShipping}
                />
              </div>
            </div>

            {/* ===== RIGHT COLUMN: Buy box (desktop only) ===== */}
            <div className="hidden lg:block lg:w-[35%]">
              <div className="sticky top-[60px] overflow-y-auto rounded-lg border border-[rgba(0,0,0,0.1)] p-5">
                <ProductVariants
                  colorVariants={productData.colorVariants}
                  sizeVariants={productData.sizeVariants}
                />
                <ProductPrice
                  originalPrice={productData.originalPrice}
                  price={productData.price}
                  discount={productData.discount}
                  installments={productData.installments}
                  pixDiscount={productData.pixDiscount}
                  freeShipping={productData.freeShipping}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== DETAILS CARD ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <ProductDetails characteristics={productData.characteristics} />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== RELATED PRODUCTS ===== */}
        <div className="bg-[#fff] lg:rounded-lg">
          <RelatedProducts
            products={productData.relatedProducts}
            title="Produtos relacionados"
          />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== CHARACTERISTICS (compact) ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <section className="px-4">
            <h2 className="mb-5 text-xl text-[rgba(0,0,0,0.9)]">
              Caracteristicas do produto
            </h2>
            <div>
              {productData.characteristics.slice(0, 10).map((item) => (
                <div
                  key={item.label + "-short"}
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
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== SELLER INFO ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <SellerInfo seller={productData.seller} />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== PRODUCT PHOTOS + DESCRIPTION ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <ProductDescription
            description={productData.description}
            images={productData.images}
          />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== PAYMENT METHODS ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <PaymentMethods />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== REVIEWS ===== */}
        <div className="bg-[#fff] py-6 lg:rounded-lg lg:p-6">
          <ProductReviews
            rating={productData.rating}
            ratingCount={productData.ratingCount}
            reviews={productData.reviews}
            reviewPhotos={productData.reviewPhotos}
          />
        </div>

        <div className="h-2 bg-[#ededed] lg:h-4" />

        {/* ===== ALSO BOUGHT ===== */}
        <div className="bg-[#ededed] lg:rounded-lg">
          <RelatedProducts
            products={productData.relatedProducts}
            title="Quem viu este produto tambem comprou"
            background="#ededed"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-[1200px] bg-[#fff] px-4 py-6 lg:mt-4 lg:rounded-lg">
        <span className="block text-xs text-[#333]">
          {"Termos e condicoes | Como cuidamos da sua privacidade | Acessibilidade"}
        </span>
        <span className="mt-2 block text-xs text-[#888]">
          CNPJ: 00.000.000/0001-00
        </span>
      </footer>
    </div>
  )
}
