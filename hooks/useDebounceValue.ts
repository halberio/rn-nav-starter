import {useState, useEffect} from 'react';

function useDebounce(value: any, delay: number = 200) {
  const [debounceValue, setDebounceValue] = useState<typeof value>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      console.log(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
