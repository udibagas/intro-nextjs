import { UserModel } from "@/app/models/UserModel";
import { NextResponse } from "next/server";
import { schema } from "./schema";
import { ValidationError } from "@/app/errors/ValidationError";

export async function POST(request: Request, response: NextResponse) {
  const body = await request.json();

  try {
    const validation = schema.safeParse(body);

    if (validation.error) {
      throw new ValidationError(validation.error.issues.map((i) => i.message));
    }

    const user = await UserModel.create(validation.data);

    return Response.json(user, {
      status: 201,
    });
  } catch (error: any) {
    console.log(error);
    return Response.json(error, {
      status: error.status || 500,
    });
  }
}
