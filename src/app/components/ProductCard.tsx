import { ProductType } from "@/entities/ProductType";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";


export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="card bg-base-100 w-56 shadow-xl">
      <figure>
        <img src={product.image} alt={product.title} className="h-40" />
      </figure>
      <div className="card-body flex justify-between">
        <div className="line-clamp-2">{product.title}</div>
        <div className="font-bold">${product.price}</div>
        <div className="mt-2">
          <Link href={`/products/${product.id}`} className="btn btn-primary w-full font-bold">
            <BsCartPlus />
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}