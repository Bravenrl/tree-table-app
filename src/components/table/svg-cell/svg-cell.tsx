import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useWidth } from '../../../hooks/use-width';
import DropdownButton from '../../ui/dropdown-button/dropdown-button';

type SvgCellProps = {
  isRow: boolean;
  level: number;
};

function SvgCell({ isRow, level }: SvgCellProps): JSX.Element {
  const { paddingLeft, width } = useWidth(level);

  return (
    <td className={styles.icon} style={{ width, paddingLeft }}>
      {isRow ? (
        <FileSvg />
      ) : (
        <div className={styles.folder}>
          <span style={{ left: paddingLeft + 9 }}>{level}</span>
          <FolderSvg fill={'#00FFFF'} />
          <DropdownButton level={level} className={styles.button}/>
        </div>
      )}
    </td>
  );
}

export default SvgCell;
