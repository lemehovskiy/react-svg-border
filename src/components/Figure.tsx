import React from 'react';
import { FigureProps } from '../types';

const Figure = function ({ attributes, type }: FigureProps) {
  const elementAttr = {
    ...attributes,
  };

  return (
    <>
      {type === 'polygon' && <polygon {...elementAttr} />}
      {type === 'polyline' && <polyline {...elementAttr} />}
    </>
  );
};

export default Figure;
