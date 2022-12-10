import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppBtn } from '../../app';
import { ILayoutMainProps } from './layout-main.interfaces';
import { RootState } from '../../../store/store';
import Navbar from '../../navbar';
import Sidebar from '../../sidebar';
import styles from './layout-main.module.sass';

const LayoutMain: FC<PropsWithChildren<ILayoutMainProps>> = (props) => {
    const { children, pageName, btnBackPageText,  isUrlInfo, prePathText, currentPathText } = props;
    const router = useRouter();

    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

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

    const lowVisionClassName = isLowVision ? ' ' + styles.layoutMain__lowVision : '';
    
    return (
        <div className={styles.layoutMain + lowVisionClassName}>
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