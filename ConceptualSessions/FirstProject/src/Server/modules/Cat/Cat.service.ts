import { ICat } from "./Cat.interface";
import { Cat } from "./Cat.model";

const addCat = async (catData: ICat) => {
  try {
    console.log("Try Block Hit");
    const result = await Cat.create(catData);

    console.log("Data Added");
    return result;
  } catch (error) {
    console.log(error);
    console.log("Catch Block Hit");
  }
};
export const catServices = {
  addCat
};
