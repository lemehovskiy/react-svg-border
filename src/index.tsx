import React from 'react';
import { createUseStyles } from 'react-jss';
import useParseConfigToPolyline from './hooks/useParseConfigToPolyline';

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
    left: `${strokeWidth}px`,
    top: `${strokeWidth}px`,
    bottom: `${strokeWidth}px`,
    right: `${strokeWidth}px`,
  }),
});

interface SvgBorderProps {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  type?: 'polygon' | 'polyline';
  borderConf: string[];
  children: JSX.Element | string;
  classes?: object;
}

const SvgBorder = function ({
  fill = 'none',
  stroke = '#000',
  strokeWidth = 1,
  type = 'polygon',
  borderConf,
  children,
  classes = {},
}: SvgBorderProps) {
  const defaultClasses = useStyles({ strokeWidth });

  const mergedClasses = { ...defaultClasses, ...classes };

  const { polylinePoints, componentRef, isInited } = useParseConfigToPolyline(
    borderConf,
    strokeWidth
  );

  const elementProps = {
    points: polylinePoints || '',
    fill,
    stroke,
    strokeWidth,
  };

  return (
    <div ref={componentRef} className={mergedClasses.wrapper}>
      {isInited && (
        <svg className={mergedClasses.root}>
          {type === 'polygon' && <polygon {...elementProps} />}
          {type === 'polyline' && <polyline {...elementProps} />}
        </svg>
      )}
      <div className={mergedClasses.childrenWrap}>{children}</div>
    </div>
  );
};

export default SvgBorder;
