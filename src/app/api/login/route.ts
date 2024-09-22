import { UnauthenticatedError } from "@/app/errors/UnauthenticatedError";
import { UserModel } from "@/app/models/UserModel";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    const user = await UserModel.verify({ email, password });
    if (!user) throw new UnauthenticatedError("Invalid username or password");
    const token = sign(user, process.env.JWT_SECRET as string);
    cookies().set("Authorization", `Bearer ${token}`);
    return Response.json({ token }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json(error, { status: error.status || 500 });
  }
}
