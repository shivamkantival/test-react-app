import { useEffect, useRef, useState } from 'react';

//utils
import isEmpty from 'lodash/isEmpty';

export default function useDimensions<S extends HTMLElement>() {
  const ref = useRef<S>(null),
    [currBoundingRect, setBoundingRect] = useState<DOMRect | null>();

  useEffect(() => {
    const boundingRect = ref.current && ref.current.getBoundingClientRect();

    !isEmpty(boundingRect) && setBoundingRect(boundingRect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return [currBoundingRect, ref];
}
