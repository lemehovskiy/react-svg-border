import getConvertedCalcToPx from './getConvertedCalcToPx';

const getConvertItemUnitToPx = (
  value: string,
  size: number,
  strokeWidth = 0
) => {
  if (value === 'top' || value === 'left') {
    return 0 + strokeWidth / 2;
  }
  if (value === 'right' || value === 'bottom') {
    return size - strokeWidth / 2;
  }
  if (/calc/.test(value)) {
    return getConvertedCalcToPx(value, size);
  }
  if (/px$/.test(value)) {
    return parseInt(value, 10);
  }
  if (/%$/.test(value)) {
    return (size / 100) * parseInt(value, 10);
  }
  return value;
};

export default getConvertItemUnitToPx;
