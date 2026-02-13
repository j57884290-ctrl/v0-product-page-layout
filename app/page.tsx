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
    <div className="min-h-screen bg-[#fff]">
      <MlHeader />

      <main className="mx-auto w-full max-w-[500px]">
        {/* Badges row */}
        <div className="flex items-center px-4 pt-4">
          <span className="text-xs text-[rgba(0,0,0,0.55)]">
            {productData.condition}
          </span>
          <span className="ml-auto text-xs text-[rgba(0,0,0,0.55)]">
            {productData.rating.toFixed(1).replace(".", ",")}{" "}
            <span className="text-[#3483fa]">{"★★★★★"}</span>
          </span>
        </div>

        {/* Best seller badge */}
        <div className="flex items-center gap-2 px-4 pt-2.5">
          <span className="rounded bg-[#f73] px-1.5 py-0.5 text-[10px] font-semibold text-[#fff]">
            MAIS VENDIDO
          </span>
          <span className="text-xs text-[#3483fa]">
            {"1º em "}{productData.category}
          </span>
        </div>

        {/* Title */}
        <div className="px-4 pt-2.5">
          <h1 className="text-balance text-base font-normal text-[rgba(0,0,0,0.9)]">
            {productData.title}
          </h1>
        </div>

        {/* Image gallery */}
        <ProductGallery
          images={productData.images}
          title={productData.title}
        />

        {/* Variants */}
        <ProductVariants
          colorVariants={productData.colorVariants}
          sizeVariants={productData.sizeVariants}
        />

        {/* Price section */}
        <ProductPrice
          originalPrice={productData.originalPrice}
          price={productData.price}
          discount={productData.discount}
          installments={productData.installments}
          pixDiscount={productData.pixDiscount}
          freeShipping={productData.freeShipping}
        />

        {/* Separator */}
        <div className="my-10 h-px bg-[rgba(0,0,0,0.1)]" />

        {/* Product details */}
        <ProductDetails characteristics={productData.characteristics} />

        {/* Related Products */}
        <div className="mt-6">
          <RelatedProducts
            products={productData.relatedProducts}
            title="Produtos relacionados"
          />
        </div>

        {/* Characteristics (compact) */}
        <section className="px-4 pb-6">
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

        {/* Separator */}
        <div className="my-4 h-px bg-[rgba(0,0,0,0.1)]" />

        {/* Seller info */}
        <SellerInfo seller={productData.seller} />

        {/* Separator */}
        <div className="my-10 h-px bg-[rgba(0,0,0,0.1)]" />

        {/* Product photos + description */}
        <ProductDescription
          description={productData.description}
          images={productData.images}
        />

        {/* Separator */}
        <div className="my-10 h-px bg-[rgba(0,0,0,0.1)]" />

        {/* Payment methods */}
        <PaymentMethods />

        {/* Separator */}
        <div className="mt-12 border-t-2 border-[rgba(0,0,0,0.12)] pt-8" />

        {/* Reviews */}
        <ProductReviews
          rating={productData.rating}
          ratingCount={productData.ratingCount}
          reviews={productData.reviews}
          reviewPhotos={productData.reviewPhotos}
        />

        {/* Also bought */}
        <div className="mt-6">
          <RelatedProducts
            products={productData.relatedProducts}
            title="Quem viu este produto tambem comprou"
            background="#ededed"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-6">
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
