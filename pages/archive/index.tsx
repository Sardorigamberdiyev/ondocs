import { FC, useState } from 'react';
import { LayoutMain } from '../../components/layouts';
import { DocsTable, DocsFilterForm, DocsActions } from '../../components/pages/docs';
import { AppCard, AppPagination } from '../../components/app';
import styles from './archive.module.sass';

const Archive: FC = () => {
    const [checkedAll, setCheckedAll] = useState<string[]>([]);

    return (
        <LayoutMain pageName="Архив (12)">
            <AppCard className={styles.archive__card}>
                <DocsFilterForm />
            </AppCard>
            <div className={styles.archive__table}>
                <AppCard className={styles.archive__table__wrapper}>
                    <DocsTable 
                    checkbox
                    tableData={['2222', '3333', '1111']}
                    checkedAll={checkedAll}
                    setCheckedAll={setCheckedAll} />
                </AppCard>
            </div>
            <DocsActions
            acceptBtnText="Востановить"
            cancelBtnText="Удалить"
            acceptBtnDisabled={!!!checkedAll.length}
            cancelBtnDisabled={!!!checkedAll.length}
            acceptClick={() => console.log('acceptClick')}
            cancelClick={() => console.log('cancelClick')}
            getLimit={(limit) => console.log('limit = ', limit)}
            xlsxClick={() => console.log('xlsxClick')}/>
            <div className={styles.archive__paginationWrapper}>
                <AppPagination className={styles.archive__pagination} />
            </div>
        </LayoutMain>
    )
}

export default Archive;