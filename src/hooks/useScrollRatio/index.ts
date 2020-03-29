import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';

//typeDefs
import { ScrollRatioComputeParams } from './interfaces';

//helpers
import { computeScrollRatio } from './helpers';

export default function useScrollRatio<S extends HTMLElement>({
  hasElementDimensionChanged,
}: {
  readonly hasElementDimensionChanged?: boolean;
}): [number, RefObject<S>] {
  const ref = useRef<S>(null),
    [currentScrollRatio, setCurrentScrollRatio] = useState<number>(1),
    computeAndSetScrollRatio = useMemo(
      () =>
        debounce<(scrollRatioComputeParams: ScrollRatioComputeParams) => void>(
          scrollRatioComputeParams => {
            setCurrentScrollRatio(computeScrollRatio(scrollRatioComputeParams));
          },
          50
        ),
      []
    );

  const onScroll = useCallback<EventListener>(
    event => {
      const currentTarget = event.currentTarget as S;

      currentTarget && computeAndSetScrollRatio(currentTarget);
    },
    [computeAndSetScrollRatio]
  );

  //to setup and cleanup onscroll
  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.addEventListener('scroll', onScroll);

    return function () {
      currentRef?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  //to init state
  useEffect(() => {
    setCurrentScrollRatio(computeScrollRatio(ref.current));
  }, []);

  //to handle windowResize
  useEffect(() => {
    const currentRef = ref.current,
      onResize = () => {
        setCurrentScrollRatio(computeScrollRatio(currentRef));
      };
    window.addEventListener('resize', onResize);

    return function () {
      window.removeEventListener('resize', onResize);
    };
  });

  //to update scrollRatio if element changed the data being displayed and inturn may have updated scroll behavior
  useEffect(() => {
    hasElementDimensionChanged && setCurrentScrollRatio(computeScrollRatio(ref.current));
  }, [hasElementDimensionChanged]);

  return [currentScrollRatio, ref];
}
