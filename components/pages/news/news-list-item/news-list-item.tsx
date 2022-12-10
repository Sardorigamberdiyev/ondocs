import { FC } from 'react';
import { useRouter } from 'next/router';
import { INewsListItemProps } from './news-list-item.interfaces';
import { AppBtn, AppCard } from '../../../app';
import NewsDate from '../news-date';
import styles from './news-list-item.module.sass';

const NewsListItem: FC<INewsListItemProps> = ({news}) => {
    const router = useRouter();

    return (
        <li className={styles.newsListItem}>
            <AppCard className={styles.newsListItem__card}>
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
            </AppCard>
        </li>
    )
}

export default NewsListItem;