export const COLORS = {
  PARROT_GREEN: '#ace600' as const,
  GAINS_BORO: 'gainsboro' as const,
  WHITE: 'white' as const,
  ALTO: '#f2f2f2' as const,
  DARK_OUTER_SPACE: '#606369' as const,
  PASTEL_GREEN: '#35C759' as const,
  BITTERSWEET: '#FF6969' as const,
  PEACH: '#FFB5B4' as const,
  HONEY: '#EB9605' as const,
};

export function spacing(ratio: number) {
  return `${0.25 * ratio}rem`;
}
