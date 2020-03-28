import { Ref, useEffect } from 'react';

//hooks
import useScrollRatio from '../useScrollRatio';
import usePrevious from '../usePrevious';
import useHasChanged from '../useHasChanged';

//helpers
import { shouldLoadMoreData } from './helpers';
import { isScrollable } from 'utils';

export default function useInfiniteScroll<S extends HTMLElement>({
  threshold = 0.8,
  isLoading,
  hasError,
  fetchMore,
}: {
  readonly threshold?: number;
  readonly isLoading: boolean;
  readonly hasError: boolean;
  fetchMore: () => void;
}): Ref<S> {
  const prevIsLoading = usePrevious<typeof isLoading>(isLoading),
    loadedData = prevIsLoading ? prevIsLoading && !isLoading : false;

  const [currentScrollRatio, ref] = useScrollRatio<S>({ hasElementDisplayChanged: loadedData }),
    hasScrollRatioChanged: boolean = useHasChanged<typeof currentScrollRatio>(currentScrollRatio);

  useEffect(() => {
    shouldLoadMoreData({
      loadedData,
      isScrollable: ref.current
        ? isScrollable({
            scrollHeight: ref.current.scrollHeight,
            clientHeight: ref.current.clientHeight,
          })
        : false,
      currentScrollRatio,
      hasScrollRatioChanged,
      threshold,
      hasError,
    }) && fetchMore();
  }, [currentScrollRatio, fetchMore, threshold, hasError, loadedData, ref, hasScrollRatioChanged]);

  return ref;
}
