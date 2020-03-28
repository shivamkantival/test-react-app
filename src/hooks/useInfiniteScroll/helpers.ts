export function isBlankSpaceVisibleInNonScrollableView({
  // loadedData,
  isScrollable,
  hasError,
}: {
  // loadedData: boolean;
  isScrollable: boolean;
  hasError: boolean;
}): boolean {
  return !isScrollable && !hasError;
}

function crossedThresholdInScrollableView({
  isScrollable,
  threshold,
  currentScrollRatio,
  hasScrollRatioChanged,
}: {
  isScrollable: boolean;
  threshold: number;
  currentScrollRatio: number;
  hasScrollRatioChanged: boolean;
}) {
  return isScrollable && hasScrollRatioChanged && currentScrollRatio >= threshold;
}

function hasContainerUpdated({
  loadedData,
  hasScrollRatioChanged,
}: {
  loadedData: boolean;
  hasScrollRatioChanged: boolean;
}): boolean {
  return loadedData || hasScrollRatioChanged;
}

/**
 * Return true only if-
 * 1. data was just loaded and the scroll container still has hasn't reached threshold
 * 2. scrollRatio changed and is greater than threshold
 *
 * @param isScrollable
 * @param hasError
 * @param loadedData
 * @param threshold
 * @param currentScrollRatio
 * @param hasScrollRatioChanged
 */
export function shouldLoadMoreData({
  isScrollable,
  hasError,
  loadedData,
  threshold,
  currentScrollRatio,
  hasScrollRatioChanged,
}: {
  loadedData: boolean;
  hasError: boolean;
  isScrollable: boolean;
  threshold: number;
  currentScrollRatio: number;
  hasScrollRatioChanged: boolean;
}): boolean {
  return (
    hasContainerUpdated({ loadedData, hasScrollRatioChanged }) &&
    (isBlankSpaceVisibleInNonScrollableView({
      isScrollable,
      hasError,
    }) ||
      crossedThresholdInScrollableView({
        threshold,
        currentScrollRatio,
        isScrollable,
        hasScrollRatioChanged,
      }))
  );
}
