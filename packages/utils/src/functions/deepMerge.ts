import { deepClone } from "./deepClone";
import { isPlainObject } from "./isPlainObject";
import type { PlainObject } from "../types/PlainObject";

/**
 * Deep merge two objects
 * @template T - The type of the target object
 * @template S - The type of the source object
 * @param target - The target object
 * @param source - The source object
 * @returns The merged object
 */
export function deepMerge<T extends PlainObject, S extends PlainObject>(
  target: T,
  source: S
): T & S {
  const output = { ...target } as PlainObject;

  if (isPlainObject(target) && isPlainObject(source)) {
    for (const key of Object.keys(source)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        isPlainObject(sourceValue) &&
        key in target &&
        isPlainObject(targetValue)
      ) {
        output[key] = deepMerge(targetValue, sourceValue);
      } else {
        output[key] = deepClone(sourceValue);
      }
    }
  }

  return output as T & S;
}
