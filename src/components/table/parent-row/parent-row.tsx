import { OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import ChildrenRow from '../children-row/children-row';
import styles from './parent-row.module.scss';

type ParentRowProps = {
  items: OptionData[];
};

function ParentRow({ items }: ParentRowProps): JSX.Element {
  const isRoot = items[0].level === 1;
  const { paddingLeft } = useWidth(items[0].level);
  
  return (
    <div className={styles.parent}>
      {!isRoot && (
        <div className={styles.vertical} style={{ left: paddingLeft }}></div>
      )}
      {items.map((item) => (
        <ChildrenRow key={item.id} row={item} />
      ))}
    </div>
  );
}

export default ParentRow;
