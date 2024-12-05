import { HotelOverview } from "./components/hotel-overview/hotel-overview";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.root}>
      <HotelOverview
        image={{
          description: "",
          url: "https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg",
        }}
      />
    </main>
  );
}
