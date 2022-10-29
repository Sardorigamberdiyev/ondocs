import { FC } from 'react';
import { useRouter } from 'next/router';
import AppBtn from '../../app-btn';
import styles from './stir-empty.module.sass';

const StirEmpty: FC = () => {
    const router = useRouter();

    return (
        <div className={styles.stirEmpty}>
            <div className={styles.stirEmpty__text}>Сертификат не найдены</div>
            <AppBtn className={styles.stirEmpty__btn} onClick={() => router.push('/logUp')} >Вход по поролю</AppBtn>
        </div>
    )
}

export default StirEmpty;