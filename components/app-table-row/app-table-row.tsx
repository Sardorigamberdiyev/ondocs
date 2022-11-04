import { FC, PropsWithChildren } from 'react';
import { IAppTableRowProps } from './app-table-row.props';
import styles from './app-table-row.module.sass';

const AppTableRow: FC<PropsWithChildren<IAppTableRowProps>> = ({children, className}) => {
    return (
        <tr className={`${styles.appTableRow} ${className || ''}`}>
            {children}
        </tr>
    )
}

export default AppTableRow;