/**
 * Helper type to generate a range of numbers from Min to Max
 * Only works when Min <= Max
 */
export type NumberRange<
  Min extends number,
  Max extends number,
  Arr extends number[] = [],
> = Min extends Max
  ? Min
  : Max extends Min
    ? Max
    : Min extends Arr["length"]
      ? Min | NumberRange<[...Arr, 1]["length"], Max, [...Arr, 1]>
      : NumberRange<Min, Max, [...Arr, 1]>;
