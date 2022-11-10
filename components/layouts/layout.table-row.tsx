import { FC, useState, PropsWithChildren, useEffect } from 'react';
import { ILayoutTableProps } from './layout.interfaces';
import { ndsPercentsData, unitsData } from '../../common/data.variables';
import { Option } from '../app-select/app-select';
import AppSelect from '../app-select';
import AppTableRow from '../app-table-row';

const LayoutTableRow: FC<PropsWithChildren<ILayoutTableProps>> = (props) => {
    const { children, index, className, getLayoutRowData } = props;

    const [unit, setUnit] = useState<Option | null>(null);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [deliveryСost, setDeliveryСost] = useState(0);
    const [ndsPercent, setNdsPercent] = useState<Option | null>(ndsPercentsData[0]);
    const [ndsSum, setNdsSum] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (getLayoutRowData)
            getLayoutRowData({
                unit,
                amount,
                price,
                deliveryСost,
                ndsPercent,
                ndsSum,
                total
            })
    }, [
        unit,
        amount,
        price,
        deliveryСost,
        ndsPercent,
        ndsSum,
        total
    ])

    return (
        <AppTableRow className={className || ''}>
            <td>{index + 1}</td>
            {children}
            <td>
                <AppSelect 
                valueList={unitsData}
                value={unit}
                loading={false}
                styleTable
                onChange={(value) => setUnit(value)} />
            </td>
            <td>
                <input type="number"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                value={price}
                onChange={(e) => setPrice(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                value={deliveryСost}
                onChange={(e) => setDeliveryСost(+e.target.value)} />
            </td>
            <td>
                <AppSelect 
                valueList={ndsPercentsData}
                value={ndsPercent}
                loading={false}
                styleTable
                onChange={(value) => setNdsPercent(value)} />
            </td>
            <td>
                <input type="number"
                value={ndsSum}
                onChange={(e) => setNdsSum(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                value={total}
                onChange={(e) => setTotal(+e.target.value)} />
            </td>
        </AppTableRow>
    )
}

export default LayoutTableRow;