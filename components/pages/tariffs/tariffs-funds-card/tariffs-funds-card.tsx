import { FC } from 'react';
import { useRouter } from 'next/router';
import { AppBtn, AppCard } from '../../../app';
import Link from 'next/link';
import styles from './tariffs-funds-card.module.sass';

const TariffsFundsCard: FC = () => {
    const router = useRouter();
    return (
        <AppCard className={styles.tariffsFundsCard}>
            <div className={styles.tariffsFundsCard__iconWrapper}>
                <i className={styles.tariffsFundsCard__cancelIcon} />
            </div>
            <div className={styles.tariffsFundsCard__statusText}>Не достаточно середств</div>
            <AppBtn className={styles.tariffsFundsCard__btn}
            onClick={() => router.push('/balance')}>Пополнить баланс</AppBtn>
            <Link href="/">
                <a className={styles.tariffsFundsCard__backHome}>Вернуться на главную</a>
            </Link>
        </AppCard>
    )
}

export default TariffsFundsCard;