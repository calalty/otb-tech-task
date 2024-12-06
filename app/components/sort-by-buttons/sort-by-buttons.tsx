import { CurrentSort } from "@/app/store/use-hotel-store";
import styles from "./sort-by-buttons.module.css";
import { SortByButton } from "../sort-by-button/sort-by-button";
import { DataTypes } from "@/app/types/data-types";

type Props = {
  results: DataTypes[];
};

export const SortByButtons = ({ results }: Props) => {
  const sortByValues: CurrentSort[] = [
    "alphabetically",
    "price",
    "star rating",
  ];

  return (
    <ul className={styles.root}>
      {sortByValues.map((value) => (
        <li key={value}>
          <SortByButton results={results} value={value} />
        </li>
      ))}
    </ul>
  );
};
