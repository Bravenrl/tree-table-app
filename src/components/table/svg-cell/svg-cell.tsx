import styles from './svg-cell.module.scss';
import { ReactComponent as FolderSvg } from '../../../assets/icons/folder.svg';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { maxLevel } from '../../../assets/data';
import { svgWidth } from '../../../const';
// import { useSvgCell } from '../../../hooks/use-svg-cell';

type SvgCellProps = {
  isRow: boolean;
  level: number;
};

function SvgCell({ isRow, level }: SvgCellProps): JSX.Element {
  // const { margin, height, width } = useSvgCell(parent, level);
  const width = (maxLevel + 1) * svgWidth + 30;
  const paddingLeft = level ? svgWidth * (level - 1) : 0;
  return (
    <div className={styles.icon} style={{ width, paddingLeft }}>
      {/* <div className={styles.vertical} style={{ height }}></div>
      <div className={styles.horizontal} style={{ width }}></div> */}
      {isRow ? (
        <FileSvg />
      ) : (
        <>
          <span>{level}</span>
          <FolderSvg fill={'#00FFFF'} />
        </>
      )}
    </div>
  );
}

export default SvgCell;
