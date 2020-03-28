import { useEffect, useRef } from 'react';

export default function usePrevious<S>(value: S) {
  const ref = useRef<S>(null);
  useEffect(() => {
    // @ts-ignore
    ref.current = value;
  });
  return ref.current;
}
