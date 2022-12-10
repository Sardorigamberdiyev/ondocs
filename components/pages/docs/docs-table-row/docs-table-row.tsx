import { FC } from 'react';
import { IDocsTableRowProps } from './docs-table-row.interfaces';
import { AppTableRow } from '../../../app';
import styles from './docs-table-row.module.sass';

const DocsTableRow: FC<IDocsTableRowProps> = (props) => {
    const { checkboxDisabled, checkedListValue, value, onChange, onClick } = props;

    return (
        <AppTableRow className={styles.docsTableRow}
        onClick={onClick}>
            <td>
                {checkboxDisabled && (
                    <input type="checkbox"
                    checked={checkedListValue?.includes(value || '')}
                    value={value}
                    onChange={onChange} />
                )}
            </td>
            <td>
                <div />
            </td>
            <td>счет-фактура (БХ)</td>
            <td>09.03.2021</td>
            <td>OOO VENKON GROUP</td>
            <td>374 347 343</td>
            <td>9999888899999</td>
            <td>02-53519 от 28.02.2021</td>
            <td>публичная оферта от 15.12.2020</td>
            <td>1 000 000 сум</td>
            <td />
        </AppTableRow>
    )
}

export default DocsTableRow;