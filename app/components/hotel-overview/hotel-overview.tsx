"use client";

import Image from "next/image";
import { BookingInfo } from "../booking-info/booking-info";
import { Resort } from "@/app/types/data-types";
import styles from "./hotel-overview.module.css";
import { ReadMoreLess } from "../read-more-less/read-more-less";
import { useState } from "react";

export type Image = Resort["image"];

type Props = {
  image: Image;
};

export const HotelOverview = ({ image }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <div className={styles["image-container"]}>
        <Image
          className={styles.image}
          alt={image.description}
          src={image.url}
          width={200}
          height={200}
        />

        <ReadMoreLess
          additionalClassName={styles.accordion}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
      <BookingInfo
        bookingDetails={{
          lengthOfStay: 7,
          party: { adults: 2, children: 2, infants: 1 },
          price: { amount: 126, currency: "GBP" },
        }}
        flightDetails={{
          departureAirport: "Manchester",
          departureDate: new Date("2030-07-03T00:00:00.000Z"),
        }}
        resort={{
          countryName: "Spain",
          regionName: "Asturias",
          name: "El Asturias Villa",
          starRating: 3,
        }}
      />
    </div>
  );
};
