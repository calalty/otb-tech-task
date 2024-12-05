import { BookingDetails, FlightDetails, Resort } from "@/app/types/data-types";
import styles from "./booking-info.module.css";
import { StarIcon } from "../star-icon/star-icon";
import { Button } from "../button/button";
import { CountedParty } from "../counted-party/counted-party";
import { useId } from "react";
import { formatDate } from "@/app/utils/format-date/format-date";

export type OmittedResort = Pick<
  Resort,
  "name" | "regionName" | "countryName" | "starRating"
>;

export type Props = {
  resort: OmittedResort;
  flightDetails: FlightDetails;
  bookingDetails: BookingDetails;
};

export const BookingInfo = ({
  resort: { name, regionName, countryName, starRating },
  bookingDetails: {
    party: { adults, children, infants },
    lengthOfStay,
    price,
  },
  flightDetails: { departureDate, departureAirport },
}: Props) => {
  const headingId = useId();

  return (
    <article aria-labelledby={headingId} className={styles.root}>
      <h1 id={headingId} className={styles.resort}>
        {name}
      </h1>
      <p className={styles.region}>
        {regionName}, {countryName}
      </p>

      {Array(starRating)
        .fill("")
        .map(() => (
          <StarIcon key={starRating} />
        ))}

      <div className={styles.details}>
        <p>
          <CountedParty count={adults} word="Adult" />,{" "}
          <CountedParty count={children} word="child" isIrregularPlural />{" "}
          {infants && (
            <>
              & <CountedParty count={infants} word="infant" />
            </>
          )}
        </p>
        <p>
          <b>{formatDate(departureDate)}</b> for <b>{lengthOfStay} days</b>
        </p>
        <p>
          departing from <b>{departureAirport}</b>
        </p>
      </div>

      <Button price={{ ...price }} />
    </article>
  );
};
