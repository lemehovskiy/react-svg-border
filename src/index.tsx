import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import useParseConfigToPolyline from './hooks/useParseConfigToPolyline';
import { SvgBorderProps, FiguresType, AttributeType } from './types';
import DrawFigure from './components/DrawFigure';
import Figure from './components/Figure';
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
  figuresDefaultParams = {},
  children,
  classes = {},
  drawProgress = [],
  morphProgress = [],
}: SvgBorderProps) {
  const drawProgressNormalized = useMemo(
    () => [
      ...drawProgress,
      ...Array(figures.length - drawProgress.length).fill(null),
    ],
    [drawProgress, figures.length]
  );

  const morphProgressNormalized = useMemo(
    () => [
      ...morphProgress,
      ...Array(figures.length - morphProgress.length).fill(0),
    ],
    [morphProgress, figures.length]
  );

  const figuresWithDefaults = useMemo(
    () =>
      getFiguresWithDefaultParams(figures, {
        fill: figuresDefaultParams.fill,
        stroke: figuresDefaultParams.stroke,
        strokeWidth: figuresDefaultParams.strokeWidth,
        type: figuresDefaultParams.type,
      }),
    [
      figures,
      figuresDefaultParams.fill,
      figuresDefaultParams.stroke,
      figuresDefaultParams.strokeWidth,
      figuresDefaultParams.type,
    ]
  );

  const { polylinePoints, componentRef, isInited } = useParseConfigToPolyline(
    figuresWithDefaults,
    morphProgressNormalized
  );

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

            if (drawProgressNormalized[index] === null) {
              return (
                <Figure key={points} attributes={attributes} type={type} />
              );
            }
            return (
              <DrawFigure
                key={points}
                attributes={attributes}
                type={type}
                isInited={isInited}
                drawProgress={drawProgressNormalized[index]}
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
