import { FC } from 'react';
import { IDocsTableProps } from './docs-table.interfaces';
import AppTable from '../../app-table';
import AppTableBody from '../../app-table-body';
import AppTableHead from '../../app-table-head';
import AppTableRow from '../../app-table-row';
import styles from './docs-table.module.sass';
import DocsTableRow from '../docs-table-row';

const DocsTable: FC<IDocsTableProps> = ({checkbox}) => {
    return (
        <AppTable className={styles.docsTable}>
            <AppTableHead>
                <AppTableRow>
                    <th>
                        {checkbox && (
                            <input type="checkbox" />
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
                <DocsTableRow checkboxDisabled={checkbox} />
                <DocsTableRow checkboxDisabled={checkbox} />
                <DocsTableRow checkboxDisabled={checkbox} />
            </AppTableBody>
        </AppTable>
    )
}

export default DocsTable;