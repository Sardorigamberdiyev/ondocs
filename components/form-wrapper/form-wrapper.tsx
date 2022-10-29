import { FC, PropsWithChildren } from 'react';
import styles from './form-wrapper.module.sass';

interface IFormWrapperProps {
    text: string;
}

const FormWrapper: FC<PropsWithChildren<IFormWrapperProps>> = ({children, text}) => {
    return (
        <div className={styles.formWrapper}>
            <h2>{text}</h2>
            {children}
        </div>
    )
}

export default FormWrapper;