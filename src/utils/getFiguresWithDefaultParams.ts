import { FiguresType, FigureType, FiguresDefaultParams } from '../types';
import mergeProps from './mergeProps';

type FillFiguresReturn = Required<FigureType>;

const getFiguresWithDefaultParams = (
  figures: FiguresType,
  figuresDefaultParams: FiguresDefaultParams
): FillFiguresReturn[] => {
  const updatedFigures = [] as FillFiguresReturn[];
  figures.forEach((figure) => {
    const figuresWithDefaults = mergeProps([figuresDefaultParams, figure], {
      fill: 'none',
      stroke: '#000',
      strokeWidth: 1,
      type: 'polygon',
    }) as FillFiguresReturn;

    updatedFigures.push(figuresWithDefaults);
  });

  return updatedFigures;
};

export default getFiguresWithDefaultParams;
