import ProductDetail from "@/app/components/ProductDetail";
import { ProductType } from "@/entities/ProductType";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params
  const res = await fetch(`${process.env.BASE_URL}/products/${id}`, {
    cache: 'no-store'
  })
  const product: ProductType = await res.json()

  return (
    <ProductDetail product={product} />
  )
}