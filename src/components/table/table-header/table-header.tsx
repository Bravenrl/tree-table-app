import styles from './table-header.module.scss';

type TableHeaderProps = {};

function TableHeader(): JSX.Element {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th scope='col'>Уровень</th>
        <th scope='col'>Наименование работ</th>
        <th scope='col'>Ед. изм</th>
        <th scope='col'>Количество</th>
        <th scope='col'>Цена за ед.</th>
        <th scope='col'>Стоимость</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
