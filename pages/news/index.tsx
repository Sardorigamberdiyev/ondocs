import { FC } from 'react';
import { LayoutMain } from '../../components/layouts';
import { AppList } from '../../components/app';
import { NewsList } from '../../components/pages/news';
import { newsList } from '../../common/data.variables';

const News: FC = () => {
    return (
        <LayoutMain pageName="Новости">
            <AppList 
            loading={false}
            error={false}
            arrayData={newsList}>
                <NewsList newsList={newsList} />
            </AppList>
        </LayoutMain>
    )
}

export default News;