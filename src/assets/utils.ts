import { OptionData, RowData } from './types';

export const dataToTree = (data: RowData[]) => {
  const treeData: OptionData[] = [];
  const cloneData = JSON.parse(JSON.stringify(data)) as Array<OptionData>;

  cloneData.forEach((item, i, arr) => {
    if (item.parent === null) {
      treeData.push(item);
    } else {
      let parent = arr[(item.parent as number) - 1];

      if (!parent.children) parent.children = [];
      parent.children.push(item);
    }
    item.currentParent = item.parent ?? null;
    delete item.parent;
  });

  setLevels(treeData);

  return treeData;
};

export const setLevels = (data: OptionData[], level = 0): number => {
  let maxLevel = 0;
  data.forEach((item) => {
    item.level = level + 1;
    maxLevel = maxLevel<item.level ? item.level : maxLevel;
    if (item.children?.length) {
      setLevels(item.children, item.level);
    }
  });
  return maxLevel;
};

export const gerBooleanValues = (item: OptionData) => {
  const isRow = item.type === 'row';
  const isRoot = item.level === 1;
  const isNewRow = item.title === '';

  return { isRow, isRoot, isNewRow };
};


export const formatIntl = (number:number) => new Intl.NumberFormat('ru-RU', {maximumFractionDigits:2}).format(number);