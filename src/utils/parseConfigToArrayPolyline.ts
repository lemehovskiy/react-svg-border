import getConvertItemUnitToPx from './getConvertItemUnitToPx';
import { PathType, ParsedPathType } from '../types';

const stringPositionToArray = (
  position: string,
  size: number[],
  strokeWidth?: number
) => {
  const positionArray = [] as number[];

  position.split(', ').forEach((item: string, itemIndex) => {
    const cleanSpacesItem = item.replace(/\s/g, '');

    positionArray.push(
      parseFloat(
        getConvertItemUnitToPx(cleanSpacesItem, size[itemIndex], strokeWidth)
      )
    );
  });
  return positionArray;
};

const parseConfigToArrayPolyline = (
  path: PathType,
  size: number[],
  strokeWidth?: number
): ParsedPathType => {
  const points = [] as any[];

  path.forEach((position) => {
    if (typeof position === 'string') {
      const positionArray = stringPositionToArray(position, size, strokeWidth);
      points.push(positionArray);
    } else if (typeof position === 'object') {
      const from = stringPositionToArray(position.from, size, strokeWidth);
      const to = stringPositionToArray(position.to, size, strokeWidth);
      points.push({ from, to });
    }
  });

  return points;
};

export default parseConfigToArrayPolyline;
