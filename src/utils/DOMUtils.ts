export function isScrollable(params: { scrollHeight: number; clientHeight: number }): boolean {
  return params.scrollHeight > params.clientHeight;
}
