import { FC } from 'react';
import { useRouter } from 'next/router';
import AppBtn from '../app-btn';
import styles from './navbar.module.sass';

const Navbar: FC = () => {
    const router = useRouter();
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__wrapper}>
                <div className={styles.navbar__leftContent}>
                    <div className={styles.navbar__leftContent__name}>Igamberdiyev Sardor Shokir o'g'li</div>
                    <div className={styles.navbar__leftContent__INN}>ИНН / ПИНФЛ 55882333</div>
                </div>
                <div className={styles.navbar__rightContent}>
                    <div className={styles.navbar__balance}>
                        <div className={styles.navbar__balance__iconWrapper}>
                            <i className={styles.navbar__walletIcon} />
                        </div>
                        <div className={styles.navbar__balance__textWrapper}>
                            <span>Ваш баланс:</span>
                            <div className={styles.navbar__balance__quantity}>150 000 сум</div>
                        </div>
                    </div>
                    <AppBtn className={styles.navbar__activateBtn}
                    onClick={() => router.push('/tariffs/')}>Активировать тариф</AppBtn>
                    <AppBtn className={styles.navbar__bellBtn}>
                        <i className={styles.navbar__bellIcon} />
                    </AppBtn>
                    <AppBtn className={styles.navbar__questionBtn}>
                        <i className={styles.navbar__questionIcon} />
                    </AppBtn>
                    <AppBtn className={styles.navbar__toolBtn}>
                        <i className={styles.navbar__toolIcon} />
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default Navbar;