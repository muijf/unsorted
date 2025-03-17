import { isPlainObject } from "./isPlainObject";
import type { PlainObject } from "../types/PlainObject";

/**
 * Deep clone a value
 * @template T - The type of value to clone
 * @param value - The value to clone
 * @returns A deep clone of the input value
 */
export function deepClone<T>(value: T): T {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone) as T;
  if (!isPlainObject(value)) return value;

  return Object.entries(value).reduce((acc, [key, val]) => {
    acc[key] = deepClone(val);
    return acc;
  }, {} as PlainObject) as T;
}
