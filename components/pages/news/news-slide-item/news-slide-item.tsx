import { FC } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { RootState } from '../../../../store/store';
import { INewsSlideItemProps } from './news-slide-item.interfaces';
import NewsDate from '../news-date';
import styles from './news-slide-item.module.sass';

const NewsSlideItem: FC<INewsSlideItemProps> = ({news}) => {
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    const lowVisionClassName = isLowVision ? ' lowVision' : '';
  
    return (
        <div className={styles.newsSlideItem + lowVisionClassName}>
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