import { Dispatch, FC, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppCard } from '../../../components/app';
import { LayoutDocumentCreation, LayoutMain } from '../../../components/layouts';
import RowForm from '../../../components/forms/row-form';
import FormWrapper from '../../../components/form-wrapper';
import TreatyTopForm from '../../../components/forms/treaty-top-form';
import TreatyInformationForm from '../../../components/forms/treaty-information-form';
import TreatyTable from '../../../components/tables/treaty-table';
import TreatyContentForm from '../../../components/forms/treaty-content-form';
import styles from './treaty.module.sass';

const Treaty: FC = () => {
    const [informationForms, setInformationForms] = useState([uuidv4()]);
    const [contentForms, setContentForms] = useState([uuidv4()]);

    const addForm = (state: string[], setState: Dispatch<SetStateAction<string[]>>) => setState([...state, uuidv4()]);
    const removeForm = (state: string[], setState: Dispatch<SetStateAction<string[]>>, formId: string) => {
        if (state.length <= 1) 
            return;

        setState(state.filter((s) => s !== formId))
    }

    const addInfoForm = () => addForm(informationForms, setInformationForms);
    const removeInfoForm = (infoFormId: string) => (
        removeForm(informationForms, setInformationForms, infoFormId)
    )

    const addContentForm = () => addForm(contentForms, setContentForms)
    const removeContentForm = (contentFormId: string) => (
        removeForm(contentForms, setContentForms, contentFormId)
    )

    return (
        <LayoutMain pageName="Создание документа: Договор"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutDocumentCreation>
                <AppCard className={styles.treaty__card}>
                    <TreatyTopForm />
                </AppCard>
                <AppCard className={styles.treaty__card}>
                    <RowForm 
                    leftContent={
                        <FormWrapper text="Ваши сведение">
                            <TreatyInformationForm />
                        </FormWrapper>
                    }
                    rightContent={
                        <FormWrapper text="Сведение партнера">
                            {
                                informationForms.map((itemId) => (
                                    <TreatyInformationForm 
                                    formId={itemId}
                                    key={itemId} 
                                    onAddTreatyInfoForm={addInfoForm}
                                    onRemoveTreatyInfoForm={removeInfoForm}
                                    partner />
                                ))
                            }
                        </FormWrapper>
                    } />
                </AppCard>
                <AppCard className={styles.treaty__card}>
                    <TreatyTable />
                </AppCard>
                <AppCard className={styles.treaty__card}>
                    <FormWrapper text="Содержание">
                        {
                            contentForms.map((itemId) => (
                                <TreatyContentForm 
                                key={itemId}
                                formId={itemId}
                                onAddContentForm={addContentForm}
                                onRemoveContentForm={removeContentForm} />
                            ))
                        }
                    </FormWrapper>
                </AppCard>
            </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Treaty;