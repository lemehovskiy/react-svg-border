import { useEffect, useRef, useState } from 'react';
import useEventListener from './useEventListener';
import parseConfigToPolyline from '../utils/parseConfigToPolyline';
import { FiguresType } from '../types';

const useParseConfigToPolyline = (figures: FiguresType) => {
  const componentRef = useRef(null);
  const [size, setSize] = useState([0, 0]);
  const [polylinePoints, setPolylinePoints] = useState<string[]>([]);
  const [isInited, setIsInited] = useState(false);
  function handleResize() {
    if (!componentRef.current) return;
    const { offsetWidth, offsetHeight } = componentRef!.current!;
    setSize([offsetWidth, offsetHeight]);
  }

  useEffect(() => {
    if (size[0] === 0 || size[1] === 0) return;

    const polylines = [] as string[];
    figures.forEach((figure) => {
      polylines.push(
        parseConfigToPolyline(figure.path, size, figure.strokeWidth)
      );
    });

    setPolylinePoints(polylines);

    if (!isInited) {
      setIsInited(true);
    }
  }, [figures, size, isInited]);

  useEffect(() => {
    handleResize();
  }, []);

  useEventListener(window, 'resize', handleResize);

  return { polylinePoints, componentRef, isInited };
};

export default useParseConfigToPolyline;
