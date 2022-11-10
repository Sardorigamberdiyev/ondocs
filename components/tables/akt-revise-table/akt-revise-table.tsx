import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IBalance, ITableData } from './akt-revise-table.interfaces';
import AppDate from '../../app-date';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import AppTable from '../../app-table';
import AppTableBody from '../../app-table-body';
import styles from './akt-revise-table.module.sass';
import AktReviseTableRow from '../akt-revise-table-row';
import AppTableFoot from '../../app-table-foot';
import AppBtn from '../../app-btn';

interface IAktReviseTableProps {
    tableId: string;
    getTableData?: (tableData: ITableData) => void;
}

const initialBalance: IBalance = {
    ownerCredit: '0',
    ownerDebit: '0',
    partnerCredit: '0',
    partnerDebit: '0'
}

const AktReviseTable: FC<IAktReviseTableProps> = (props) => {
    const { tableId, getTableData } = props;

    const [contractNo, setContractNo] = useState('');
    const [contractDate, setContractDate] = useState<Date | null>(null);
    const [tableRows, setTableRows] = useState([uuidv4()]);
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [openBalance, setOpenBalance] = useState<IBalance>(initialBalance);
    const [closeBalance, setCloseBalance] = useState<IBalance>(initialBalance);
    const [totalBalance, setTotalBalance] = useState<IBalance>(initialBalance);

    useEffect(() => {
        if (getTableData)
            getTableData({
                id: tableId,
                contractNo,
                contractDate,
                verificationActContracts: dataRows,
                openBalance,
                closeBalance,
                totalBalance,
            })
    }, [
        contractNo,
        contractDate,
        openBalance,
        dataRows
    ])

    const getRowData = (rowData: any) => {
        const dataIndex = dataRows.findIndex((data) => data.id === rowData.id);

        if (dataIndex < 0)
            return setDataRows([...dataRows, rowData]);
        
        setDataRows([
            ...dataRows.slice(0, dataIndex),
            rowData,
            ...dataRows.slice(dataIndex + 1)
        ]);
    }

    const addRow = () => setTableRows([...tableRows, uuidv4()]);
    const removeRow = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length - 1));
        setDataRows(dataRows.slice(0, dataRows.length - 1));
    };

    function changeValue<T extends object>(setValue: Dispatch<SetStateAction<T>>, oldValue: T, value: string, keys: (keyof T)[]) {
        const newValue = keys.reduce((pv, cv) => {
            return {
                ...pv,
                [cv]: value
            }
        }, {});

        setValue({
            ...oldValue,
            ...newValue
        });
    }

    return (
        <div className={styles.aktReviseTable}>
            <AppTable className={styles.aktReviseTable__table}>
                <AppTableHead>
                    <AppTableRow>
                        <th>
                            <AppDate 
                            placeholder="Дата"
                            widthContainer="80%"
                            className={styles.aktReviseTable__dateInput}
                            classNamePicker={styles.aktReviseTable__datePicker}
                            selected={contractDate}
                            onChange={(date) => setContractDate(date)}/>
                        </th>
                        <th>
                            <input type="number"
                            placeholder="Номер"
                            value={contractNo}
                            onChange={(e) => setContractNo(e.target.value)} />
                        </th>
                        <th colSpan={6} />
                    </AppTableRow>
                </AppTableHead>
            </AppTable>
            <AppTable className={styles.aktReviseTable__table}>
                <AppTableBody>
                    <AppTableRow>
                        <td colSpan={2}>Сальдо начальное по договору</td>
                        <td>
                            <input 
                            type="number"
                            value={openBalance.ownerDebit}
                            onChange={({target: {value}}) => changeValue<IBalance>(
                                setOpenBalance, openBalance, value, ['ownerDebit', 'partnerCredit']
                            )} />
                        </td>
                        <td>
                            <input 
                            type="number"
                            value={openBalance.ownerCredit}
                            onChange={({target: {value}}) => changeValue<IBalance>(
                                setOpenBalance, openBalance, value, ['ownerCredit', 'partnerDebit']
                            )} />
                        </td>
                        <td colSpan={2}>Сальдо начальное по договору</td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            <input 
                            type="number"
                            disabled
                            value={openBalance.partnerDebit} />
                        </td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            <input 
                            type="number"
                            disabled
                            value={openBalance.partnerCredit} />
                        </td>
                    </AppTableRow>
                    {
                        tableRows.map((itemId) => (
                            <AktReviseTableRow
                            key={itemId}
                            rowId={itemId}
                            getRowDate={getRowData} />
                        ))
                    }
                </AppTableBody>
            </AppTable>
            <div className={styles.aktReviseTable__btns}>
                <AppBtn
                className={styles.aktReviseTable__btns__btn}
                onClick={removeRow}>
                    <i className={styles.aktReviseTable__trashIcon} />
                    Удалить последнюю строку
                </AppBtn>
                <AppBtn
                className={styles.aktReviseTable__btns__btn}
                onClick={addRow}>
                    <i className={styles.aktReviseTable__addIcon} />
                    Добавить новую строку
                </AppBtn>
            </div>
            <AppTable className={styles.aktReviseTable__table}>
                <AppTableFoot>
                    <AppTableRow>
                        <td colSpan={2}>Итого по договору</td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td colSpan={2}>Итог по договору</td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                    </AppTableRow>
                    <AppTableRow>
                        <td colSpan={2}>Сальдо конечное по договору</td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td colSpan={2}>Сальдо конечное по договору</td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                        <td className={styles.aktReviseTable__cellDisable}>
                            0.00
                        </td>
                    </AppTableRow>
                </AppTableFoot>
            </AppTable>
        </div>
    )
}

export default AktReviseTable;