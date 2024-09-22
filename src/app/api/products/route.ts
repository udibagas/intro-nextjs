import { ProductModel } from "./../../models/ProductModel";

export async function GET() {
  const products = await ProductModel.findAll();
  return Response.json(products);
}
