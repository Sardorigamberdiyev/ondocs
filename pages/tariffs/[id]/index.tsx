import { FC } from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import { tariffsList } from '../../../common/data.variables';
import { LayoutMain } from '../../../components/layouts';
import { Tariff } from '../../../components/tariffs/tariffs-list-item/tariffs-list-item.interfaces';
import AppCard from '../../../components/app-card';
import RowForm from '../../../components/forms/row-form';
import TariffsInfo from '../../../components/tariffs/tariffs-info';
import AppBtn from '../../../components/app-btn';
import styles from './by-id.module.sass';
import TariffsActivatedCard from '../../../components/tariffs/tariffs-activated-card';
import TariffsFundsCard from '../../../components/tariffs/tariffs-funds-card';

const TariffsById: FC<{tariff: Tariff | undefined}> = ({ tariff }) => {
    return (
        <LayoutMain pageName={tariff?.name}>
            <AppCard>
                <div className={styles.tariffsById__headerTextRow}>
                    <h2>На данный момент, у Вашей компании активен другой пакет</h2>
                    <h2>Активировать этот тариф</h2>
                </div>
                <RowForm 
                leftContent={
                    <div className={styles.tariffsById__leftContent}>
                        <div className={styles.tariffsById__leftContent__infoList}>
                            <TariffsInfo
                            iconUrl="/icons/docs.png"
                            nameText="Количество"
                            countText="2500 шт" />
                            <TariffsInfo
                            iconUrl="/icons/time.png"
                            nameText="Время активности"
                            countText="1 Месяц" />
                            <TariffsInfo
                            iconUrl="/icons/docs-file.png"
                            nameText="Количество использований"
                            countText="0" />
                            <TariffsInfo
                            iconUrl="/icons/folder.png"
                            nameText="Количество остатка"
                            countText="0" />
                        </div>
                    </div>
                }
                rightContent={
                    <div className={styles.tariffsById__rightContent}>
                        <div className={styles.tariffsById__rightContent__rowWrapper}>
                            <div className={styles.tariffsById__rightContent__rowInfo}>
                                <TariffsInfo
                                iconUrl="/icons/docs-plus.png"
                                nameText="Бесплатно"
                                countText="5 документов:" />
                                <TariffsInfo
                                iconUrl="/icons/bill.png"
                                nameText="Бесплатно"
                                countText={`${tariff?.price} сум`}
                                priceStyle />
                            </div>
                            <div className={styles.tariffsById__rightContent__rowInfo}>
                                <TariffsInfo
                                iconUrl="/icons/tariff-calendar.png"
                                nameText="Дата активации:"
                                countText="Не активна" />
                                <TariffsInfo
                                iconUrl="/icons/tariff-calendar.png"
                                nameText="Дата окончание:"
                                countText="Не активна" />
                            </div>
                        </div>
                        <AppBtn className={styles.tariffsById__rightContent__btn}>Активировать тариф</AppBtn>
                    </div>
                } />
            </AppCard>
            <TariffsActivatedCard />
            <TariffsFundsCard />
        </LayoutMain>
    )
}

export default TariffsById;

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: tariffsList.map((tariff) => ({
            params: {id: tariff.id},
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const tariff = tariffsList.find((tariff) => tariff.id === context.params?.id);
    return {
        props: { tariff }
    }
} 