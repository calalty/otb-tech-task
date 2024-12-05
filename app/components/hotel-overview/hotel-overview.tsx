import Image from "next/image";
import { BookingInfo } from "../booking-info/booking-info";
import { Resort } from "@/app/types/data-types";
import styles from "./hotel-overview.module.css";

export type Image = Resort["image"];

type Props = {
  image: Image;
};

export const HotelOverview = ({ image }: Props) => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        alt={image.description}
        src={image.url}
        width={200}
        height={200}
      />
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
