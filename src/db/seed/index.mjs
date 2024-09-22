/* eslint-disable @typescript-eslint/no-unused-vars */
import database from "../config/index.js";
import data from "../../data/products.json";

(async () => {
  try {
    await database.collection("products").insertMany(data);
  } catch (error) {
    console.log(error.message);
  }
})();
