import React from 'react';
import usePathDraw from './hooks/usePathDraw';
import { FigureProps } from './types';

function areEqual(prevProps: FigureProps, nextProps: FigureProps) {
  return prevProps.progress === nextProps.progress;
}

const Figure = React.memo(
  ({ attributes, isInited, progress, type }: FigureProps) => {
    const { strokeDashoffset, strokeDasharray, pathRef } = usePathDraw(
      isInited,
      progress
    );

    const elementAttr = {
      ...attributes,
      strokeDashoffset,
      strokeDasharray,
    };

    return (
      <>
        {type === 'polygon' && <polygon ref={pathRef} {...elementAttr} />}
        {type === 'polyline' && <polyline ref={pathRef} {...elementAttr} />}
      </>
    );
  },
  areEqual
);

export default Figure;
