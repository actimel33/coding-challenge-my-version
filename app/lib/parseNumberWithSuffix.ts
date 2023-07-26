export const parseNumberWithSuffix = (numStr: string) => {
  if (!numStr) {
    return numStr;
  } else if (numStr.endsWith('M')) {
    return parseFloat(numStr.slice(0, -1)) * 10 ** 6;
  } else if (numStr.endsWith('K')) {
    return parseFloat(numStr.slice(0, -1)) * 10 ** 3;
  } else {
    return parseFloat(numStr);
  }
};
