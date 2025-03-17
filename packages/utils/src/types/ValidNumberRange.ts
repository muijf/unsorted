import type { NumberRange } from "./NumberRange";
import type { NumericKeysOf } from "./NumericKeysOf";

/**
 * Helper type to get the range of existing numeric keys in an object
 */
export type ValidNumberRange<
  T,
  Min extends number,
  Max extends number,
> = Extract<NumericKeysOf<T>, NumberRange<Min, Max>>;
