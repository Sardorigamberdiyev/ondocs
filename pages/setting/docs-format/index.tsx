import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import { AppLabel, AppSelect, AppTable, AppTableBody, AppTableHead, AppTableRow } from '../../../components/app';
import DocsFormatTableRow from '../../../components/pages/docs/docs-format-table-row';
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