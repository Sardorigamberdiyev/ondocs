import { FC, useState } from 'react';
import { LayoutMain } from '../../components/layouts';
import { IDocsTableFilterProps } from '../../components/pages/docs/docs-table-filter/docs-table-filter.interfaces';
import { AppCard, AppPagination } from '../../components/app';
import { DocsActions, DocsFilterForm, DocsTable, DocsTableFilter } from '../../components/pages/docs';
import styles from './incoming.module.sass';

const Incoming: FC = () => {
    const [filterActive, setFilterActive] = useState<IDocsTableFilterProps['filterActive']>('filter-one');
    const [checkedAll, setCheckedAll] = useState<string[]>([]);

    return (
        <LayoutMain pageName="Исходящие (3)">
            <AppCard className={styles.incoming__card}>
                <DocsFilterForm />
            </AppCard>
            <div className={styles.incoming__table}>
                <DocsTableFilter
                filterActive={filterActive}
                filterOneText="Ожидают подписи партнера (2)"
                filterTwoText="Подписан (1)"
                filterThreeText="Отменён (0)"
                filterOneClick={() => setFilterActive('filter-one')}
                filterTwoClick={() => setFilterActive('filter-two')}
                filterThreeClick={() => setFilterActive('filter-three')} />
                <AppCard className={styles.incoming__table__wrapper}>
                    <DocsTable 
                    checkbox
                    tableData={['123', '232', '111']}
                    checkedAll={checkedAll}
                    setCheckedAll={setCheckedAll} />
                </AppCard>
            </div>
            <DocsActions
            cancelClick={() => console.log('cancelClick')}
            cancelBtnDisabled={!!!checkedAll.length}
            getLimit={(limit) => console.log('limit = ', limit)}
            xlsxClick={() => console.log('xlsxClick')}
            syncClick={() => console.log('syncClick')} />
            <div className={styles.incoming__paginationWrapper}>
                <AppPagination className={styles.incoming__pagination} />
            </div>
        </LayoutMain>
    )
}

export default Incoming;