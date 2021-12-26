import React from 'react';
import usePathDraw from '../hooks/usePathDraw';
import { DrawFigureProps } from '../types';

function areEqual(prevProps: DrawFigureProps, nextProps: DrawFigureProps) {
  return prevProps.drawProgress === nextProps.drawProgress;
}

const DrawFigure = React.memo(
  ({ attributes, isInited, drawProgress, type }: DrawFigureProps) => {
    const { strokeDashoffset, strokeDasharray, pathRef } = usePathDraw(
      isInited,
      drawProgress
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

export default DrawFigure;
