import { DataTypes } from "@/app/types/data-types";
import styles from "./sort-by-button.module.css";
import { useHotelStore } from "@/app/store/use-hotel-store";

type CurrentSort = "alphabetically" | "price" | "star rating" | "default";

type Props = {
  value: CurrentSort;
  results: DataTypes[];
};

export const SortByButton = ({ value, results }: Props) => {
  const { currentSort, setSortResults } = useHotelStore();

  return (
    <button
      onClick={() => setSortResults(results, value)}
      className={`${currentSort === value ? styles.active : ""} ${styles.root}`}
    >
      Sort by <b>{value}</b>
    </button>
  );
};
