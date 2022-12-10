import { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeProduct } from '../../../../features/invoice-data/invoice-data';
import { AppSelect, AppTableRow } from '../../../app';
import { IInvoiceTableRowProps } from './invoice-table-row.interfaces';
import { IProduct } from '../../../../features/invoice-data/invoice-data.types';
import { Option } from '../../../app/app-select/app-select';
import styles from './invoice-table-row.module.sass';

const InvoiceTableRow: FC<IInvoiceTableRowProps> = (props) => {
    const { 
        index, 
        product, 
        onlyView,
        hasExcise, 
        hasLgota, 
        hasCommittent, 
        hasMedical 
    } = props;

    const dispatch = useDispatch();

    const handleChange = (productKey: keyof Omit<IProduct, 'id'>) => (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (!onlyView)
            dispatch(changeProduct({
                productId: product.id,
                productKey,
                productValue: value
            }))
    }

    return (
        <AppTableRow>
            <td>{index + 1}</td>
            {hasCommittent && (
                <>
                    <td>
                        <input type="text"
                        name="committentTin"
                        value={product.committentTin}
                        readOnly={onlyView}
                        disabled={onlyView}
                        onChange={handleChange('committentTin')} />
                    </td>
                    <td>
                        <input type="text"
                        name="committentName"
                        readOnly={onlyView}
                        disabled={onlyView}
                        value={product.committentName}
                        onChange={handleChange('committentName')} />
                    </td>
                    <td>
                        <input type="text"
                        name="committentVatRegCode"
                        readOnly={onlyView}
                        disabled={onlyView}
                        value={product.committentVatRegCode}
                        onChange={handleChange('committentVatRegCode')} />
                    </td>
                </>
            )}
            <td>
                { !onlyView ? (
                    <AppSelect
                    name="catalog"
                    valueList={[]}
                    value={null}
                    loading={false}
                    styleTable />
                ) : (
                    <input 
                    type="text"
                    name="catalog"
                    value={product && `${product.catalogCode} ${product.catalogName}`}
                    disabled={onlyView}
                    readOnly={onlyView} />
                ) }
            </td>
            <td>
                <input type="text"
                name="name"
                readOnly={onlyView}
                disabled={onlyView}
                value={product.name}
                onChange={handleChange('name')} />
            </td>
            <td>
                <input type="text"
                name="barcode"
                readOnly={onlyView}
                disabled={onlyView}
                value={product.barcode}
                onChange={handleChange('barcode')} />
            </td>
            {hasMedical && (
                <td>
                    <input type="text"
                    name="serial"
                    readOnly={onlyView}
                    disabled={onlyView}
                    value={product.serial}
                    onChange={handleChange('serial')} />
                </td>
            )}
            <td>
                { !onlyView ? (
                    <AppSelect
                    name="measureId" 
                    valueList={[]}
                    value={null}
                    loading={false}
                    styleTable />
                ) : (
                    <input type="text"
                    name="measureId"
                    readOnly={onlyView}
                    disabled={onlyView} />
                ) }
            </td>
            {hasMedical && (
                <>
                    <td>
                        <input type="number"
                        name="baseSumma"
                        readOnly={onlyView}
                        disabled={onlyView}
                        value={product.baseSumma}
                        onChange={handleChange('baseSumma')} />
                    </td>
                    <td>
                        <input type="number"
                        name="profitRate"
                        readOnly={onlyView}
                        disabled={onlyView}
                        value={product.profitRate}
                        onChange={handleChange('profitRate')} />
                    </td>
                </>
            )}
            <td>
                <input type="number"
                name="count"
                readOnly={onlyView}
                disabled={onlyView}
                value={product.count}
                onChange={handleChange('count')} />
            </td>
            <td>
                <input type="number"
                name="summa" 
                disabled={onlyView}
                readOnly={onlyView}
                value={product.summa}
                onChange={handleChange('summa')} />
            </td>
            {hasExcise && (
                <>
                    <td>
                        <input type="number"
                        name="exciseRate"
                        value={product.exciseRate}
                        readOnly={onlyView}
                        disabled={onlyView}
                        onChange={handleChange('exciseRate')} />
                    </td>
                    <td>
                        <input type="number"
                        name="exciseSum"
                        readOnly
                        disabled={onlyView}
                        value={product.exciseSum} />
                    </td>
                </>
            )}
            <td>
                <input type="number" 
                name="deliverySum"
                disabled={onlyView}
                value={product.deliverySum}
                onChange={handleChange('deliverySum')} />
            </td>
            <td>
                { !onlyView ? (
                    <AppSelect 
                    name="vatRate"
                    valueList={[]}
                    value={null}
                    loading={false}
                    styleTable />
                ) : (
                    <input type="text"
                    name="vatRate"
                    disabled={onlyView}
                    value={product.vatRate}
                    readOnly />
                )}
            </td>
            <td>
                <input type="number"
                name="vatSum"
                disabled={onlyView}
                value={product.vatSum}
                onChange={handleChange('vatSum')} />
            </td>
            <td>
                <input type="number" 
                name="total"
                disabled={onlyView}
                readOnly />
            </td>
            {hasLgota && (
                <td>
                    { !onlyView ? (
                        <AppSelect
                        name="lgota"
                        value={null}
                        valueList={[]}
                        loading={false}
                        styleTable />
                    ) : (
                        <input type="text"
                        readOnly={onlyView}
                        disabled={onlyView} />
                    )}
                </td>
            )}
        </AppTableRow>
    )
}

export default InvoiceTableRow;