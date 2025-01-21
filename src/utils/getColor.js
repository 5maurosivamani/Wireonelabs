export const getColor = (percentage) => {
  const colors = [
    { threshold: 90, color: "rgba(255, 0, 0, 1)" }, // Red
    { threshold: 70, color: "rgba(255, 165, 0, 1)" }, // Orange
    { threshold: 50, color: "rgba(255, 255, 0, 1)" }, // Yellow
    { threshold: 0, color: "rgba(0, 255, 0, 1)" }, // Green
  ];

  for (const { threshold, color } of colors) {
    if (percentage >= threshold) return color;
  }

  return "grey";
};
