export const formatPrice = (
  price = 0,
  currencyCode: string,
  locale = "en-GB"
) =>
  price.toLocaleString(locale, {
    style: "currency",
    currency: currencyCode,
  });
