import { ParsedPathType } from '../types';

export default function getFiguresMorphPolylinesArrayByProgress(
  figures: ParsedPathType[],
  progress: number[]
) {
  const figuresMorphPolylinesArrayByProgress = [] as [number, number][][];

  figures.forEach((figure, figureIndex) => {
    const updatedFigure = [] as [number, number][];
    figure.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        updatedFigure.push(coordinate);
      } else {
        const morphToX =
          coordinate.from[0] -
          (coordinate.from[0] - coordinate.to[0]) * progress[figureIndex];
        const morphToY =
          coordinate.from[1] -
          (coordinate.from[1] - coordinate.to[1]) * progress[figureIndex];
        updatedFigure.push([morphToX, morphToY]);
      }
    });
    figuresMorphPolylinesArrayByProgress.push(updatedFigure);
  });

  return figuresMorphPolylinesArrayByProgress;
}
