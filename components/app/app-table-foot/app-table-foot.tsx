import { FC, PropsWithChildren } from 'react';
import styles from './app-table-foot.module.sass';

const AppTableFoot: FC<PropsWithChildren> = ({children}) => {
    return (
        <tfoot className={styles.appTableFoot}>
            {children}
        </tfoot>
    )
}

export default AppTableFoot;