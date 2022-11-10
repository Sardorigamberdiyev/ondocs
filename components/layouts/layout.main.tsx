import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ILayoutMainProps } from './layout.interfaces';
import AppBtn from '../app-btn';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import styles from './layout.module.sass';

const LayoutMain: FC<PropsWithChildren<ILayoutMainProps>> = (props) => {
    const { children, pageName, btnBackPageText, btnBackPageLink } = props;
    const router = useRouter();

    const pgName = pageName && <h1>{pageName}</h1>
    const btnBack = btnBackPageLink && (
        <AppBtn 
        onClick={() => router.push(btnBackPageLink)}>
            {btnBackPageText}
        </AppBtn>
    );

    const pageHeader = (pageName || btnBackPageLink || btnBackPageText) && (
        <div className={styles.layoutMain__pageHeader}>
            {pgName}
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