import { FC, useState } from 'react';
import AppBtn from '../../app-btn';
import AppSelect from '../../app-select';
import { Option } from '../../app-select/app-select';
import ToggleSwitch from '../../toggle-switch';
import styles from './invoice-table.module.sass';

interface ITableData {
    id: string;
    productNames: Option[];
    productDescription: string;
    productBarcode: string;
    units: Option[];
    amount: string;
    price: string;
    deliveryСost: string;
    ndsPercents: Option[];
    ndsSum: string;
    total: string
}

type StateTableValue = Omit<ITableData, 'productNames' | 'units' | 'ndsPercents'> & {
    productsName: ITableData['productNames'][0];
    units: ITableData['units'][0];
    ndsPercent: ITableData['ndsPercents'][0];
}

const tableData: ITableData[] = [
    {
        id: 'фуйцу',
        productNames: [{label: 'Анор', value: 'анор'}, {label: 'Нок', value: 'нок'}],
        productDescription: '',
        productBarcode: '',
        units: [{label: 'Штука', value: 'штука'}],
        amount: '',
        price: '',
        deliveryСost: '',
        ndsPercents: [{label: 'Без ндс', value: 'безндс'}],
        ndsSum: '',
        total: ''
    }
]

const InvoiceTable: FC = () => {
    const [data, setData] = useState<StateTableValue | null>(null);

    return (
        <div className={styles.invoiceTable}>
            <div className={styles.invoiceTable__downloads}>
                <div className={styles.invoiceTable__downloads__item}>
                    <i className={styles.invoiceTable__downloadIcon} />
                    <span>Загрузить Excel</span>
                </div>
                <div className={styles.invoiceTable__downloads__item}>
                    <i className={styles.invoiceTable__downloadIcon} />
                    <span>Скачать шаблон</span>
                </div>
                <div className={styles.invoiceTable__downloads__item}>
                    <i className={styles.invoiceTable__downloadIcon} />
                    <span>Список ед.измерений</span>
                </div>
            </div>
            <div className={styles.invoiceTable__switches}>
                <ToggleSwitch text="Акциз" 
                className={styles.invoiceTable__switches__item}
                textRowReverse />
                <ToggleSwitch text="Акциз"
                className={styles.invoiceTable__switches__item} 
                textRowReverse />
                <ToggleSwitch text="Есть льгота" 
                className={styles.invoiceTable__switches__item}
                textRowReverse />
                <ToggleSwitch text="Обратный отсчёт" 
                className={styles.invoiceTable__switches__item}
                textRowReverse />
            </div>
            <table className={styles.invoiceTable__table}>
                <thead>
                    <tr>
                        <th></th>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data, idx) => {
                            return (
                                <tr key={data.id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <AppSelect
                                        valueList={data.productNames}
                                        value={null}
                                        loading={false} />
                                    </td>
                                    <td>
                                        <input type="text"  />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <AppSelect 
                                        valueList={data.units}
                                        value={null}
                                        loading={false} />
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <input type="number"/>
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <AppSelect 
                                        valueList={data.ndsPercents}
                                        value={null}
                                        loading={false} />
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.invoiceTable__footer}>
                <div className={styles.invoiceTable__total}>Итого: 0,00</div>
                <div className={styles.invoiceTable__btnsWrapper}>
                    <AppBtn className={styles.invoiceTable__btn}>
                        <i className={styles.invoiceTable__trashIcon} />
                        <span>Удалить строку</span>
                    </AppBtn>
                    <AppBtn className={styles.invoiceTable__btn}>
                        <i className={styles.invoiceTable__addIcon} />
                        <span>Добавить строку</span>
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default InvoiceTable;