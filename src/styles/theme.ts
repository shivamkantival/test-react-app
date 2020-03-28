export const COLORS = {
  PARROT_GREEN: '#ace600' as const,
  GAINS_BORO: 'gainsboro' as const,
  WHITE: 'white' as const,
  ALTO: '#f2f2f2' as const,
  DARK_OUTER_SPACE: '#606369' as const,
};

export function spacing(ratio: number) {
  return `${0.25 * ratio}rem`;
}
