import { FC, useState, PropsWithChildren, useEffect } from 'react';
import { AppSelect, AppTableRow } from '../../app';
import { Option } from '../../app/app-select/app-select';
import { ILayoutTableRowProps } from './layout-table-row.interfaces';
import { ndsPercentsData, unitsData } from '../../../common/variables/data.variables';

const LayoutTableRow: FC<PropsWithChildren<ILayoutTableRowProps>> = (props) => {
    const { children, index, className, getLayoutRowData, disableInput } = props;

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
                { !disableInput ? (
                    <AppSelect 
                    valueList={unitsData}
                    value={unit}
                    loading={false}
                    styleTable
                    onChange={(value) => setUnit(value)} />
                ) : (
                    <input type="text"
                    disabled={disableInput} />
                ) }
            </td>
            <td>
                <input type="number"
                disabled={disableInput}
                value={amount}
                onChange={(e) => setAmount(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                disabled={disableInput}
                value={price}
                onChange={(e) => setPrice(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                disabled={disableInput}
                value={deliveryСost}
                onChange={(e) => setDeliveryСost(+e.target.value)} />
            </td>
            <td>
                { !disableInput ? (
                    <AppSelect 
                    valueList={ndsPercentsData}
                    value={ndsPercent}
                    loading={false}
                    styleTable
                    onChange={(value) => setNdsPercent(value)} />
                ) : (
                    <input type="text"
                    disabled={disableInput} />
                )}
            </td>
            <td>
                <input type="number"
                disabled={disableInput}
                value={ndsSum}
                onChange={(e) => setNdsSum(+e.target.value)} />
            </td>
            <td>
                <input type="number" 
                disabled={disableInput}
                value={total}
                onChange={(e) => setTotal(+e.target.value)} />
            </td>
        </AppTableRow>
    )
}

export default LayoutTableRow;