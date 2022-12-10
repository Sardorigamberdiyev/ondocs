import { FC } from 'react';
import { useRouter } from 'next/router';
import { LayoutMain } from '../../../components/layouts';
import { AppCard } from '../../../components/app';
import { NewsDate } from '../../../components/pages/news';
import styles from './by-id.module.sass';

const NewsById: FC = () => {
    const { query } = useRouter();

    return (
        <LayoutMain
        prePathText="Новости" 
        currentPathText={query.id as string | undefined}
        btnBackPageText="Назад"
        isUrlInfo>
            <AppCard className={styles.byId__card}>
                <div className={styles.byId__header}>
                    <h1>Загаловок новости</h1>
                    <NewsDate className={styles.byId__header__newsDate}
                    date={new Date()} />
                </div>
                <div className={styles.byId__body}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, placeat magnam nulla explicabo dolorem odit at amet rem provident voluptatem dolore! Consectetur debitis dolorem quos fuga officia dolore fugit amet.</p>
                </div>
            </AppCard>
        </LayoutMain>
    )
}

export default NewsById;