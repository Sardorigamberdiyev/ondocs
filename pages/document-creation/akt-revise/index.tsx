import { FC } from 'react';
import { ITableData } from '../../../components/tables/akt-revise-table/akt-revise-table.interfaces';
import { AppCard, AppLabel, AppDate, AppInput, AppTextarea } from '../../../components/app';
import { LayoutDocumentCreation, LayoutMain } from '../../../components/layouts';
import { aktRevisePlaceholder } from '../../../common/variables/text.variables';
import RowForm from '../../../components/forms/row-form';
import FormWrapper from '../../../components/form-wrapper';
import AktReviseOrganizationForm from '../../../components/forms/akt-revise-organization-form';
import AktReviseTableList from '../../../components/tables/akt-revise-table-list';
import styles from './akt-revise.module.sass';

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