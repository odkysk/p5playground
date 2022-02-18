export const map = (value, fromMin, fromMax, toMin, toMax) => {
  return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
};
