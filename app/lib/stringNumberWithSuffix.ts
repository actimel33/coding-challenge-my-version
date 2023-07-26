export const stringifyNumberWithSuffix = (num: number): string => {
  if (num >= 10 ** 6) {
    return (num / 10 ** 6).toFixed(2) + 'M';
  } else if (num >= 10 ** 3) {
    return (num / 10 ** 3).toFixed(2) + 'K';
  } else {
    return num.toString();
  }
};
