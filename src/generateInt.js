// [min; max]
export default (min = 0, max = 100) => {
  const randomFloat = Math.random() * (max - min + 1) + min;
  return Math.floor(randomFloat);
};
