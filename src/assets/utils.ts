import { OptionData, RowData } from './types';

export const dataToTree = (data: RowData[]) => {
  const optionData: OptionData[] = [];
  let maxLevel = 0;
  const cloneData = data.slice() as Array<OptionData>;

  cloneData.forEach((item, i, arr) => {
    if (item.parent === null) {
      optionData.push(item);
    } else {
      let parent = arr[(item.parent as number) - 1];

      if (!parent.children) parent.children = [];
      parent.children.push(item);

      maxLevel =
        parent.children.length > maxLevel ? parent.children?.length : maxLevel;
    }
    item.currentParent = item.parent ?? null;
    delete item.parent;
  });

  setLevels(optionData)

  return { optionData, maxLevel };
};

export const setLevels = (data: OptionData[], level = 0): OptionData[] => {
   data.forEach((item) => {
    item.level = level + 1;
    if (item.children?.length) {
      setLevels(item.children, item.level);
    }
  });
  return data;
};

