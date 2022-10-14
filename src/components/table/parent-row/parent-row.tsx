import { OptionData } from '../../../assets/types';
import ChildrenRow from '../children-row/children-row';
import styles from './parent-row.module.scss';


type ParentRowProps = {
  items: OptionData[];
};

function ParentRow({ items }: ParentRowProps): JSX.Element {

  return (
    <div className={styles.parent}>
      {items.map((item, index) => {
        const isLast = index === items.length-1
       return <ChildrenRow key={item.id} item={item} isLast={isLast}/>;
      })}
    </div>
  );
}

export default ParentRow;
