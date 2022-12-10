import { FC, useState, useEffect } from 'react';
import { LayoutTableRow } from '../../layouts';
import { AppSelect } from '../../app';
import { Option } from '../../app/app-select/app-select';

interface IAktTableRowProps {
    index: number;
    rowId?: string;
    getDataInRow?: (rowDate: any) => void;
}

const AktTableRow: FC<IAktTableRowProps> = ({ index, getDataInRow }) => {
    const [productName, setProductName] = useState('');
    const [identifiedСode, setIdentifiedСode] = useState<Option | null>(null)

    useEffect(() => {
        if (getDataInRow)
            getDataInRow({
                productName
            })
    }, [productName]);

    return (
        <LayoutTableRow index={index}>
            <td>
                <AppSelect 
                value={identifiedСode}
                valueList={[]}
                loading={false}
                styleTable
                onChange={(value) => setIdentifiedСode(value)} />
            </td>
            <td>
                <input type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            </td>
        </LayoutTableRow>
    )
}

export default AktTableRow;