export type NewRowData = {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость
  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
};

export type RowData = NewRowData & {
  id: number;
};

export type TreeData = Omit<NewRowData, 'parent'> & {
  children?: TreeData[];
  currentParent: number | null;
};

export type OptionData = Omit<RowData, 'parent'> & {
  children?: OptionData[];
  currentParent?: number | null;
  parent?: number | null;
  level?: number;
};

export type InitialState = {
  data: RowData[];
  isEditMode: boolean;
  maxLevel: number;
};

export type FormFields = {
  title: HTMLInputElement;
  unit: HTMLInputElement;
  quantity: HTMLInputElement;
  unitPrice: HTMLInputElement;
};
