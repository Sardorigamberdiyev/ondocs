import { FC } from 'react';
import { LayoutDocumentCreation, LayoutMain } from '../../../components/layouts';
import { aktPlaceholder } from '../../../common/text.variables';
import AppCard from '../../../components/app-card';
import AktTopForm from '../../../components/forms/akt-top-form';
import styles from './akt.module.sass';
import FormWrapper from '../../../components/form-wrapper';
import AktMiddleForm from '../../../components/forms/akt-middle-form';
import AppTextarea from '../../../components/app-textarea';
import AktTable from '../../../components/tables/akt-table';
import AppInput from '../../../components/app-input';

const Akt: FC = () => {
    return (
        <LayoutMain 
        pageName="Создание документа: АКТ"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutDocumentCreation
            cancelHandler={() => console.log('cancelHandler')}
            viewDocHandler={() => console.log('viewDocHandler')}
            saveHandler={() => console.log('saveHandler')}
            signHandler={() => console.log('signHandler')}>
                <AppCard className={styles.akt__card}>
                    <AktTopForm />
                </AppCard>
                <AppCard className={styles.akt__card}>
                    <AktMiddleForm />
                </AppCard>
                <AppCard className={styles.akt__card}>
                    <FormWrapper text="АКТ">
                        <AppTextarea 
                        className={styles.akt__textarea}
                        placeholder={aktPlaceholder} />
                    </FormWrapper>
                </AppCard>
                <AppCard className={styles.akt__card}>
                    <AktTable />
                </AppCard>
                <AppCard className={styles.akt__card}>
                    <FormWrapper text="Доп. Поля">
                        <AppInput className={styles.akt__additionalInput} 
                        type="number"
                        placeholder="Номер заказа" />
                    </FormWrapper>
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Akt;