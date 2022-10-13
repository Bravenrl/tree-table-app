import { maxLevel } from '../assets/data';
import { svgWidth } from '../const';

export const useWidth = (level: number = 1) => {
  const width = (maxLevel + 1) * svgWidth + 30;
  const paddingLeft = level ? svgWidth * (level - 1) : 0;
  const lineWidth = level === 1 ? 0 : svgWidth / 2;

  return { paddingLeft, width, lineWidth };
};
