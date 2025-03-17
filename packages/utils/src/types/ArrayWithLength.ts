/**
 * Helper type to build an array of a specific length
 * This is a more generic approach that works for any number
 */
export type ArrayWithLength<
  N extends number,
  Acc extends unknown[] = [],
> = Acc["length"] extends N ? Acc : ArrayWithLength<N, [...Acc, unknown]>;
