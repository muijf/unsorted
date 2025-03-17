import type { ArrayWithLength } from "./ArrayWithLength";

/**
 * Helper type to compare two numbers (A < B)
 * Ensures strict less than (not equal)
 */
export type LessThan<A extends number, B extends number> = A extends B
  ? false // If A equals B, then A is not less than B
  : [...Array<unknown>]["length"] extends A
    ? B extends 0
      ? false // If A is 0 and B is 0, then A is not less than B
      : true // If A is 0 and B is not 0, then A < B
    : [...Array<unknown>]["length"] extends B
      ? false // If B is 0 and A is not 0, then A is not less than B
      : number extends A
        ? true // If A is a generic number, assume A < B
        : number extends B
          ? false // If B is a generic number but A isn't, assume A is not less than B
          : ArrayWithLength<A> extends [...infer R, unknown]
            ? ArrayWithLength<B> extends [...any, ...R]
              ? true // If B's array contains A's array plus at least one more element, then A < B
              : false
            : false;
