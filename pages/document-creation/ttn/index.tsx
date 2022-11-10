import { FC, useState } from 'react';
import { LayoutMain, LayoutDocumentCreation } from '../../../components/layouts';
import { ITtnTransportationData } from '../../../components/forms/ttn-transportation-form/ttn-transportation-data.interface';
import AppCard from '../../../components/app-card';
import styles from './ttn.module.sass';
import RowForm from '../../../components/forms/row-form';
import AppLabel from '../../../components/app-label';
import AppInput from '../../../components/app-input';
import AppDate from '../../../components/app-date';
import FormWrapper from '../../../components/form-wrapper';
import TtnTransportationForm from '../../../components/forms/ttn-transportation-form';
import TtnMiddleForm from '../../../components/forms/ttn-middle-form';
import TtnPassedAcceptedForm from '../../../components/forms/ttn-passed-accepted-form';
import TtnTable from '../../../components/tables/ttn-table';

const Ttn: FC = () => {
    const [transportationType, setTransportationType] = useState<ITtnTransportationData | null>(null);

    const getFormData = (formData: ITtnTransportationData) => {
        setTransportationType(formData);
    }

    return (
        <LayoutMain pageName="Создание документа: ТТН"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutDocumentCreation>
                <AppCard className={styles.ttn__card}>
                    <RowForm
                    leftContent={
                        <AppLabel text="ТТН номер*">
                            <AppInput type="number"
                            placeholder="Номер ТТН сверки*" />
                        </AppLabel>
                    }
                    rightContent={
                        <AppLabel text="От*">
                            <AppDate
                            widthContainer="95%"
                            placeholder="От"
                            onChange={(date) => console.log(date)} />
                        </AppLabel>
                    } />
                </AppCard>
                <AppCard className={styles.ttn__card}>
                    <FormWrapper text="Тип перевозки">
                        <TtnTransportationForm
                        getFormData={getFormData} />
                    </FormWrapper>
                </AppCard>
                <AppCard className={styles.ttn__card}>
                    <RowForm
                    leftContent={
                        <FormWrapper text="Заказчик">
                            <TtnMiddleForm
                            isShippingRailway={transportationType?.isShippingRailway} />
                        </FormWrapper>
                    }
                    rightContent={
                        <FormWrapper text="Перевозчик">
                            <TtnMiddleForm
                            isShippingRailway={transportationType?.isShippingRailway} />
                        </FormWrapper>
                    } />
                </AppCard>
                <AppCard className={styles.ttn__card}>
                    <RowForm
                    leftContent={
                        <AppLabel text="Особые отметки">
                            <AppInput type="text"
                            placeholder="Особые отметки" />
                        </AppLabel>
                    } />
                </AppCard>
                <AppCard className={styles.ttn__card}>
                    <TtnPassedAcceptedForm />
                </AppCard>
                <AppCard className={styles.ttn__card}>
                    <TtnTable />
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Ttn;