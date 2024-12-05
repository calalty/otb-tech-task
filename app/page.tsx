import { Button } from "./components/button/button";
import { CountedParty } from "./components/counted-party/counted-party";
import { StarIcon } from "./components/star-icon/star-icon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.root}>
      <Button price={{ amount: 1000, currency: "GBP" }} />
      <StarIcon />
      <CountedParty count={1} word="Adult" />
      <CountedParty isIrregularPlural count={2} word="Child" />
      <CountedParty count={2} word="Infant" />
    </main>
  );
}
