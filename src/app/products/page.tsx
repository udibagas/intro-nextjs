import { ProductType } from "@/entities/ProductType";
import ProductCard from "../components/ProductCard";

export default async function Products() {

  const res = await fetch(`${process.env.BASE_URL}/api/products`, {
    cache: 'no-store'
  })

  if (!res.ok) return (
    <div>Error while fetching data</div>
  )

  const products: ProductType[] = await res.json()

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map(el => {
        return <ProductCard product={el} key={el._id.toString()} />
      })}
    </div>
  )
}