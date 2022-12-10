import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import { AppTableBody, AppTableHead, AppTableRow } from '../../app';
import ProcuratoryTableRow from '../procuratory-table-row';
import styles from './procuratory-table.module.sass';

const ProcuratoryTable: FC = () => {
    const [tableRows, setTableRows] = useState([uuidv4()]);

    const addRowHandler = () => setTableRows([...tableRows, uuidv4()]);

    const removeRowHandler = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length - 1));
    }

    const getDataInRow = (rowData: any) => console.log(rowData);

    const downloadXlsxHandler = () => console.log('exel');
    const downloadSampleHandler = () => console.log('sample');

    return (
        <div className={styles.procuratoryTable}>
            <LayoutTable
            onAddRow={addRowHandler}
            onRemoveRow={removeRowHandler}
            onDownloadXlsx={downloadXlsxHandler}
            onDownloadSample={downloadSampleHandler}>
                <table className={styles.procuratoryTable__table}>
                    <AppTableHead>
                        <AppTableRow>
                            <th>№</th>
                            <th>Идентификационный код и название товаров (услуг)</th>
                            <th>Наименование товаров (услуг)*</th>
                            <th>Ед измер.*</th>
                            <th>Кол-во*</th>
                        </AppTableRow>
                    </AppTableHead>
                    <AppTableBody>
                        {
                            tableRows.map((rowId, index) => (
                                <ProcuratoryTableRow 
                                key={rowId}
                                index={index + 1}
                                rowId={rowId}
                                getDataInRow={getDataInRow} />
                            ))
                        }
                    </AppTableBody>
                </table>
            </LayoutTable>
        </div>
    )
}

export default ProcuratoryTable;