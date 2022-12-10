import { FC } from 'react';
import { AppInput, AppInputWithBtn, AppLabel } from '../../../../app';
import FormWrapper from '../../../../form-wrapper';
import RowForm from '../../../../forms/row-form';

const InvoiceAdditionallyForm: FC = () => {
    return (
        <RowForm 
        leftContent={
            <FormWrapper text="Старрый счет-фактура">
                <AppLabel text="ИД*">
                    <AppInput type="number"
                    placeholder="123456" />
                </AppLabel>
                <AppLabel text="Дата*">
                    <AppInput type="text"
                    placeholder="Дата" />
                </AppLabel>
                <AppLabel text="Номер*">
                    <AppInput type="text"
                    placeholder="Номер" />
                </AppLabel>
                <AppLabel text="ТТН ИД">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ТТН ИД" />
                    </AppInputWithBtn>
                </AppLabel>
            </FormWrapper>
        } 
        rightContentStyle={{justifyContent: 'space-between'}}
        rightContent={
            <>
                <FormWrapper text="Новый счет-фактура">
                    <AppLabel text="Дата*">
                        <AppInput type="text"
                        placeholder="Дата*" />
                    </AppLabel>
                    <AppLabel text="Номер*">
                        <AppInput type="number"
                        placeholder="Номер" />
                    </AppLabel>
                </FormWrapper>
                <FormWrapper>
                    <AppLabel text="ID Договора">
                        <AppInputWithBtn>
                            <AppInput type="text"
                            placeholder="ID Договора" />
                        </AppInputWithBtn>
                    </AppLabel>
                </FormWrapper>
            </>
        } />
    )
}

export default InvoiceAdditionallyForm;