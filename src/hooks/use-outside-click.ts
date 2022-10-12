import { useEffect, useRef, RefObject, LegacyRef } from 'react';

export const useOutsideClick = (
  callback: () => void
) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, ref]);

  return ref;
};
