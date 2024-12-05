import { HotelOverview } from "./components/hotel-overview/hotel-overview";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.root}>
      <HotelOverview
        overview={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione beatae delectus nostrum! Dolorem, laborum quaerat. Omnis debitis veritatis doloremque quidem veniam quibusdam ex saepe placeat vel sequi quaerat, maiores doloribus?"
        }
        image={{
          description: "",
          url: "https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg",
        }}
      />
    </main>
  );
}
