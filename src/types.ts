type FigureTags = 'polygon' | 'polyline';

export type PathType = (string | { from: string; to: string })[];
export type ParsedPathType = (
  | [number, number]
  | { from: [number, number]; to: [number, number] }
)[];

export type AttributeType = {
  points: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
};

export type FigureType = {
  path: PathType;
  pathMorphByIndex?: { [index: number]: string };
  type?: FigureTags;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

export type FiguresType = FigureType[];

export type FiguresDefaultParams = Omit<FigureType, 'path'>;

export interface SvgBorderProps {
  figures: FiguresType;
  figuresDefaultParams?: FiguresDefaultParams;
  children: JSX.Element | string;
  classes?: object;
  drawProgress?: number[];
  morphProgress?: number[];
}

export type DrawFigureProps = {
  attributes: AttributeType;
  isInited: boolean;
  drawProgress: number;
  type: FigureTags;
};

export type FigureProps = {
  attributes: AttributeType;
  type: FigureTags;
};
