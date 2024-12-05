import styles from "./read-more-less.module.css";

type Props = {
  setIsExpanded: (value: boolean) => void;
  isExpanded: boolean;
  additionalClassName?: string;
};

export const ReadMoreLess = ({
  isExpanded,
  setIsExpanded,
  additionalClassName,
}: Props) => {
  return (
    <button
      className={`${styles.root} ${additionalClassName}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <span>
        <b>Read {isExpanded ? "less" : "more"}</b> about this hotel
      </span>
      <span>{isExpanded ? "⇩" : "⇨"}</span>
    </button>
  );
};
