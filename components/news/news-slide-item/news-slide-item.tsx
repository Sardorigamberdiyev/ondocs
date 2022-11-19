import { FC } from 'react';
import Link from 'next/link';

import { INewsSlideItemProps } from './news-slide-item.interfaces';
import NewsDate from '../news-date';
import styles from './news-slide-item.module.sass';

const NewsSlideItem: FC<INewsSlideItemProps> = ({news}) => {
    return (
        <div className={styles.newsSlideItem}>
          <div className={styles.newsSlideItem__header}>
            <h2 className={styles.newsSlideItem__header__title}>{news.title}</h2>
            <NewsDate
            className={styles.newsSlideItem__header__newsDate}
            date={news.date} />
            <span className={styles.newsSlideItem__header__importance}>Важно</span>
          </div>
          <div className={styles.newsSlideItem__body}>
            <p>{news.description}</p>
          </div>
          <div className={styles.newsSlideItem__footer}>
            <Link href={`/news/${news.id}`}>
              <a className={styles.newsSlideItem__footer__aboutBtn}>Читать дальше</a>
            </Link>
          </div>
        </div> 
    )                               
}

export default NewsSlideItem;