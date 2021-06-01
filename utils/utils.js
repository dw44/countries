export const numberWithCommas = function numberWithCommas(x) {
  // 1000 => 1,000
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
