import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

import { EimzoService, IStirWithId } from '../../services/eimzo.service';
import { LayoutLogin } from '../../components/layouts';
import { StirWarn, StirList, StirEmpty } from '../../components/stir';
import { useRouter } from 'next/router';
import AppBtn from '../../components/app-btn';
import styles from './login.module.sass';
import Cookies from 'js-cookie';
import AppList from '../../components/app-list';

const Login: FC = () => {
    const [stirs, setStirs] = useState<IStirWithId[] | null>(null);
    const [stirId, setStirId] = useState<null | string>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        EIMZOClient.checkVersion((arg1: any, arg2: any) => {
            console.log('checkVersion');
            console.log('------- success ------');
            console.log('arg1', arg1);
            console.log('arg2', arg2);
        }, (arg1: any, arg2: any) => {
            console.log('checkVersion');
            console.log('------- fail ------');
            console.log('arg1', arg1);
            console.log('arg2', arg2);
        });

        const eimzoService = new EimzoService(EIMZOClient);
        eimzoService.getlistAllUserKeys((items: IStirWithId[]) => {
            setStirs(items);
            setLoading(false);
            setError(false);
        }, (error) => {
            setError(true);
            setLoading(false);
        })
    }, [])

    const signIn = () => {
        const stir = stirs?.find((s) => s.id === stirId);

        EIMZOClient.loadKey(stir, (arg1: any) => {
            console.log('------ success ----');
            console.log('arg1', arg1);
            Cookies.set('token', arg1);
            router.push('/');
        }, (arg1: any, arg2: any) => {
            console.log('------ fail ------');
            console.log('arg1', arg1);
            console.log('arg2', arg2);
        }, (arg1: any, arg2: any) => {
            console.log('----- verifyPassword ----');
            console.log('arg1', arg1);
            console.log('arg2', arg2);
        })
    }

    const contentText = stirs?.length ? "Добро пожаловать" : "";
    const contentTextMB = stirs?.length ? "1.5rem" : "0";

    return (
        <LayoutLogin 
        contentText={contentText}
        contentTextMB={contentTextMB}>
            <AppList
            arrayData={stirs}
            error={error}
            loading={loading}
            customErrorIndicator={<StirWarn />}
            customEmpty={<StirEmpty />}>
                <StirList 
                stirs={stirs || []}
                itemHandler={setStirId}
                itemValue={stirId} />
                <div className={styles.login__btnWrapper}>
                    <AppBtn 
                    className={styles.login__btn}
                    onClick={signIn}>Войти</AppBtn>
                    <Link href="/log-up">
                        <a className={styles.login__linkLogUp}>Войти через пароль</a>
                    </Link>
                </div>
            </AppList>
        </LayoutLogin>
    )
}

export default Login;