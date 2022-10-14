import { NewRowData, RowData } from './types';

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
