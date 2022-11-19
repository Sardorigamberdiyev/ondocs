import { FC } from 'react';
import { useRouter } from 'next/router';
import { ITariffsListItemProps } from './tariffs-list-item.interfaces';
import AppCard from '../../app-card';
import styles from './tariffs-list-item.module.sass';
import AppBtn from '../../app-btn';
import TariffsInfo from '../tariffs-info';

const TariffsListItem: FC<ITariffsListItemProps> = ({tariff}) => {
    const router = useRouter();
    return (
        <li className={styles.tariffsListItem}>
            <AppCard>
                <div className={styles.tariffsListItem__header}>
                    <div className={styles.tariffsListItem__header__namePrice}>
                        <div className={styles.tariffsListItem__name}>{tariff.name}</div>
                        <div className={styles.tariffsListItem__price}>{tariff.price} сум</div>
                    </div>
                    <span>5 бесплатный документов</span>
                </div>
                <div className={styles.tariffsListItem__body}>
                    <TariffsInfo 
                    iconUrl="/icons/docs.png" 
                    nameText="Количество"
                    countText={`${tariff.docs} шт`}
                    column />
                    <TariffsInfo
                    iconUrl="/icons/time.png"
                    nameText="Время активности"
                    countText={`${tariff.durationDay/30} месяц`}
                    column />
                </div>
                <div className={styles.tariffsListItem__footer}>
                    <AppBtn className={styles.tariffsListItem__footer__btn}
                    onClick={() => router.push(`/tariffs/${tariff.id}`)}>Подробнее</AppBtn>
                </div>
            </AppCard>
        </li>
    )
}

export default TariffsListItem;