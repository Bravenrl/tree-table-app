import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useWidth } from '../../../hooks/use-width';

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
        <>
          <span style={{left:paddingLeft+9}}>{level}</span>
          <FolderSvg fill={'#00FFFF'} />
        </>
      )}
    </td>
  );
}

export default SvgCell;
