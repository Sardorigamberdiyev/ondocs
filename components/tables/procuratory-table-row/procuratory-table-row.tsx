import { FC, useEffect, useState } from 'react';
import { Option } from '../../app-select/app-select';
import AppTableRow from '../../app-table-row';
import AppSelect from '../../app-select';
import styles from './procuratory-table-row.module.sass';

interface IProcuratoryTableRowProps {
    rowId?: string;
    index: number;
    utils?: Option[];
    codeProductNameList?: Option[];
    getDataInRow: (rowData: any) => void;
}

const ProcuratoryTableRow: FC<IProcuratoryTableRowProps> = (props) => {
    const { rowId, index, utils, codeProductNameList, getDataInRow } = props;

    const [productName, setProductName] = useState('');
    const [codeProductName, setCodeProductName] = useState<Option | null>(null);
    const [util, setUtil] = useState<Option | null>(null);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        getDataInRow({
            id: rowId,
            productName, 
            codeProductName, 
            util, 
            amount
        })
    }, [productName, codeProductName, util, amount]);

    return (
        <AppTableRow className={styles.procuratoryTableRow}>
            <td>{index}</td>
            <td>
                <AppSelect 
                value={codeProductName}
                valueList={codeProductNameList}
                loading={false}
                styleTable
                onChange={(value) => setCodeProductName(value)} />
            </td>
            <td>
                <input type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            </td>
            <td>
                <AppSelect
                value={util}
                valueList={utils}
                loading={false} 
                styleTable
                onChange={(value) => setUtil(value)} />
            </td>
            <td>
                <input type="number"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)} />
            </td>
        </AppTableRow>
    )
}

export default ProcuratoryTableRow;