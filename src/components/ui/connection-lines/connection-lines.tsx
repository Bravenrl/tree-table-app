import { OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import styles from './connection-lines.module.scss';
import cx from 'classnames';

type ConnectionLinesProps = {
  isRoot: boolean;
  isLast: boolean;
  item: OptionData;
};

function ConnectionLines({ isRoot, item, isLast }: ConnectionLinesProps): JSX.Element {
  const { lineWidth, paddingLeft } = useWidth(item.level);
  return (
    <>
      {!isRoot && (
        <div
          className={styles.horizontal}
          style={{ width: lineWidth + 2, left: paddingLeft + 1 }}
        ></div>
      )}
      {!isRoot && (
        <div
          className={cx(styles.vertical, { [styles.last]: isLast })}
          style={{ left: paddingLeft }}
        ></div>
      )}
    </>
  );
}

export default ConnectionLines;
