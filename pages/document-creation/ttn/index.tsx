import { FC } from 'react';
import { LayoutMain, LayoutDocumentCreation } from '../../../components/layouts';
import AppCard from '../../../components/app-card';
import styles from './ttn.module.sass';
import RowForm from '../../../components/forms/row-form';
import AppLabel from '../../../components/app-label';
import AppInput from '../../../components/app-input';
import AppDate from '../../../components/app-date';
import FormWrapper from '../../../components/form-wrapper';
import TtnTransportationForm from '../../../components/forms/ttn-transportation-form';

const Ttn: FC = () => {
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
                        <TtnTransportationForm />
                    </FormWrapper>
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Ttn;