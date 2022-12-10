import { FC, PropsWithChildren } from 'react';
import { IAppBtnProps } from './app-btn.interfaces';
import styles from './app-btn.module.sass';

const AppBtn: FC<PropsWithChildren<IAppBtnProps>> = (props) => {
    const {
        onClick,
        onBlur,
        onFocus,
        className,
        disabled
    } = props;

    return (
        <button 
        className={`${className || ''} ${styles.appBtn}`}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}>{props.children}</button>
    )
}

export default AppBtn;