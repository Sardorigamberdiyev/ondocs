import { FC, PropsWithChildren } from 'react';
import { IAppTableHeadProps } from './app-table-head.interfaces';
import styles from './app-table-head.module.sass';

const AppTableHead: FC<PropsWithChildren<IAppTableHeadProps>> = ({children, className}) => {
    return (
        <thead className={`${styles.appTableHead} ${className || ''}`}>
            {children}
        </thead>
    )
}

export default AppTableHead;