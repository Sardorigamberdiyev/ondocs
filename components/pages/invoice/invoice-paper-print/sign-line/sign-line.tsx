import { FC } from 'react';
import { ISignLineProps } from './sign-line.interfaces';
import styles from './sign-line.module.sass';

const SignLine: FC<ISignLineProps> = ({ lineValue, lineDescription, lineLabel, lineFullName}) => {
    return (
        <div className={styles.signLine}>
            { lineLabel && <div className={styles.signLine__label}>{lineLabel}</div> }
            <div className={styles.signLine__main}
            style={{width: lineLabel ? 'auto' : '100%'}}>
                <span className={styles.signLine__main__value}>{lineValue}</span>
                <span className={styles.signLine__main__description}
                style={{width: lineLabel ? '200px' : '100%'}}>{lineDescription}</span>
            </div>
            <div className={styles.signLine__fullName}>{lineFullName}</div>
        </div>
    )
}

export default SignLine;