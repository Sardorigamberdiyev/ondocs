import { FC, useState, useEffect } from 'react';
import { IAktReviseTableRowProps } from './akt-revise-table-row.interfaces';
import AppDate from '../../app-date';
import AppTableRow from '../../app-table-row';
import styles from './akt-revise-table-row.module.sass';

const AktReviseTableRow: FC<IAktReviseTableRowProps> = (props) => {
    const { rowId, getRowDate } = props;

    const [ownerOperationDate, setOwnerOperationDate] = useState<Date | null>(null);
    const [ownerOperationName, setOwnerOperationName] = useState('');
    const [ownerDebit, setOwnerDebit] = useState('');
    const [ownerCredit, setOwnerCredit] = useState('');
    const [partnerOperationDate, setPartnerOperationDate] = useState<Date | null>(null);
    const [partnerOperationName, setPartnerOperationName] = useState('');

    useEffect(() => {
        if (getRowDate)
            getRowDate({
                id: rowId,
                ownerOperationDate,
                ownerOperationName,
                ownerDebit,
                ownerCredit,
                partnerOperationDate,
                partnerOperationName
            })
    }, [
        ownerOperationDate,
        ownerOperationName,
        ownerDebit,
        ownerCredit,
        partnerOperationDate,
        partnerOperationName
    ])

    return (
        <AppTableRow>
            <td>
                <AppDate
                placeholder="Дата" 
                widthContainer="80%"
                className={styles.aktReviseTableRow__dateInput}
                classNamePicker={styles.aktReviseTableRow__datePicker}
                selected={ownerOperationDate}
                onChange={(date) => setOwnerOperationDate(date)} />
            </td>
            <td>
                <input 
                type="number"
                value={ownerOperationName}
                onChange={(e) => setOwnerOperationName(e.target.value)} />
            </td>
            <td>
                <input type="number"
                value={ownerDebit}
                onChange={(e) => setOwnerDebit(e.target.value)} />
            </td>
            <td>
                <input type="number"
                value={ownerCredit}
                onChange={(e) => setOwnerCredit(e.target.value)} />
            </td>
            <td>
                <AppDate
                placeholder="Дата" 
                widthContainer="80%"
                className={styles.aktReviseTableRow__dateInput}
                classNamePicker={styles.aktReviseTableRow__datePicker}
                selected={partnerOperationDate}
                onChange={(date) => setPartnerOperationDate(date)} />
            </td>
            <td>
                <input 
                type="number" 
                value={partnerOperationName}
                onChange={(e) => setPartnerOperationName(e.target.value)} />
            </td>
            <td className={styles.aktReviseTableRow__cellDisable}>
                <input 
                type="number"
                disabled
                value={ownerDebit} />
            </td>
            <td className={styles.aktReviseTableRow__cellDisable}>
                <input 
                type="number"
                disabled
                value={ownerCredit} />
            </td>
        </AppTableRow>
    )
}

export default AktReviseTableRow;