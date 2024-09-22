import { ProductType } from "@/entities/ProductType";
import { BsCart4 } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";

export default function ProductDetail({ product }: { product: ProductType }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="min-w-96">
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <div className="flex">
          {
            [...Array(Math.floor(product.rating.rate))].map((el, i) => {
              return <MdStarRate key={i} />
            })
          }

        </div>
        <div className="font-bold">${product.price}</div>

        <p>{product.description}</p>



        <div className="card-actions mt-4">
          <button className="btn btn-primary">
            <BsCart4 /> Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}