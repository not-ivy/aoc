const rangeToSeq = (range: string): number[] => {
  const [start, end] = range.split("-").map((n) => parseInt(n, 10));
  return [...Array(end - start + 1).keys()].map((n) => n + start);
};

export { rangeToSeq };
