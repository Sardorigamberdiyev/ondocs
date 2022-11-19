import { FC } from 'react';
import { INewsListProps } from './news-list.interfaces';
import NewsListItem from '../news-list-item';
import styles from './news-list.module.sass';

const NewsList: FC<INewsListProps> = ({newsList}) => {
    return (
        <ul className={styles.newsList}>
            {
                newsList.map((news) => (
                    <NewsListItem 
                    key={news.id} 
                    news={news} />
                ))
            }
        </ul>
    )
}

export default NewsList;