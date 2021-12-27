import { useEffect, useRef, useState, useMemo } from 'react';
import useEventListener from './useEventListener';
import { FiguresType, ParsedPathType } from '../types';
import parseConfigToArrayPolyline from '../utils/parseConfigToArrayPolyline';
import getFiguresMorphPolylinesArrayByProgress from '../utils/getFiguresMorphPolylinesArrayByProgress';
import convertPolylinesArrayToPolylineAttribute from '../utils/convertPolylinesArrayToPolylineAttribute';

const useParseConfigToPolyline = (
  figures: FiguresType,
  morphProgress: number[]
) => {
  const componentRef = useRef(null);
  const [size, setSize] = useState([0, 0]);

  const [figuresPolylinesArray, setInitPolylinesArray] = useState<
    ParsedPathType[]
  >([]);

  const [isInited, setIsInited] = useState(false);
  function handleResize() {
    if (!componentRef.current) return;
    const { offsetWidth, offsetHeight } = componentRef!.current!;
    setSize([offsetWidth, offsetHeight]);
  }

  useEffect(() => {
    if (size[0] === 0 || size[1] === 0) return;

    const newFiguresInitPolylinesArray = [] as ParsedPathType[];

    figures.forEach((figure) => {
      const polylineArray = parseConfigToArrayPolyline(
        figure.path,
        size,
        figure.strokeWidth
      );

      newFiguresInitPolylinesArray.push(polylineArray);
    });

    setInitPolylinesArray(newFiguresInitPolylinesArray);

    if (!isInited) {
      setIsInited(true);
    }
  }, [figures, size, isInited]);

  const figuresMorphPolylinesArrayByProgress = useMemo(
    () =>
      getFiguresMorphPolylinesArrayByProgress(
        figuresPolylinesArray,
        morphProgress
      ),
    [figuresPolylinesArray, morphProgress]
  );

  const polylinePoints = useMemo(
    () =>
      convertPolylinesArrayToPolylineAttribute(
        figuresMorphPolylinesArrayByProgress
      ),
    [figuresMorphPolylinesArrayByProgress]
  );

  useEffect(() => {
    handleResize();
  }, []);

  useEventListener(window, 'resize', handleResize);

  return { polylinePoints, componentRef, isInited };
};

export default useParseConfigToPolyline;
