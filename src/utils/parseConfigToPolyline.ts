import getConvertItemUnitToPx from './getConvertItemUnitToPx';

const parseConfigToPolyline = (
  inputConfig: string[],
  size: number[],
  strokeWidth?: number
) => {
  let points = '';
  let isFirstElement = true;

  inputConfig.forEach((position) => {
    position.split(', ').forEach((item: string, itemIndex) => {
      const cleanSpacesItem = item.replace(/\s/g, '');
      points += `${isFirstElement ? '' : ', '}${getConvertItemUnitToPx(
        cleanSpacesItem,
        size[itemIndex],
        strokeWidth
      )}`;
      if (isFirstElement) {
        isFirstElement = false;
      }
    });
  });

  return points;
};

export default parseConfigToPolyline;
