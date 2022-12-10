import { FC, PropsWithChildren } from 'react';
import { ILayoutLoginProps } from './layout-login.interfaces';
import Script from 'next/script';
import styles from './layout-login.module.sass';

const LayoutLogin: FC<PropsWithChildren<ILayoutLoginProps>> = (props) => {
    const { contentText, contentTextMB, children } = props;
    
    const style = contentTextMB ? {marginBottom: contentTextMB} : {};
    
    return (
        <div className={styles.layoutLogin}>
            <div className={styles.layoutLogin__leftBgImg} />
            <div className={styles.layoutLogin__content}>
                <div className={styles.layoutLogin__contentWrapper}>
                    <div className={styles.layoutLogin__headerText} style={style}>{contentText}</div>
                    {children}
                    <Script src="/eimzo/e-imzo-client.js" strategy="beforeInteractive" />
                </div>
            </div>
        </div>
    )
}

export default LayoutLogin;