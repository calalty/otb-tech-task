import { create, StateCreator } from "zustand";
import { DataTypes } from "../types/data-types";

export type CurrentSort =
  | "alphabetically"
  | "price"
  | "star rating"
  | "default";

export type InitialHotelStoreState = {
  results: DataTypes[] | null;
  currentSort: CurrentSort;
};

export type UseHotelStoreState = InitialHotelStoreState & {
  setSortResults: (results: DataTypes[], currentSort: CurrentSort) => void;
};

const initialState: InitialHotelStoreState = {
  currentSort: "default",
  results: null,
};

const hotelStore: StateCreator<UseHotelStoreState> = (set) => ({
  ...initialState,
  setSortResults: (results: DataTypes[], currentSort: CurrentSort) =>
    set(() => {
      let sortedResults: DataTypes[] = [];

      const sortAlphabetically = [...results].sort((a, b) =>
        a.resort.name.localeCompare(b.resort.name)
      );

      const sortByPrice = [...results].sort(
        (a, b) => a.bookingDetails.price.amount - b.bookingDetails.price.amount
      );

      const sortByStarRating = [...results].sort(
        (a, b) => b.resort.starRating - a.resort.starRating
      );

      switch (currentSort) {
        case "default":
          sortedResults = results;
          break;
        case "alphabetically":
          sortedResults = sortAlphabetically;
          break;
        case "price":
          sortedResults = sortByPrice;
          break;
        case "star rating":
          sortedResults = sortByStarRating;
          break;
      }

      return { results: sortedResults, currentSort };
    }),
});

export const useHotelStore = create(hotelStore);
