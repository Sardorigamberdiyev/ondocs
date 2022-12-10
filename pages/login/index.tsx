import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { EimzoService, IStirWithId } from '../../services/eimzo.service';
import { LayoutLogin } from '../../components/layouts';
import { AppBtn, AppList } from '../../components/app';
import { StirWarn, StirList, StirEmpty } from '../../components/stir';
import { api } from '../../services/api';
import Cookies from 'js-cookie';
import styles from './login.module.sass';

const Login: FC = () => {
    const [guid, setGuid] = useState('');
    const [stirs, setStirs] = useState<IStirWithId[] | null>(null);
    const [stirId, setStirId] = useState<null | string>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();


    useEffect(() => {
        api.get<{guid: string}>('/accounts/guid')
            .then((res) => setGuid(res.data.guid))
            .catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        EIMZOClient.checkVersion(async (arg1: any, arg2: any) => {
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
            console.log(items);
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

        EIMZOClient.loadKey(stir, async (keyId: string) => {
            console.log('------ success ----');
            console.log('keyId', keyId);

            EIMZOClient.createPkcs7(keyId, guid, null, 
            (pkcs7: string) => {
                console.log('-------------- createPkcs7 ----------------');
                console.log('-------------- success -------------------');
                console.log('pkcs7', pkcs7);
                api.post('/accounts/pkcs7', {pkcs7})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }, (arg1: any, arg2: any) => {
                console.log('-------------- createPkcs7 ----------------');
                console.log('-------------- fail -------------------');
                console.log('arg1', arg1);
                console.log('arg2', arg2);
            });
            Cookies.set('token', keyId);
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