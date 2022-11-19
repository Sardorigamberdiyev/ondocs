import { FC } from 'react';
import { useRouter } from 'next/router';
import { INewsListItemProps } from './news-list-item.interfaces';
import AppBtn from '../../app-btn';
import styles from './news-list-item.module.sass';
import NewsDate from '../news-date';

const NewsListItem: FC<INewsListItemProps> = ({news}) => {
    const router = useRouter();

    return (
        <li className={styles.newsListItem}>
            <div className={styles.newsListItem__header}>
                <NewsDate
                className={styles.newsListItem__header__newsDate} 
                date={news.date} />
            </div>
            <div className={styles.newsListItem__body}>
                <p>{news.description}</p>
            </div>
            <div className={styles.newsListItem__footer}>
                <AppBtn 
                className={styles.newsListItem__footer__btn}
                onClick={() => router.push(`/news/${news.id}`)}>Читать</AppBtn>
            </div>
        </li>
    )
}

export default NewsListItem;