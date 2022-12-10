import { FC, useState, useEffect } from 'react';
import { LayoutTableRow } from '../../layouts';
import { AppSelect } from '../../app';
import { Option } from '../../app/app-select/app-select';

interface ITreatyTableRowProps {
    index: number;
    getDataInRow?: (rowData: any) => void;
}

const TreatyTableRow: FC<ITreatyTableRowProps> = (props) => {
    const { index, getDataInRow } = props;

    const [productName, setProductName] = useState('');
    const [productBarcode, setProductBarcode] = useState('');
    const [identifiedСode, setIdentifiedCode] = useState<Option | null>(null);
    const [layoutRow, setLayoutRow] = useState({});

    useEffect(() => {
        if (getDataInRow)
            getDataInRow({
                productName,
                productBarcode,
                ...layoutRow
            })
    }, [
        productBarcode,
        productName,
        layoutRow
    ]);

    return (
        <LayoutTableRow index={index}
        getLayoutRowData={(layoutData) => setLayoutRow(layoutData)}>
            <td>
                <input type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            </td>
            <td>
                <AppSelect 
                value={identifiedСode}
                valueList={[]}
                loading={false}
                styleTable
                onChange={(value) => setIdentifiedCode(value)} />
            </td>
            <td>
                <input type="text"
                value={productBarcode}
                onChange={(e) => setProductBarcode(e.target.value)} />
            </td>
        </LayoutTableRow>
    )
}

export default TreatyTableRow;