export function getRandomIntNumber(max, min = 1) {
  if (min > max) {
    console.log("max number is gotta be greater than min");
    return 0;
  }

  return Math.round(Math.random() * (max - min) + min);
}

export const getRandomOffset = (number) =>
  getRandomIntNumber(1, 0) === 1 ? number : (number *= -1);
