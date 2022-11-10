import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import AppTableBody from '../../app-table-body';
import AppTableFoot from '../../app-table-foot';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import TtnTableRow from '../ttn-table-row';
import styles from './ttn-table.module.sass';

const TtnTable: FC = () => {
    const [tableRows, setTableRows] = useState([uuidv4()]);

    const addRow = () => setTableRows([...tableRows, uuidv4()]);
    const removeRow = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length - 1));
    }

    return (
        <LayoutTable
        onAddRow={addRow}
        onRemoveRow={removeRow}>
            <table className={styles.ttnTable__table}>
                <AppTableHead>
                    <AppTableRow>
                        <th>№</th>
                        <th>Иденцификационный код и название товаров (услуг)</th>
                        <th>Наименование товаров</th>
                        <th>Ед. измер.*</th>
                        <th>Стоимость за еденицу товара</th>
                        <th>Кол-во</th>
                        <th>Общая стоимость груза</th>
                        <th>Стоимость автоперевозки</th>
                        <th>С грузом следуют документа</th>
                        <th>Способ определения груза</th>
                        <th>Класс груза</th>
                        <th>Масса брутто, тн</th>
                        <th>Масса нетто, тн</th>
                    </AppTableRow>
                </AppTableHead>
                <AppTableBody>
                    {
                        tableRows.map((itemId, index) => (
                            <TtnTableRow 
                            key={itemId}
                            index={index + 1}
                            rowId={itemId} />
                        ))
                    }
                </AppTableBody>
                <AppTableFoot>
                    <AppTableRow>
                        <td colSpan={5}>Итого: </td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </AppTableRow>
                </AppTableFoot>
            </table>
        </LayoutTable>
    )
}

export default TtnTable;