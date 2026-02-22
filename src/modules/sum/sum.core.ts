export class SumValidationError extends Error {
  /**
   * Creates a validation error for invalid sum inputs.
   */
  constructor(message: string) {
    super(message);
    this.name = "SumValidationError";
  }
}

/**
 * Calculates the sum of two finite numbers.
 */
export function calcSum(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new SumValidationError("sum requires finite numbers");
  }

  return a + b;
}
