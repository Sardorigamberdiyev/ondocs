import { FC, PropsWithChildren } from 'react';
import Script from 'next/script';
import styles from './layout.module.sass';

interface ILayoutListProps {
    contentText?: string;
    contentTextMB?: string;
}

const LayoutList: FC<PropsWithChildren<ILayoutListProps>> = (props) => {
    const { contentText, contentTextMB, children } = props;
    const style = contentTextMB ? {marginBottom: contentTextMB} : {};
    
    return (
        <div className={styles.layoutList}>
            <div className={styles.layoutList__leftBgImg} />
            <div className={styles.layoutList__content}>
                <div className={styles.layoutList__contentWrapper}>
                    <div className={styles.layoutList__headerText} style={style}>{contentText}</div>
                    {children}
                    <Script src="/eimzo/e-imzo-client.js" strategy="beforeInteractive" />
                </div>
            </div>
        </div>
    )
}

export default LayoutList;