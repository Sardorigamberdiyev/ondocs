import { FC } from 'react';
import { unitsData } from '../../../common/data.variables';
import AppSelect from '../../app-select';
import AppTableRow from '../../app-table-row';

interface ITtnTableRowProps {
    index: number;
    rowId: string;
}

const TtnTableRow: FC<ITtnTableRowProps> = (props) => {
    const { index, rowId } = props;
    return (
        <AppTableRow>
            <td>{index}</td>
            <td>
                <AppSelect 
                value={null}
                valueList={[]}
                loading={false}
                styleTable />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <AppSelect
                value={null}
                valueList={unitsData}
                loading={false}
                styleTable />
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="text" />
            </td>
        </AppTableRow>
    )
}

export default TtnTableRow;