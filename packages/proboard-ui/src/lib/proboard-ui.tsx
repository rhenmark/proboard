import styles from './proboard-ui.module.css';

/* eslint-disable-next-line */
export interface ProboardUiProps {}

export function ProboardUi(props: ProboardUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProboardUi!</h1>
    </div>
  );
}

export default ProboardUi;
