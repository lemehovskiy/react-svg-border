export default function convertPolylinesArrayToPolylineAttribute(
  figuresPolylinesArray: [number, number][][]
) {
  const polylineAttributes = [] as string[];
  figuresPolylinesArray.forEach((figure) => {
    let points = '';
    let isFirstElement = true;

    figure.forEach((coordinates) => {
      points += `${isFirstElement ? '' : ', '}${coordinates[0]}, ${
        coordinates[1]
      }`;
      if (isFirstElement) {
        isFirstElement = false;
      }
    });

    polylineAttributes.push(points);
  });

  return polylineAttributes;
}
