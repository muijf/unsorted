/**
 * Helper type to determine if a value is an object (excluding arrays and null)
 */
export type IsObject<T> = T extends object
  ? T extends any[]
    ? false
    : true
  : false;
