import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import AppTableRow from '../../app-table-row';
import styles from './treaty-table.module.sass';
import TreatyTableRow from '../treaty-table-row';
import AppTableFoot from '../../app-table-foot';
import AppTableBody from '../../app-table-body';
import AppTableHead from '../../app-table-head';

const TreatyTable: FC = () => {
    const [tableRows, setTableRows] = useState([uuidv4()]);

    const addRow = () => setTableRows([...tableRows, uuidv4()]);
    const removeRow = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length - 1))
    }

    return (
        <LayoutTable 
        onAddRow={addRow}
        onRemoveRow={removeRow}
        onDownloadXlsx={() => console.log('xlsx')}
        onDownloadSample={() => console.log('sample')}>
            <table className={styles.treatyTable__table}>
                <AppTableHead>
                    <AppTableRow>
                        <th>№</th>
                        <th>Наименование товаров (услуг)*</th>
                        <th>Идентификационный код и название товаров(услуг)*</th>
                        <th>Штрих код товара/услуги</th>
                        <th>Ед. измер.*</th>
                        <th>Кол-во</th>
                        <th>Цена</th>
                        <th>Стоимость поставки*</th>
                        <th>НДС, %</th>
                        <th>НДС, Сумма*</th>
                        <th>Всего*</th>
                    </AppTableRow>
                </AppTableHead>
                <AppTableBody>
                    {
                        tableRows.map((itemId, index) => (
                            <TreatyTableRow 
                            key={itemId}
                            index={index}
                            getDataInRow={(rowData) => console.log(rowData)} />
                        ))
                    }
                </AppTableBody>
                <AppTableFoot>
                    <AppTableRow>
                        <td colSpan={7}>Итого:</td>
                        <td>0.00</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </AppTableRow>
                </AppTableFoot>
            </table>
        </LayoutTable>
    )
}

export default TreatyTable;