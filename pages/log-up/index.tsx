import { FC, useState } from 'react';
import Link from 'next/link';

import { LayoutLogin } from '../../components/layouts';
import { AppBtn, AppInput } from '../../components/app';
import styles from './logUp.module.sass';

const LogUp: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);

    const type = passwordShow ? 'text' : 'password';
    const iconUrl = passwordShow ? '/icons/not-visible.png' : '/icons/view.png';

    return (
        <LayoutLogin 
        contentText="Вход по паролю"
        contentTextMB="2rem">
            <div className={styles.logUp}>
                <AppInput 
                type="text" 
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)} />
                <AppInput 
                type={type}
                placeholder="Пароль" 
                iconUrl={iconUrl}
                value={password}
                onMouseUpIcon={(e) => setPasswordShow(false)}
                onMouseDownIcon={(e) => setPasswordShow(true)}
                onChange={(e) => setPassword(e.target.value)} />
                <AppBtn className={styles.logUp__btn}>Войти</AppBtn>
                <Link href="/login">
                    <a>Вход по подписи</a>
                </Link>
            </div>
        </LayoutLogin>
    )
}

export default LogUp;