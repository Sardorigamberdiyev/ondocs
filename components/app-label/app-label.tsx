import { FC, PropsWithChildren } from 'react';
import { IAppLabelProps } from './app-label.props';
import styles from './app-label.module.sass';

const AppLabel: FC<PropsWithChildren<IAppLabelProps>> = (props) => {
    const {id, text, className, children, labelNoIdent, labelHidden} = props;

    return (
        <div className={`${styles.appLabel} ${className || ''} ${labelHidden ? styles.appLabel__hidden : ''}`}
        style={labelNoIdent ? {marginBottom: 0} : {}}>
            <label 
            htmlFor={id}>{text}</label>
            {children}
        </div>
    )
}

export default AppLabel;