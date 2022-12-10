import { ChangeEvent, FC } from 'react';
import { useRouter } from 'next/router';

import { IDocsTableProps } from './docs-table.interfaces';
import { AppTable, AppTableBody, AppTableHead, AppTableRow } from '../../../app';
import DocsTableRow from '../docs-table-row';
import styles from './docs-table.module.sass';

const DocsTable: FC<IDocsTableProps> = (props) => {
    const { checkbox, checkedAll, setCheckedAll, tableData } = props;
    const router = useRouter();

    const fullChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;

        if (checked && setCheckedAll)
            setCheckedAll(value.split(','));
        else if (setCheckedAll)
            setCheckedAll([]);
    }

    const checkboxControl = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        if (checked && setCheckedAll && checkedAll) 
            setCheckedAll([...checkedAll, value]);
        else if (setCheckedAll && checkedAll)
            setCheckedAll(checkedAll.filter((c) => c !== value));
    }

    const isChecked = JSON.stringify(tableData) === JSON.stringify(checkedAll);

    return (
        <AppTable className={styles.docsTable}>
            <AppTableHead>
                <AppTableRow>
                    <th>
                        {checkbox && (
                            <input type="checkbox"
                            value={tableData}
                            checked={isChecked}
                            onChange={fullChecked} />
                        )}
                    </th>
                    <th>статус</th>
                    <th>тип документа</th>
                    <th>дата обновления</th>
                    <th>контрагент</th>
                    <th>инн</th>
                    <th>номер и дата документа</th>
                    <th>номер и дата договора</th>
                    <th>стоимость подставки</th>
                    <th>сумма ндс</th>
                    <th>
                        <i className={styles.docsTable__settingIcon} />
                    </th>
                </AppTableRow>
            </AppTableHead>
            <AppTableBody>
                {
                    tableData.map((item, index) => (
                        <DocsTableRow 
                        key={index}
                        checkboxDisabled={checkbox}
                        checkedListValue={checkedAll}
                        value={item}
                        onChange={checkboxControl}
                        onClick={() => router.push(`/inner-docs/${item}`)} />
                    ))
                }
            </AppTableBody>
        </AppTable>
    )
}

export default DocsTable;