import { FC } from 'react';
import { ISignIndicatorProps } from './sign-indicator.interfaces';
import styles from './sign-indicator.module.sass';

const SignIndicator: FC<ISignIndicatorProps> = (props) => {
    const { date, series, company, stir, fullName, email, side } = props;
    return (
        <div className={styles.signIndicator}>
            <div className={styles.signIndicator__bgNumber}>{side}</div>
            <ul className={styles.signIndicator__list}>
                <li className={styles.signIndicator__list__item}>Сана: {date}</li>
                <li className={styles.signIndicator__list__item}>Серия раками: {series}</li>
                <li className={styles.signIndicator__list__item}>Компания: {company}</li>
                <li className={styles.signIndicator__list__item}>Стир: {stir}</li>
                <li className={styles.signIndicator__list__item}>ФИШ: {fullName}</li>
                <li className={styles.signIndicator__list__item}>Email: {email}</li>
            </ul>
        </div>
    )
}

export default SignIndicator;