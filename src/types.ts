type FigureTags = 'polygon' | 'polyline';

export type AttributeType = {
  points: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
};

export type FigureType = {
  path: string[];
  type?: FigureTags;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

export type FiguresType = FigureType[];

export type FiguresGlobalParams = Omit<FigureType, 'path'>;

export interface SvgBorderProps {
  figures: FiguresType;
  figuresGlobalParams?: FiguresGlobalParams;
  children: JSX.Element | string;
  classes?: object;
  progress?: number[];
}

export type FigureProps = {
  attributes: AttributeType;
  isInited: boolean;
  progress: number;
  type: FigureTags;
};
