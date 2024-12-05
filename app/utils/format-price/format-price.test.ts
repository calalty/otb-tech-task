import { formatPrice } from "./format-price";

const price = 1234.56;

describe("formatPrice", () => {
  it("formats the price correctly for USD", () => {
    const result = formatPrice(price, "USD", "en-US");
    expect(result).toBe("$1,234.56");
  });
  it("formats the price correctly for GBP", () => {
    const result = formatPrice(price, "GBP");
    expect(result).toBe("£1,234.56");
  });
});
