const getConvertedCalcToPx = (value: string, size: number) => {
  let returnValue = value;
  const pattern = /calc\((.+)\)/;
  const match = pattern.exec(value);

  // remove calc and calc brackets
  returnValue = match && match.length > 1 ? match[1] : '';

  // clean spaces
  returnValue = returnValue.replace(/\s/g, '');

  // convert percent values to px
  returnValue = returnValue.replace(/(\d+)%/g, (_match: string, p1: string) =>
    ((size / 100) * parseInt(p1, 10)).toString()
  );

  // remove px units
  returnValue = returnValue.replace(/px/g, '');

  return eval(returnValue).toString();
};

export default getConvertedCalcToPx;
