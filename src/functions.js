export default (maxValue = undefined) => {
  const decimals = 100;
  return maxValue === undefined
    ? Math.ceil(Math.random() * decimals)
    : Math.floor(Math.random() * maxValue);
};
