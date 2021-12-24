import { FiguresType, FigureType, FiguresGlobalParams } from '../types';
import mergeProps from './mergeProps';

type FillFiguresReturn = Required<FigureType>;

const getFiguresWithDefaultParams = (
  figures: FiguresType,
  figuresGlobalParams: FiguresGlobalParams
): FillFiguresReturn[] => {
  //   console.log(figures);
  //   console.log(figuresGlobalParams);
  const updatedFigures = [] as FillFiguresReturn[];
  figures.forEach((figure) => {
    const figuresWithDefaults = mergeProps([figuresGlobalParams, figure], {
      fill: 'none',
      stroke: '#000',
      strokeWidth: 1,
      type: 'polygon',
    }) as FillFiguresReturn;

    // console.log(figuresWithDefaults);

    updatedFigures.push(figuresWithDefaults);
  });

  return updatedFigures;
};

export default getFiguresWithDefaultParams;
