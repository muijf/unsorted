import type { PlainObject } from "../types/PlainObject";

/**
 * Type guard to check if a value is a plain object
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 */
export function isPlainObject(value: unknown): value is PlainObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
