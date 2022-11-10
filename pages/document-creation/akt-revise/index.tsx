import { FC } from 'react';
import { ITableData } from '../../../components/tables/akt-revise-table/akt-revise-table.interfaces';
import { LayoutDocumentCreation, LayoutMain } from '../../../components/layouts';
import { aktRevisePlaceholder } from '../../../common/text.variables';
import AppCard from '../../../components/app-card';
import styles from './akt-revise.module.sass';
import RowForm from '../../../components/forms/row-form';
import AppLabel from '../../../components/app-label';
import AppDate from '../../../components/app-date';
import FormWrapper from '../../../components/form-wrapper';
import AppInput from '../../../components/app-input';
import AppTextarea from '../../../components/app-textarea';
import AktReviseOrganizationForm from '../../../components/forms/akt-revise-organization-form';
import AktReviseTableList from '../../../components/tables/akt-revise-table-list';

const AktRevise: FC = () => {

    const getAktTableData = (aktTableData: ITableData[]) => {
        console.log(aktTableData);
    }

    return (
        <LayoutMain 
        pageName="Создание документа: АКТ Сверки"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutDocumentCreation>
                <AppCard className={styles.aktRevise__card}>
                    <RowForm
                    leftContent={
                        <AppLabel text="АКТ номер*">
                            <AppDate 
                            placeholder="Номер АКТ сверки*"
                            onChange={(date) => console.log(date)} />
                        </AppLabel>
                    }
                    rightContent={
                        <AppLabel text="Дата АКТ сверки*">
                            <AppDate 
                            placeholder="Дата АКТ сверки*"
                            onChange={(date) => console.log(date)} />
                        </AppLabel>
                    } />
                </AppCard>
                <AppCard className={styles.aktRevise__card}>
                    <RowForm 
                    leftContent={
                        <>
                            <FormWrapper text="Ваши сведение">
                                <AppLabel text="ИНН /ПИНФЛ*">
                                    <AppInput type="text"
                                    placeholder="1234567" />
                                </AppLabel>
                            </FormWrapper>
                            <FormWrapper text="Организация">
                                <AktReviseOrganizationForm />
                            </FormWrapper>
                        </>
                    }
                    rightContent={
                        <>
                            <FormWrapper text="Сведение партнера">
                                <AppLabel text="ИНН /ПИНФЛ*">
                                    <AppInput type="text"
                                    placeholder="1234567" />
                                </AppLabel>
                            </FormWrapper>
                            <FormWrapper text="Организация партнера">
                                <AktReviseOrganizationForm />
                            </FormWrapper>
                        </>
                    } />
                </AppCard>
                <AppCard className={styles.aktRevise__card}>
                    <FormWrapper text="Описание">
                        <AppTextarea 
                        className={styles.aktRevise__textarea}
                        placeholder={aktRevisePlaceholder} />
                    </FormWrapper>
                </AppCard>
                <AppCard className={styles.aktRevise__card}>
                    <FormWrapper text="АКТ">
                        <AktReviseTableList getAktTableData={getAktTableData} />
                    </FormWrapper>
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default AktRevise;