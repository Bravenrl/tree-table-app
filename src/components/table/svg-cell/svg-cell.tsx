import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';

type SvgCellProps = {
  isRow: boolean;
  parent: number | null;
};

function SvgCell({ isRow, parent }: SvgCellProps): JSX.Element {
  const margin = parent ? 24 * parent : 0;

  return (
    <td>
      <div className={styles.icon} style={{ marginLeft: margin }}>
        {isRow ? (
          <FileSvg />
        ) : (
          <>
            <span>{parent ? ++parent : 1}</span>
            <FolderSvg fill={'#00FFFF'} />
          </>
        )}
      </div>
    </td>
  );
}

export default SvgCell;
