import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';

type SvgCellProps = {
  isRow: boolean;
  parent: number | null;
  level: number;
};

function SvgCell({ isRow, parent, level }: SvgCellProps): JSX.Element {
  const margin = parent ? 24 * parent : 0;
  const position = parent ? level - parent : 0;
  const height = 55*position;
  const width = parent? 12 : 0;

  return (
    <td>
      <div className={styles.icon} style={{ marginLeft: margin }}>
        <div className={styles.vertical} style={{height}}></div>
        <div className={styles.horizontal} style={{width}}></div>
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
