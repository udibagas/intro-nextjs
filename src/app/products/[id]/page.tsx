import ProductDetail from "@/app/components/ProductDetail";
import { ProductType } from "@/entities/ProductType";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product: ProductType = await res.json()

  return (
    <ProductDetail product={product} />
  )
}