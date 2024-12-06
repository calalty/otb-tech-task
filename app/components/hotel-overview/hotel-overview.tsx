"use client";

import Image from "next/image";
import { BookingInfo } from "../booking-info/booking-info";
import { DataTypes, Resort } from "@/app/types/data-types";
import styles from "./hotel-overview.module.css";
import { ReadMoreLess } from "../read-more-less/read-more-less";
import { useId, useState } from "react";

export type Image = Resort["image"];
export type Overview = Resort["overview"];

type Props = {
  result: DataTypes;
};

export const HotelOverview = ({ result }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const {
    bookingDetails: { lengthOfStay, party, price },
    flightDetails: { departureAirport, departureDate },
    resort: { image, countryName, name, overview, regionName, starRating },
  } = result;

  const headingId = useId();

  return (
    <article aria-labelledby={headingId} className={styles.root}>
      <div className={styles.wrapper}>
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
          headingId={headingId}
          bookingDetails={{
            lengthOfStay,
            party,
            price,
          }}
          flightDetails={{
            departureAirport,
            departureDate: new Date(departureDate),
          }}
          resort={{ countryName, name, regionName, starRating }}
        />
      </div>
      {isExpanded && (
        <div className={styles.overview}>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      )}
    </article>
  );
};
