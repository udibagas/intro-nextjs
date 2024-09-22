import { ProductType } from "@/entities/ProductType";
import { database } from "../../db/config";
import { ObjectId } from "mongodb";

export class ProductModel {
  static collection() {
    return database.collection<ProductType>("products");
  }

  static findAll() {
    return this.collection().find().toArray();
  }

  static findById(_id: string | ObjectId) {
    if (typeof _id == "string") _id = new ObjectId(_id);
    return this.collection().findOne({ _id });
  }
}
