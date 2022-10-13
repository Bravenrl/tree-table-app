export const usePlaceholder = (type: string): string => {
  let placeholder = '';
  switch (type) {
    case 'title':
      placeholder = 'Наименование';
      break;
    case 'unit':
      placeholder = 'kg';
      break;
    case 'quantity':
      placeholder = 'Количество';
      break;
    case 'unitPrice':
      placeholder = 'Цена';
      break;
    default:
      break;
  }

  return placeholder;
};
