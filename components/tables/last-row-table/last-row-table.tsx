import { FC } from 'react';
import { ILastRowTableProps } from './last-row-table.props';
import AppTableRow from '../../app-table-row';
import styles from './last-row-table.module.sass';

const LastRowTable: FC<ILastRowTableProps> = (props) => {
    const { firstTdColSpan, deliveryСostTotal, ndsSumTotal, total } = props;
    return (
        <AppTableRow className={styles.lastRowTable}>
            <td colSpan={firstTdColSpan || 7}>Итого:</td>
            <td>{deliveryСostTotal || '0.00'}</td>
            <td></td>
            <td>{ndsSumTotal || '0.00'}</td>
            <td>{total || '0.00'}</td>
        </AppTableRow>
    )
}

export default LastRowTable;