import { database } from "@/db/config";
import { compareSync, hashSync } from "bcrypt";
import { ObjectId } from "mongodb";

export interface UserType {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}

export type Credential = {
  email: string;
  password: string;
};

export class UserModel {
  static {
    database.collection("users").createIndex({ email: 1 }, { unique: true });
  }

  static collection() {
    return database.collection<UserType>("users");
  }

  static findById(_id: ObjectId) {
    return this.collection().findOne(
      { _id },
      {
        projection: {
          password: 0,
        },
      }
    );
  }

  static async create(payload: UserType) {
    payload.password = hashSync(payload.password, 10);
    try {
      const res = await this.collection().insertOne(payload);
      return this.findById(res.insertedId);
    } catch (error: any) {
      if (error.code == 11000) {
        throw new Error("Email has been taken");
      }

      throw error;
    }
  }

  static async verify(credential: Credential) {
    const { email, password } = credential;
    const user = await this.collection().findOne({ email });
    if (!user) return false;
    if (!compareSync(password, user.password)) return false;
    return user;
  }
}
