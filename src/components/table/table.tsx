import { useSelector } from 'react-redux';
import { getTreeData } from '../../store/app/app-selectors';
import ParentRow from './parent-row/parent-row';
import TableHeader from './table-header/table-header';
import styles from './table.module.scss';

function Table(): JSX.Element {
  const { treeData } = useSelector(getTreeData);
  return (
    <div className={styles.wrapper}>
      <TableHeader />
      <ParentRow items={treeData} />
    </div>
  );
}

export default Table;
