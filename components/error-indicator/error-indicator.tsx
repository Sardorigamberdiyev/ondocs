import { FC } from 'react';
import styles from './error-indicator.module.sass';

const ErrorIndicator: FC = () => {
    return (
        <div className={styles.errorIndicator}>Error!</div>
    )
}

export default ErrorIndicator;