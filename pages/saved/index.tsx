import { FC, useState } from 'react';
import { LayoutMain } from '../../components/layouts';
import { AppCard, AppPagination } from '../../components/app';
import { DocsFilterForm, DocsTable, DocsActions } from '../../components/pages/docs';
import styles from './saved.module.sass';

const Saved: FC = () => {
    const [checkedAll, setCheckedAll] = useState<string[]>([]);

    return (
        <LayoutMain pageName="Сохраннёные (0)">
            <AppCard className={styles.saved__card}>
                <DocsFilterForm />
            </AppCard>
            <div className={styles.saved__table}>
                <AppCard className={styles.saved__table__wrapper}>
                    <DocsTable 
                    checkbox
                    tableData={['qwe123', 'zxcv12', '321qwe']}
                    checkedAll={checkedAll}
                    setCheckedAll={setCheckedAll} />
                </AppCard>
            </div>
            <DocsActions
            acceptBtnText="Подписать и отправить"
            acceptBtnDisabled={!!!checkedAll.length}
            cancelBtnDisabled={!!!checkedAll.length}
            acceptClick={() => console.log('acceptClick')}
            cancelClick={() => console.log('cancelClick')}
            getLimit={(limit) => console.log('limit = ', limit)}
            xlsxClick={() => console.log('xlsxClick')} />
            <div className={styles.saved__paginationWrapper}>
                <AppPagination className={styles.saved__pagination} />
            </div>
        </LayoutMain>
    )
}

export default Saved;