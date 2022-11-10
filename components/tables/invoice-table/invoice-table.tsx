import { FC, useEffect, useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import { LayoutTable } from '../../layouts';
import { Option } from '../../app-select/app-select';
import ToggleSwitch from '../../toggle-switch';
import InvoiceTableRow from '../invoice-table-row';
import styles from './invoice-table.module.sass';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import AppTableBody from '../../app-table-body';
import AppTableFoot from '../../app-table-foot';

const InvoiceTable: FC = () => {
    const [tableRows, setTableRows] = useState<string[]>([uuidv4()]);
    const [productNames, setProductNames] = useState<Option[]>([]);

    useEffect(() => {
        setProductNames([]);
    }, [])

    const addRowHandler = () => setTableRows([...tableRows, uuidv4()]);
    
    const removeRowHandler = () => {
        if (tableRows.length <= 1)
            return;

        setTableRows(tableRows.slice(0, tableRows.length - 1));
    }

    const downloadXlsxHandler = () => console.log('xlsx');
    const downloadSampleHandler = () => console.log('sample');
    const onDownloadUnitHandler = () => console.log('unit');
    const getDataInRow = (rowData: any) => console.log(rowData);

    return (
        <div className={styles.invoiceTable}>
            <LayoutTable 
            onAddRow={addRowHandler}
            onRemoveRow={removeRowHandler}
            onDownloadXlsx={downloadXlsxHandler}
            onDownloadSample={downloadSampleHandler}
            onDownloadUnit={onDownloadUnitHandler}>
                <div className={styles.invoiceTable__switches}>
                    <ToggleSwitch text="Акциз" 
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    textRowReverse />
                    <ToggleSwitch text="Акциз"
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent} 
                    textRowReverse />
                    <ToggleSwitch text="Есть льгота" 
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    textRowReverse />
                    <ToggleSwitch text="Обратный отсчёт" 
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    textRowReverse />
                </div>
                <table className={styles.invoiceTable__table}>
                    <AppTableHead>
                        <AppTableRow>
                            <th>№</th>
                            <th>ИКПУ и наименование товаров (работ, услуг)*</th>
                            <th>Описание товаров (работ, услуг)*</th>
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
                            tableRows.map((item, index) => (
                                <InvoiceTableRow 
                                    key={item}
                                    rowId={item}
                                    index={index}
                                    productNames={productNames}
                                    getDataInRow={getDataInRow} />
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
        </div>
    )
}

export default InvoiceTable;