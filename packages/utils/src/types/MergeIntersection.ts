/**
 * Helper type to merge intersected objects
 */
export type MergeIntersection<T> = T extends object
  ? { [K in keyof T]: T[K] extends object ? MergeIntersection<T[K]> : T[K] }
  : T;
