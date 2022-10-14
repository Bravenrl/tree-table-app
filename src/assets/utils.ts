import { OptionData, RowData } from './types';

export const dataToTree = (data: RowData[]) => {
  const treeData: OptionData[] = [];
  let maxLevel = 0;
  const cloneData = JSON.parse(JSON.stringify(data)) as Array<OptionData>;  
                                                      
  cloneData.forEach((item, i, arr) => {
    if (item.parent === null) {
      treeData.push(item);
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

  setLevels(treeData)
  return { treeData, maxLevel };
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

