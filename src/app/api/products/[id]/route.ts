import { NotfoundError } from "@/app/errors/NotfoundError";
import { ProductModel } from "@/app/models/ProductModel";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const product = await ProductModel.findById(id);
    if (!product) throw new NotfoundError("Product not found");
    return Response.json(product);
  } catch (error: any) {
    console.log(error);
    return Response.json(error, { status: error.status || 500 });
  }
}
