import { FC, useEffect } from 'react';
import { AppSelect, AppTableRow } from '../../app';
import { Option } from '../../app/app-select/app-select';
import { IProductTableRowProps } from './product-table-row.interfaces';

const ProductTableRow: FC<IProductTableRowProps> = (props) => {
    const { index, className, getLayoutRowData, disableInput } = props;

    useEffect(() => {
        if (getLayoutRowData)
            getLayoutRowData({})
    }, [])

    return (
        <AppTableRow className={className || ''}>
            <td>{index + 1}</td>
            <td>
                { !disableInput ? (
                    <AppSelect 
                    valueList={[]}
                    value={null}
                    loading={false}
                    name=""
                    styleTable />
                ) : (
                    <input type="text"
                    disabled={disableInput} />
                ) }
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                { !disableInput ? (
                    <AppSelect 
                    valueList={[]}
                    value={null}
                    loading={false}
                    styleTable />
                ) : (
                    <input type="text"
                    disabled={disableInput} />
                )}
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="number"  />
            </td>
        </AppTableRow>
    )
}

export default ProductTableRow;