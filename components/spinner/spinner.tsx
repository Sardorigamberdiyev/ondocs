import { FC } from 'react';
import styles from './spinner.module.sass';

const Spinner: FC = () => {
    return (
        <div className={styles.spinner}>
            loading...
        </div>
    )
}

export default Spinner;