type Props = {
  word: string;
  count: number;
  isIrregularPlural?: boolean;
};

export const CountedParty = ({ count, word, isIrregularPlural }: Props) => {
  const getWordForm = () => {
    if (count > 1 && isIrregularPlural) {
      return `${word}ren`;
    } else if (count > 1) {
      return `${word}s`;
    }
    return word;
  };

  return (
    <span>
      <b>{count}</b> {getWordForm()}
    </span>
  );
};
