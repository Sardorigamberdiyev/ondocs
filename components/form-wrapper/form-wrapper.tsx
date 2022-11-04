import { FC, PropsWithChildren } from 'react';
import { IFormWrapperProps } from './form-wrapper.props';
import styles from './form-wrapper.module.sass';

const FormWrapper: FC<PropsWithChildren<IFormWrapperProps>> = ({children, text, className}) => {
    return (
        <div className={`${styles.formWrapper} ${className || ''}`}>
            {text && <h2>{text}</h2>}
            {children}
        </div>
    )
}

export default FormWrapper;