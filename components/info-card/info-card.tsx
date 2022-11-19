import { FC } from 'react';
import { useRouter } from 'next/router';
import { InfoCardProps } from './info-card.interfaces';
import AppBtn from '../app-btn';
import styles from './info-card.module.sass';
import AppCard from '../app-card';

const InfoCard: FC<InfoCardProps> = (props) => {
    const { text, count, iconColor, iconUrl, go } = props;
    const router = useRouter();
    return (
        <AppCard className={styles.infoCard}>
            <div className={styles.infoCard__wrapper}>
                <div className={styles.infoCard__iconWrapper}>
                    <i className={styles.infoCard__seenIcon}
                    style={{
                        backgroundColor: iconColor,
                        maskImage: `url(${iconUrl})`,
                        WebkitMaskImage: `url(${iconUrl})`
                    }} />
                    <div className={styles.infoCard__iconWrapper__bgLayer}
                    style={{backgroundColor: iconColor}} />
                </div>
                <div className={styles.infoCard__text}>{text}</div>
                <div className={styles.infoCard__count}
                style={{color: iconColor}}>{count}</div>
            </div>
            <AppBtn className={styles.infoCard__btn}
            onClick={() => router.push(`/${go}`)}>Перейти</AppBtn>
        </AppCard>
    )
}

export default InfoCard