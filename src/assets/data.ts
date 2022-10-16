import { NewRowData, RowData } from './types';

export const COLORS: string[] = [
  '#ff3333',
  '#5F98F5',
  '#95FFAC',
  '#ffff33',
  '#ff8a33',
  '#ff3333',
  '#5F98F5',
  '#95FFAC',
  '#ffff33',
  '#ff8a33',
];

export const initialData: RowData[] = [
  {
    id: 1,
    title: '',
    unit: '',
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: null,
    type: 'level',
  },
];

export const newInitialData: NewRowData = {
  title: '',
  unit: '',
  quantity: 0,
  unitPrice: 0,
  price: 0,
  parent: null,
  type: 'level',
};
