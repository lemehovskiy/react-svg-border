import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import useParseConfigToPolyline from './hooks/useParseConfigToPolyline';
import { SvgBorderProps, FiguresType, AttributeType } from './types';
import Figure from './Figure';
import getFiguresWithDefaultParams from './utils/getFiguresWithDefaultParams';

const useStyles = createUseStyles({
  wrapper: {
    position: 'relative',
  },
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'visible',
  },
  childrenWrap: ({ strokeWidth }: { strokeWidth: number }) => ({
    position: 'relative',
    paddingLeft: `${strokeWidth}px`,
    paddingRight: `${strokeWidth}px`,
    paddingTop: `${strokeWidth}px`,
    paddingBottom: `${strokeWidth}px`,
  }),
});

const SvgBorder = function ({
  figures,
  figuresGlobalParams = {},
  children,
  classes = {},
  progress = [],
}: SvgBorderProps) {
  const figuresWithDefaults = useMemo(
    () =>
      getFiguresWithDefaultParams(figures, {
        fill: figuresGlobalParams.fill,
        stroke: figuresGlobalParams.stroke,
        strokeWidth: figuresGlobalParams.strokeWidth,
        type: figuresGlobalParams.type,
      }),
    [
      figures,
      figuresGlobalParams.fill,
      figuresGlobalParams.stroke,
      figuresGlobalParams.strokeWidth,
      figuresGlobalParams.type,
    ]
  );

  const { polylinePoints, componentRef, isInited } =
    useParseConfigToPolyline(figuresWithDefaults);

  const maxStrokeWidth = useMemo(
    () => Math.max(...figuresWithDefaults.map((o) => o.strokeWidth)),
    [figuresWithDefaults]
  );

  const defaultClasses = useStyles({ strokeWidth: maxStrokeWidth });
  const mergedClasses = { ...defaultClasses, ...classes };

  return (
    <div ref={componentRef} className={mergedClasses.wrapper}>
      {isInited && (
        <svg className={mergedClasses.root}>
          {polylinePoints.map((points, index) => {
            const { fill, stroke, strokeWidth, type } =
              figuresWithDefaults[index];
            const attributes = {
              points,
              fill,
              stroke,
              strokeWidth,
            } as AttributeType;

            return (
              <Figure
                key={points}
                attributes={attributes}
                type={type}
                isInited={isInited}
                progress={progress[index] === undefined ? 1 : progress[index]}
              />
            );
          })}
        </svg>
      )}
      <div className={mergedClasses.childrenWrap}>{children}</div>
    </div>
  );
};

export default SvgBorder;
export type { FiguresType };
