import { HotelList } from "./components/hotel-list/hotel-list";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch(
    "https://static.onthebeach.co.uk/fe-code-test/data.json"
  );

  const results = await res.json();

  return (
    <main className={styles.root}>
      <HotelList results={results} />
    </main>
  );
}
