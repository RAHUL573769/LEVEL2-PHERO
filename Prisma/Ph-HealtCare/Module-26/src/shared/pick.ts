export const pickFunction = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  obj: T,
  keys: K[]
) => {
  // console.log("From Line Number 5", obj, keys);
  const finalObj: Partial<T> = {}; //creating an object
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};
