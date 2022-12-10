import { FC } from 'react';
import { AppBtn } from '../../app';
import styles from './stir-warn.module.sass';

const StirWarn: FC = () => {
    return (
        <div className={styles.stirWarn}>
            <div className={styles.stirWarn__icon} />
            <p>Если вы еще не установили EIMZO приложение, пожалуйста установите и запустите затем обновите страницу</p>
            <a href="https://e-imzo.uz/"
            target="_blank">
                <AppBtn className={styles.stirWarn__btnInstall}>Установить</AppBtn>
            </a>
            <div className={styles.stirWarn__showNoMore}>Больше не показать!</div>
        </div>
    )
}

export default StirWarn;