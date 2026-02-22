import { calcSum, SumValidationError } from "./sum.core";

type Pair = {
  a: number;
  b: number;
};

const makePair = (a: number, b: number): Pair => ({ a, b });

describe("calc_sum", () => {
  it("domain__standard_numbers__returns_sum", () => {
    const pair = makePair(2, 3);

    const result = calcSum(pair.a, pair.b);

    expect(result).toBe(5);
  });

  it("boundary__zero_values__returns_zero", () => {
    const pair = makePair(0, 0);

    const result = calcSum(pair.a, pair.b);

    expect(result).toBe(0);
  });

  it("complement__nan_input__throws_validation_error", () => {
    const pair = makePair(Number.NaN, 1);

    expect(() => calcSum(pair.a, pair.b)).toThrow(SumValidationError);
  });

  it("chaos__string_input__throws_validation_error", () => {
    const pair = makePair("1" as unknown as number, 1);

    expect(() => calcSum(pair.a, pair.b)).toThrow(SumValidationError);
  });

  it("domain__commutative_property__returns_same_value", () => {
    const pair = makePair(7, 4);

    const forward = calcSum(pair.a, pair.b);
    const reverse = calcSum(pair.b, pair.a);

    expect(forward).toBe(reverse);
  });
});
