import { FC, PropsWithChildren } from 'react';
import { IAppTableBodyProps } from './app-table-body.props';
import styles from './app-table-body.module.sass';

const AppTableBody: FC<PropsWithChildren<IAppTableBodyProps>> = ({children, className}) => {
    return (
        <tbody className={`${styles.appTableBody} ${className || ''}`}>
            {children}
        </tbody>
    )
}

export default AppTableBody;