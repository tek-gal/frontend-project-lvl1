// [min; max)
export default (min = 0, max = 100) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin;
};
