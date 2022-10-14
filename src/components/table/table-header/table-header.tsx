import { maxLevel } from '../../../assets/data';
import { svgWidth } from '../../../const';
import styles from './table-header.module.scss';

function TableHeader(): JSX.Element {
  const width = (maxLevel + 1) * svgWidth + 30;
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <div style={{ width }}>
          <span>Уровень</span>
        </div>
        <div>
          <span>Наименование работ</span>
        </div>
        <div>
          <span>Ед. изм</span>
        </div>
        <div>
          <span>Количество</span>
        </div>
        <div>
          <span>Цена за ед.</span>
        </div>
        <div>
          <span>Стоимость</span>
        </div>
      </div>
    </div>
  );
}

export default TableHeader;
