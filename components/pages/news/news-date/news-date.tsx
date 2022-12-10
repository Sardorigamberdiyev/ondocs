import { FC } from 'react';
import { INewsDate } from './news-date.interfaces';
import { weeks, months } from '../../../../common/variables/data.variables';
import styles from './news-date.module.sass';

const NewsDate: FC<INewsDate> = (props) => {
    const { className } = props;
    const date = new Date(props.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const weekDay = date.getDay();
    const month = date.getMonth();

    const customHours = hours.toString().length > 1 ? hours : `0${hours}`;
    const customMinutes = minutes.toString().length > 1 ? minutes : `0${minutes}`;
    
    return (
        <div className={`${styles.newsDate} ${className || ''}`}>
            <div className={styles.newsDate__date}>
                <div className={styles.newsDate__date__monthDay}>{day} {months[month]}</div>
                <span />
                <div className={styles.newsDate__date__weekDay}>{weeks[weekDay]}</div>
            </div>
            <div className={styles.newsDate__date__time}>{customHours}:{customMinutes}</div>
        </div>
    )
}

export default NewsDate;