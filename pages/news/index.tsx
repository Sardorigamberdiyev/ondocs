import { FC } from 'react';
import { LayoutMain } from '../../components/layouts';
import { newsList } from '../../common/data.variables';
import NewsList from '../../components/news/news-list';
import AppList from '../../components/app-list';

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