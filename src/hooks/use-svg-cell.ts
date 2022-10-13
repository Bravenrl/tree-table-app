import { rowHight, svgWidth } from '../const';

export const useSvgCell = (parent?: number | null, level: number=1) => {
  const margin = parent ? svgWidth * parent : 0;
  const position = parent ? level - parent : 0;
  const height = (rowHight - 5) * position;
  const width = parent ? svgWidth / 2 : 0;

  return { margin, height, width };
};
