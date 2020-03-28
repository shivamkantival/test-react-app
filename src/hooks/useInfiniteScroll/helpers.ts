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
