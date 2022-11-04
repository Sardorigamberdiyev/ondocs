import { FC, useState, useEffect } from 'react';
import { Option } from '../../app-select/app-select';
import { LayoutTableRow } from '../../layouts';
import AppSelect from '../../app-select';
import styles from './invoice-table-row.module.sass';

interface ITablesRowProps {
    index: number;
    rowId: string;
    productNames: Option[];
    getDataInRow: (rowData: any) => void;
}

const InvoiceTableRow: FC<ITablesRowProps> = (props) => {
    const { productNames, index, rowId, getDataInRow } = props;
    
    const [productName, setProductName] = useState<Option | null>(null);
    const [productDescription, setProductDescription] = useState('');
    const [productBarcode, setProductBarcode] = useState('');
    const [layoutRow, setLayoutRow] = useState({});


    useEffect(() => {
        if (getDataInRow)
            getDataInRow({
                id: rowId,
                productName,
                productDescription,
                productBarcode,
                ...layoutRow
            })
    }, [
        productName,
        productDescription,
        productBarcode,
        layoutRow
    ]);

    const getLayoutRowData = (layoutData: any) => {
        setLayoutRow(layoutData);
    }

    return (
        <LayoutTableRow className={styles.invoiceTableRow}
        getLayoutRowData={getLayoutRowData}
        index={index}>
            <td>
                <AppSelect
                valueList={productNames}
                value={productName}
                loading={false}
                styleTable
                onChange={(value) => setProductName(value)} />
            </td>
            <td>
                <input type="text"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)} />
            </td>
            <td>
                <input type="text"
                value={productBarcode}
                onChange={(e) => setProductBarcode(e.target.value)} />
            </td>
        </LayoutTableRow>
    )
}

export default InvoiceTableRow;