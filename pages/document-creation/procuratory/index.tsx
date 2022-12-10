import { FC } from 'react';
import { LayoutMain, LayoutDocumentCreation } from '../../../components/layouts';
import { AppCard, AppInput, AppLabel } from '../../../components/app';
import RowForm from '../../../components/forms/row-form';
import FormWrapper from '../../../components/form-wrapper';
import ProcuratoryCompanyForm from '../../../components/forms/procuratory-company-form';
import ProcuratoryConfidantForm from '../../../components/forms/procuratory-confidant-form';
import ProcuratoryTopForm from '../../../components/forms/procuratory-top-form/procuratory-top-form';
import ProcuratoryTable from '../../../components/tables/procuratory-table';
import styles from './procuratory.module.sass';

const Procuratory: FC = () => {
    return (
        <LayoutMain pageName="Создание документа: Доверенность"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutDocumentCreation>
                <AppCard className={styles.procuratory__card}>
                    <ProcuratoryTopForm />
                </AppCard>
                <AppCard className={styles.procuratory__card}>
                    <RowForm
                    leftContent={
                        <FormWrapper text="Ваши сведения">
                            <AppLabel text="ИНН / ПИНФЛ*"
                            labelNoIdent>
                                <AppInput type="text"
                                placeholder="12345123" />
                            </AppLabel>
                        </FormWrapper>
                    }
                    rightContent={
                        <FormWrapper text="Сведения партнера">
                            <AppLabel text="ИНН / ПИНФЛ*"
                            labelNoIdent>
                                <AppInput type="text"
                                placeholder="ИНН / ПИНФЛ" />
                            </AppLabel>
                        </FormWrapper>
                    } />
                    <div className={styles.procuratory__miniInfo}>*Все поля дложны быть заполнены</div>
                </AppCard>
                <AppCard className={styles.procuratory__card}>
                    <RowForm leftContent={
                        <FormWrapper text="Компания">
                            <ProcuratoryCompanyForm />
                        </FormWrapper>
                    }
                    rightContent={
                        <FormWrapper text="Компания партнера">
                            <ProcuratoryCompanyForm />
                        </FormWrapper>
                    } />
                </AppCard>
                <AppCard className={styles.procuratory__card}>
                    <FormWrapper text="Доверенное лицо">
                        <ProcuratoryConfidantForm />
                    </FormWrapper>
                </AppCard>
                <AppCard className={styles.procuratory__card}>
                    <ProcuratoryTable />
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Procuratory;