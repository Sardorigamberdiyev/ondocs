import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import AppTableBody from '../../app-table-body';
import AppTableFoot from '../../app-table-foot';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import AktTableRow from '../akt-table-row';
import styles from './akt-table.module.sass';

const AktTable: FC = () => {
    const [tableRows, setTableRows] = useState([uuidv4()]);

    const addRow = () => setTableRows([...tableRows, uuidv4()]);
    const removeRow = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length -1))
    }

    return (
        <LayoutTable
        onAddRow={addRow}
        onRemoveRow={removeRow}
        onDownloadXlsx={() => console.log('xlsx')}
        onDownloadSample={() => console.log('sample')}>
            <table className={styles.aktTable__table}>
                <AppTableHead>
                    <AppTableRow>
                        <th>№</th>
                        <th>Идентификационный код и название товара (услуг)</th>
                        <th>Наименование товаров (услуг)*</th>
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
                            <AktTableRow 
                            key={itemId}
                            index={index}
                            rowId={itemId} />
                        ))
                    }
                </AppTableBody>
                <AppTableFoot>
                    <AppTableRow>
                        <td colSpan={6}>Итого:</td>
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

export default AktTable;