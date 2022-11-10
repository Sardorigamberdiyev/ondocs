import { CSSProperties, FC } from 'react';
import styles from './row-form.module.sass';

interface IRowFormProps {
    leftContent?: JSX.Element;
    rightContent?: JSX.Element;
    leftContentStyle?: CSSProperties;
    rightContentStyle?: CSSProperties;
}

const RowForm: FC<IRowFormProps> = (props) => {
    const { leftContent, rightContent, leftContentStyle, rightContentStyle } = props;
    return (
        <div className={styles.rowForm}>
            <div className={styles.rowForm__left} 
            style={leftContentStyle}>
                {leftContent}
            </div>
            <div className={styles.rowForm__right} 
            style={rightContentStyle}>
                {rightContent}
            </div>
        </div>
    )
}

export default RowForm;