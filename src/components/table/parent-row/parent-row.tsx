import { OptionData } from '../../../assets/types';
import ChildrenRow from '../children-row/children-row';
import styles from './parent-row.module.scss';

type ParentRowProps = {
  items: OptionData[];
};

function ParentRow({ items }: ParentRowProps): JSX.Element {
  return (
    <ul className={styles.parent}>
      {items.map((item) => (
        <ChildrenRow key={item.id} row={item} />
      ))}
    </ul>
  );
}

export default ParentRow;
