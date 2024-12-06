"use client";

import { useHotelStore } from "@/app/store/use-hotel-store";
import { DataTypes } from "@/app/types/data-types";
import { HotelOverview } from "../hotel-overview/hotel-overview";
import { SortByButtons } from "../sort-by-buttons/sort-by-buttons";
import styles from "./hotel-list.module.css";

type Props = {
  results: DataTypes[];
};

export const HotelList = ({ results }: Props) => {
  const { results: sortedResults } = useHotelStore();

  return (
    <div className={styles.root}>
      <SortByButtons results={results} />
      <ul className={styles.list}>
        {(sortedResults ?? results).map((result) => (
          <li key={result.resort.id}>
            <HotelOverview result={result} />
          </li>
        ))}
      </ul>
    </div>
  );
};
