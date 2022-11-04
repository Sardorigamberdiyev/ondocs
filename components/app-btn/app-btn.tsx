import { FC, PropsWithChildren } from 'react';
import { IAppBtnProps } from './app-btn.props';
import styles from './app-btn.module.sass';

const AppBtn: FC<PropsWithChildren & IAppBtnProps> = (props) => {
    const {
        onClick,
        className
    } = props;

    return (
        <button 
        className={`${className || ''} ${styles.appBtn}`}
        onClick={onClick}>{props.children}</button>
    )
}

export default AppBtn;