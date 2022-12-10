import { FC, useRef } from 'react';
import { useRouter } from 'next/router';
import { useReactToPrint } from 'react-to-print';

import { LayoutMain } from '../../components/layouts';
import { InnerDocsSenderCard, InnerDocsStatusCard } from '../../components/pages/inner-docs';
import { AppCard, AppTextarea } from '../../components/app';
import styles from './by-id.module.sass';

const InnerDocsById: FC = () => {
    const paperComponentRef = useRef(null);
    const router = useRouter();

    const handlePrint = useReactToPrint({
        content: () => paperComponentRef.current
    })

    return (
        <LayoutMain
        isUrlInfo
        prePathText="Счет фактура"
        currentPathText={`${router.query.id}`}
        btnBackPageText="Назад">
            <div className={styles.innerDocsById__row}>
                <InnerDocsSenderCard />
                <InnerDocsStatusCard status="waiting_signature" />
            </div>
            <AppCard className={styles.innerDocsById__sheetInfo}></AppCard>
            <AppCard>
                <AppTextarea
                placeholder="Напишите текст"
                cols={10} />
            </AppCard>
        </LayoutMain>
    )
}

export default InnerDocsById;