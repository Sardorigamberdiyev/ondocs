import { FC } from 'react';
import { useRouter } from 'next/router';
import { AppBtn, AppCard } from '../../../app';
import TariffsInfo from '../tariffs-info';
import styles from './tariffs-activated-card.module.sass';

const TariffsActivatedCard: FC = () => {
    const router = useRouter();
    
    return (
        <AppCard className={styles.tariffsActivatedCard}>
            <div className={styles.tariffsActivatedCard__iconWrapper}>
                <i className={styles.tariffsActivatedCard__acceptIcon} />
            </div>
            <div className={styles.tariffsActivatedCard__statusText}>Тариф активирован</div>
            <div className={styles.tariffsActivatedCard__infoRow}>
                <TariffsInfo
                iconUrl="/icons/tariff-calendar.png"
                nameText="Дата активации:"
                countText="Не активна" />
                <TariffsInfo
                iconUrl="/icons/tariff-calendar.png"
                nameText="Дата окончания:"
                countText="Не активна" />
            </div>
            <AppBtn className={styles.tariffsActivatedCard__btn}
            onClick={() => router.push('/')}>Вернутся на главную</AppBtn>
        </AppCard>
    )
}

export default TariffsActivatedCard;