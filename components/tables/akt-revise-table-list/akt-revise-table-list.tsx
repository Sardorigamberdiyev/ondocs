import { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import { IAktReviseTableListProps } from './akt-revise-table-list.interfaces';
import AppTable from '../../app-table';
import AppTableFoot from '../../app-table-foot';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import AktReviseTable from '../akt-revise-table/akt-revise-table';
import styles from './akt-revise-table-list.module.sass';

const AktReviseTableList: FC<IAktReviseTableListProps> = ({getAktTableData}) => {
    const [tableList, setTableList] = useState([uuidv4()]);
    const [tableListData, setTableListData] = useState<any[]>([]);

    useEffect(() => {
        if (getAktTableData)
            getAktTableData(tableListData)
    }, [
        tableListData
    ])

    const addTable = () => setTableList([...tableList, uuidv4()]);
    const removeTable = () => {
        if (tableList.length <= 1)
            return;

        setTableList(tableList.slice(0, tableList.length - 1));
        setTableListData(tableListData.slice(0, tableListData.length - 1));
    }

    const getTableData = (tableData: any) => {
        console.log(tableData);
        const tableIndex = tableListData.findIndex((itemData) => itemData.id === tableData.id);

        if (tableIndex < 0)
            return setTableListData([...tableListData, tableData]);

        setTableListData([
            ...tableListData.slice(0, tableIndex),
            tableData,
            ...tableListData.slice(tableIndex + 1)
        ])
    }

    return (
        <LayoutTable
        classNameBtn={styles.aktReviseTableList__layoutBtn}
        totalDisabled
        addBtnText="Добавить таблицу"
        removeBtnText="Удалить последнюю таблицу"
        onAddRow={addTable}
        onRemoveRow={removeTable}>
            <AppTable className={styles.aktReviseTableList__table}
            style={{marginBottom: '0'}}>
                <AppTableHead>
                    <AppTableRow>
                        <th colSpan={4}>По данным "Raqamli Dunyo" OOO, сум</th>
                        <th colSpan={4}>По данным Ахматов Отабек  Рахмат угли, Сум</th>
                    </AppTableRow>
                    <AppTableRow>
                        <td>Дата</td>
                        <td>Документ</td>
                        <td>Дебет</td>
                        <td>Кредит</td>
                        <td>Дата</td>
                        <td>Документ</td>
                        <td>Дебет</td>
                        <td>Кредит</td>
                    </AppTableRow>
                </AppTableHead>
            </AppTable>
            {
                tableList.map((itemId) => (
                    <AktReviseTable 
                    key={itemId}
                    tableId={itemId}
                    getTableData={getTableData} />
                ))
            }
            <AppTable className={styles.aktReviseTableList__table}>
                <AppTableFoot>
                    <AppTableRow>
                        <td colSpan={2}>Обороты за период</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td colSpan={2}>Обороты за период</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                    </AppTableRow>
                    <AppTableRow>
                        <td colSpan={2}>Сальдо конечное</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td colSpan={2}>Сальдо конечное</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                        <td className={styles.aktReviseTableList__cellDisable}>0.00</td>
                    </AppTableRow>
                </AppTableFoot>
            </AppTable>
        </LayoutTable>
    )
}

export default AktReviseTableList;