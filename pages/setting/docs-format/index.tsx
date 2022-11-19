import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import AppLabel from '../../../components/app-label';
import AppSelect from '../../../components/app-select';
import AppTable from '../../../components/app-table';
import AppTableBody from '../../../components/app-table-body';
import AppTableHead from '../../../components/app-table-head';
import AppTableRow from '../../../components/app-table-row';
import DocsFormatTableRow from '../../../components/tables/docs-format-table-row';
import styles from './docs-format.module.sass';

const DocsFormat: FC = () => {
    return (
        <LayoutSetting
        currentPage="docs-format">
            <div className={styles.docsFormat}>
                <AppLabel text="Выберите формат документов"
                className={styles.docsFormat__select}>
                    <AppSelect
                    value={null}
                    valueList={[]}
                    loading={false} />
                </AppLabel>
                <AppTable className={styles.docsFormat__table}>
                    <AppTableHead>
                        <AppTableRow>
                            <th>№</th>
                            <th>Название формата документа</th>
                            <th />
                        </AppTableRow>
                    </AppTableHead>
                    <AppTableBody>
                        <DocsFormatTableRow
                        index={1}
                        docsFormat={{id: '1', name: 'Установка техники'}}
                        onDeleteDocsFormat={(id) => console.log(id)} />
                    </AppTableBody>
                </AppTable>
            </div>
        </LayoutSetting>
    )
}

export default DocsFormat;