import { BookingInfo } from "./components/booking-info/booking-info";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.root}>
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
    </main>
  );
}
