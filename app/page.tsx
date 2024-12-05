import { Button } from "./components/button/button";
import { StarIcon } from "./components/star-icon/star-icon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.root}>
      <Button price={{ amount: 1000, currency: "GBP" }} />
      <StarIcon />
    </main>
  );
}
