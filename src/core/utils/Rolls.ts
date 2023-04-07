export const Attack_Roll = ({ min, max }: { max: number; min: number }) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};
