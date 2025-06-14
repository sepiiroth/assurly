import { describe, expect, it } from "vitest";
import { calcTarif } from "./calcTarif";

describe("calcTarif", () => {
  it("calcul un tarif normal pour un CA < 100k", () => {
    expect(calcTarif(50000)).toBe(22);
  });

  it("calcul un tarif majoré pour un CA > 100k", () => {
    expect(calcTarif(150000)).toBe(30);
  });
});
