import { useSelector } from 'react-redux';
import { svgWidth } from '../const';
import { getMaxLevel } from '../store/app/app-selectors';

export const useWidth = (level: number = 1) => {
  const maxLevel = useSelector(getMaxLevel);
  const countWidth = (maxLevel) * svgWidth + 30;
  const width = countWidth < 80 ? 80 : countWidth;
  const paddingLeft = level ? svgWidth * (level - 1) : 0;
  const lineWidth = level === 1 ? 0 : svgWidth / 2;

  return { paddingLeft, width, lineWidth };
};
