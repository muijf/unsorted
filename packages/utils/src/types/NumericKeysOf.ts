/**
 * Helper type to get all numeric keys from an object
 */
export type NumericKeysOf<T> = Extract<keyof T, number>;
