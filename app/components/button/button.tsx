import { Price } from "@/app/types/data-types";
import { formatPrice } from "@/app/utils/format-price/format-price";
import styles from "./button.module.css";

export type Props = {
  price: Price;
};

export const Button = ({ price: { amount, currency } }: Props) => {
  return (
    <button className={styles.button}>
      <span className={styles.name}>Book now</span>
      <span className={styles.price}>{formatPrice(amount, currency)}</span>
    </button>
  );
};
