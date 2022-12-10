import { FC, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeLastProduct, changeToggle } from '../../../../features/invoice-data/invoice-data';
import { LayoutTable } from '../../../layouts';
import { AppTableHead, AppTableRow, AppTableBody, AppTableFoot } from '../../../app';
import { IInvoiceTableProps } from './invoice-table.interfaces';
import { RootState } from '../../../../store/store';
import ToggleSwitch from '../../../toggle-switch';
import InvoiceTableRow from '../invoice-table-row';
import styles from './invoice-table.module.sass';

const InvoiceTable: FC<IInvoiceTableProps> = (props) => {
    const { products, hasCommittent, hasExcise, hasLgota, hasMedical } = useSelector((state: RootState) => state.invoiceData.productList);
    const dispatch = useDispatch();

    const [exciseRate, setExciseRate] = useState<'sum' | 'percent'>('sum');

    const downloadXlsxHandler = () => console.log('xlsx');
    const downloadSampleHandler = () => console.log('sample');
    const onDownloadUnitHandler = () => console.log('unit');

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'hasExcise' || name === 'hasLgota')
            dispatch(changeToggle({hasKey: name, checked}));
    }

    return (
        <div className={styles.invoiceTable}>
            <LayoutTable 
            onAddRow={() => dispatch(addProduct())}
            onRemoveRow={() => dispatch(removeLastProduct())}
            onDownloadXlsx={downloadXlsxHandler}
            onDownloadSample={downloadSampleHandler}
            onDownloadUnit={onDownloadUnitHandler}>
                <div className={styles.invoiceTable__switches}>
                    <ToggleSwitch text="Акциз"
                    inputName="hasExcise" 
                    textRowReverse
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    checked={hasExcise}
                    onChange={handleToggle} />
                    <ToggleSwitch text="Товар маркировка"
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent} 
                    textRowReverse />
                    <ToggleSwitch text="Есть льгота"
                    inputName="hasLgota" 
                    textRowReverse
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    checked={hasLgota}
                    onChange={handleToggle} />
                    <ToggleSwitch text="Обратный отсчёт" 
                    classNameText={styles.invoiceTable__switches__itemText}
                    classNameContent={styles.invoiceTable__switches__itemContent}
                    textRowReverse />
                </div>
                <div className={styles.invoiceTable__tableWrapper}>
                    <table className={styles.invoiceTable__tableWrapper__table}>
                        <AppTableHead>
                            <AppTableRow>
                                <th>№</th>
                                {hasCommittent && (
                                    <>
                                        <th>ИНН комитента</th>
                                        <th>Наименование комитента</th>
                                        <th>Рег. код плательщика НДС комитента</th>
                                    </>
                                )}
                                <th>ИКПУ и наименование товаров (работ, услуг)*</th>
                                <th>Описание товаров (работ, услуг)*</th>
                                <th>Штрих код товара/услуги</th>
                                {hasMedical && <th>Серия</th>}
                                <th>Ед. измер.*</th>
                                {hasMedical && (
                                    <>
                                        <th>Базовая цена</th>
                                        <th>% добавочной стоимость</th>
                                    </>
                                )}
                                <th>Кол-во</th>
                                <th>Цена</th>
                                {hasExcise && (
                                    <>
                                        <th>
                                            <div className={styles.invoiceTable__tableWrapper__table__exciseText}>Акциз,ставка</div>
                                            <select name="exciseRate"
                                            value={exciseRate}
                                            onChange={(e) => setExciseRate(e.target.value as 'percent' | 'sum')}>
                                                <option value="sum">Сумма</option>
                                                <option value="percent">Процентах</option>
                                            </select>
                                        </th>
                                        <th>Акциз, сумма</th>
                                    </>
                                )}
                                <th>Стоимость поставки*</th>
                                <th>НДС, %</th>
                                <th>НДС, Сумма*</th>
                                <th>Всего*</th>
                                {hasLgota && <th>Льгота</th>}
                            </AppTableRow>
                        </AppTableHead>
                        <AppTableBody>
                            {
                                products.map((product, index) => (
                                    <InvoiceTableRow 
                                        key={product.id}
                                        index={index}
                                        product={product}
                                        hasExcise={hasExcise}
                                        hasLgota={hasLgota}
                                        hasCommittent={hasCommittent}
                                        hasMedical={hasMedical} />
                                ))
                            }
                        </AppTableBody>
                        <AppTableFoot>
                            <AppTableRow>
                                <td colSpan={7 + (hasCommittent ? 3 : 0) + (hasMedical ? 3 : 0)}>Итого:</td>
                                {hasExcise && (
                                    <>
                                        <td />
                                        <td>0.00</td>
                                    </>
                                )}
                                <td>0.00</td>
                                <td></td>
                                <td>0.00</td>
                                <td>0.00</td>
                                {hasLgota && (
                                    <td />
                                )}
                            </AppTableRow>
                        </AppTableFoot>
                    </table>
                </div>
            </LayoutTable>
        </div>
    )
}

export default InvoiceTable;