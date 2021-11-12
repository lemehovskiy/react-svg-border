import { useEffect, useRef, useState } from 'react';
import useEventListener from './useEventListener';
import parseConfigToPolyline from '../utils/parseConfigToPolyline';

const useParseConfigToPolyline = (
  borderConf: string[],
  strokeWidth: number
) => {
  const componentRef = useRef(null);
  const [size, setSize] = useState([0, 0]);
  const [polylinePoints, setPolylinePoints] = useState('');
  const [isInited, setIsInited] = useState(false);

  function handleResize() {
    if (!componentRef.current) return;
    const { offsetWidth, offsetHeight } = componentRef!.current!;
    setSize([offsetWidth, offsetHeight]);
  }

  useEffect(() => {
    if (size[0] === 0 || size[1] === 0) return;
    setPolylinePoints(parseConfigToPolyline(borderConf, size, strokeWidth));
    if (!isInited) {
      setIsInited(true);
    }
  }, [borderConf, size, strokeWidth, isInited]);

  useEffect(() => {
    handleResize();
  }, []);

  useEventListener(window, 'resize', handleResize);

  return { polylinePoints, componentRef, isInited };
};

export default useParseConfigToPolyline;
