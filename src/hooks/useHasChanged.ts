import { useMemo, useEffect, useState } from 'react';

export default function useHasChanged<S>(valueToCheck: S): boolean {
  let result = false,
    [isFirstRender, setIsFirstRender] = useState(true);

  useMemo(() => {
    result = true; //eslint-disable-line
  }, [valueToCheck]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return isFirstRender ? false : result;
}
