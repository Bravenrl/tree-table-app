import { useSelector } from 'react-redux';
import { svgWidth } from '../const';
import { getTreeData } from '../store/app/app-selectors';

export const useWidth = (level: number = 1) => {
  const {maxLevel} = useSelector(getTreeData);

  const width = (maxLevel + 1) * svgWidth + 30;
  const paddingLeft = level ? svgWidth * (level - 1) : 0;
  const lineWidth = level === 1 ? 0 : svgWidth / 2;


  return { paddingLeft, width, lineWidth };
};
