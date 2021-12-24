import { useEffect, useState, useRef } from 'react';
import useEventListener from './useEventListener';

export default function usePathDraw(isInited: boolean, progress: number) {
  const [totalLenght, setTotalLength] = useState(0);
  const pathRef = useRef<SVGPolygonElement>(null);

  function handleResize() {
    if (pathRef && pathRef.current) {
      setTotalLength(pathRef!.current!.getTotalLength());
    }
  }

  useEffect(() => {
    if (pathRef !== null && pathRef.current !== null) {
      handleResize();
    }
  }, [isInited, pathRef]);

  useEventListener(window, 'resize', handleResize);

  return {
    strokeDashoffset: totalLenght - totalLenght * progress,
    strokeDasharray: totalLenght,
    pathRef,
  };
}
