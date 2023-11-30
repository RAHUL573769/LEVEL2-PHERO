import { Schema, model } from "mongoose";
import { ICat } from "./Cat.interface";

const catSchema = new Schema<ICat>({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  color: {
    type: String
  },
  secret: {
    type: String,
    required: false
  }
});

export const Cat = model("Cat", catSchema);
