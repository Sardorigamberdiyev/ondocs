import { FC, useState } from 'react';
import { LayoutMain } from '../../components/layouts';
import { IDocsTableFilterProps } from '../../components/pages/docs/docs-table-filter/docs-table-filter.interfaces';
import { AppCard, AppPagination } from '../../components/app';
import { DocsTable, DocsFilterForm, DocsActions, DocsTableFilter } from '../../components/pages/docs';
import styles from './ascending.module.sass';

const Ascending: FC = () => {
    const [filterActive, setFilterActive] = useState<IDocsTableFilterProps['filterActive']>('filter-one');
    const [checkedAll, setCheckedAll] = useState<string[]>([]);

    return (
        <LayoutMain pageName="Входящие (2)">
            <AppCard className={styles.ascending__card}>
                <DocsFilterForm />
            </AppCard>
            <div className={styles.ascending__table}>
                <DocsTableFilter
                filterActive={filterActive}
                filterOneText="Все статусы (6)"
                filterTwoText="Подписан (1)"
                filterThreeText="Отменён (0)"
                filterOneClick={() => setFilterActive('filter-one')}
                filterTwoClick={() => setFilterActive('filter-two')}
                filterThreeClick={() => setFilterActive('filter-three')} />
                <AppCard className={styles.ascending__table__wrapper}>
                    <DocsTable 
                    checkbox
                    tableData={['111', '3323', '332as']}
                    checkedAll={checkedAll}
                    setCheckedAll={setCheckedAll} />
                </AppCard>
            </div>
            <DocsActions
            acceptBtnDisabled={!!!checkedAll.length}
            cancelBtnDisabled={!!!checkedAll.length}
            acceptClick={() => console.log('acceptClick')}
            cancelClick={() => console.log('cancelClick')}
            getLimit={(limit) => console.log('limit = ', limit)}
            xlsxClick={() => console.log('xlsxClick')}
            syncClick={() => console.log('syncClick')} />
            <div className={styles.ascending__paginationWrapper}>
                <AppPagination className={styles.ascending__pagination} />
            </div>
        </LayoutMain>
    )
}

export default Ascending;