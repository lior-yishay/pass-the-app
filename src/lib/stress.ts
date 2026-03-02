export const fart = (date: Date, answer: number): number => {
  const dateDifferenceDays =
    Math.abs(new Date().setHours(0, 0, 0, 0) - date.getTime()) /
    (1000 * 60 * 60 * 24);

  const d = Math.max(0, Math.min(dateDifferenceDays, 13));
  const m = Math.max(1, Math.min(answer, 3));

  const invertedDay = 13 - d;

  const stress = invertedDay * (m / 3);

  return Math.max(0, Math.min(13, Math.round(stress)));
};
