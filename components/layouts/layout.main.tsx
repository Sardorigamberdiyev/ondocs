import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ILayoutMainProps } from './layout.interfaces';
import AppBtn from '../app-btn';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import styles from './layout.module.sass';

const LayoutMain: FC<PropsWithChildren<ILayoutMainProps>> = (props) => {
    const { children, pageName, btnBackPageText,  isUrlInfo, prePathText, currentPathText } = props;
    const router = useRouter();

    const pgName = pageName && <h1>{pageName}</h1>
    const btnBack = btnBackPageText && (
        <AppBtn 
        onClick={() => router.back()}>
            {btnBackPageText}
        </AppBtn>
    );

    const pathInfo = isUrlInfo && (
        <div className={styles.layoutMain__pathInfo}>
            <div className={styles.layoutMain__pathInfo__prePath}>{prePathText}</div>
            <i className={styles.layoutMain__rightArrowIcon} />
            <div className={styles.layoutMain__pathInfo__currentPath}>{currentPathText || router.query.id}</div>
        </div>
    );

    const pageHeader = (pageName || btnBackPageText || isUrlInfo) && (
        <div className={styles.layoutMain__pageHeader}>
            {pgName}
            {pathInfo}
            {btnBack}
        </div>
    );
    
    return (
        <div className={styles.layoutMain}>
            <Sidebar />
            <div className={styles.layoutMain__wrapper}>
                <Navbar />
                <main>
                    {pageHeader}
                    {children}
                </main>
            </div>
        </div>
    )
}

export default LayoutMain;