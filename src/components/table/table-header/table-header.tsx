import { maxLevel } from '../../../assets/data';
import { svgWidth } from '../../../const';
import styles from './table-header.module.scss';

function TableHeader(): JSX.Element {
  const width = (maxLevel + 1) * svgWidth + 30;
  return (
    <table className={styles.header}>
      <tr>
        <div className={styles.row}>
          <th style={{ width }}>
            <span>Уровень</span>
          </th>
          <th>
            <span>Наименование работ</span>
          </th>
          <th>
            <span>Ед. изм</span>
          </th>
          <th>
            <span>Количество</span>
          </th>
          <th>
            <span>Цена за ед.</span>
          </th>
          <th>
            <span>Стоимость</span>
          </th>
        </div>
      </tr>
    </table>
  );
}

export default TableHeader;
