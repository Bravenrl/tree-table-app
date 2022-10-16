import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useWidth } from '../../../hooks/use-width';
import DropdownButton from '../../ui/dropdown-button/dropdown-button';
import { OptionData } from '../../../assets/types';
import { COLORS } from '../../../assets/data';

type SvgCellProps = {
  isRow: boolean;
  item: OptionData;
};

function SvgCell({ isRow, item }: SvgCellProps): JSX.Element {
  const level = item.level ?? 1;
  const { paddingLeft, width } = useWidth(level);

  return (
    <div className={styles.icon} style={{ width, paddingLeft }}>
      {isRow ? (
        <FileSvg />
      ) : (
        <div className={styles.folder}>
          <div className={styles.wrapper}>
          <span>{level}</span>
          <FolderSvg fill={COLORS[level%10]} />
          </div>
          <DropdownButton item={item} className={styles.button} />
        </div>
      )}
    </div>
  );
}

export default SvgCell;
