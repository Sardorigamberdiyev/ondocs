import { FC, PropsWithChildren } from 'react';
import { IAppTableRowProps } from './app-table-row.interfaces';
import styles from './app-table-row.module.sass';

const AppTableRow: FC<PropsWithChildren<IAppTableRowProps>> = (props) => {
    const { children, className, onClick } = props;
    
    return (
        <tr className={styles.appTableRow + ' ' + className || ''}
        onClick={onClick}>
            {children}
        </tr>
    )
}

export default AppTableRow;