import { ICat } from "../interface/cat.interface";
import { Cat } from "../model/cat.model";

const createCat = async (catData: ICat) => {
  const result = await Cat.create(catData);
  return result;
};

export const CatServices = { createCat };
