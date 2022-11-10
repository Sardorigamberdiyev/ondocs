import { FC, PropsWithChildren } from 'react';
import { IAppTableProps } from './app-table.props';
import styles from './app-table.module.sass';

const AppTable: FC<PropsWithChildren<IAppTableProps>> = ({children, className, style}) => {
    return (
        <table 
        className={`${styles.appTable} ${className || ''}`}
        style={style}>
            {children}
        </table>
    )
}

export default AppTable;