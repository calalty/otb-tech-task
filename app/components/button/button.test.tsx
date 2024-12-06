import React from "react";
import { render, screen } from "@testing-library/react";
import { formatPrice } from "@/app/utils/format-price/format-price";
import { Button } from "./button";

jest.mock("@/app/utils/format-price/format-price", () => ({
  formatPrice: jest.fn(),
}));

const mockAmount = 100;
const mockCurrency = "GBP";
const formattedPrice = "£100.00";

describe("Button", () => {
  it("renders the button with the correct price and text", () => {
    (formatPrice as jest.Mock).mockReturnValue(formattedPrice);

    render(<Button price={{ amount: mockAmount, currency: mockCurrency }} />);

    expect(
      screen.getByRole("button", { name: `Book now ${formattedPrice}` })
    ).toBeInTheDocument();

    expect(formatPrice).toHaveBeenCalledWith(mockAmount, mockCurrency);
  });
});
