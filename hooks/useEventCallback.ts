import {useRef, useCallback, useEffect, useLayoutEffect} from 'react';

const useEventCallbackBase = <T extends (...args: any[]) => unknown>(
  useEffectHook: typeof useEffect | typeof useLayoutEffect,
  fn: T,
  deps: ReadonlyArray<unknown>,
) => {
  const ref = useRef<T>(fn);

  useEffectHook(() => {
    ref.current = fn;
  }, [fn, ...deps]);

  return useCallback(
    (...args: any[]) => {
      const callback = ref.current;
      callback(...args);
    },
    [ref],
  );
};

export const useEventCallback = useEventCallbackBase.bind(
  null,
  useLayoutEffect,
);

export const useEventCallbackWithUseEffect = useEventCallbackBase.bind(
  null,
  useEffect,
);
