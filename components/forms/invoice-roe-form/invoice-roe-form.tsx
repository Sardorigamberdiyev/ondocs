import { FC } from 'react';
import AppInput from '../../app-input';
import AppInputWithBtn from '../../app-input-with-btn';
import AppLabel from '../../app-label';
import FormWrapper from '../../form-wrapper';
import RowForm from '../row-form';

const InvoiceROEForm: FC = () => {
    return (
        <RowForm 
        leftContent={
            <FormWrapper text="Счет-фактура">
                <AppLabel text="Номер*">
                    <AppInput type="number"
                    placeholder="Номер*" />
                </AppLabel>
                <AppLabel text="Дата*">
                    <AppInput type="text"
                    placeholder="Дата*" />
                </AppLabel>
                <AppLabel text="ТТН ИД">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ТТН ИД" />
                    </AppInputWithBtn>
                </AppLabel>
            </FormWrapper>
        }
        rightContent={
            <FormWrapper text="Договор">
                <AppLabel text="Номер*">
                    <AppInput type="number"
                    placeholder="Номер*" />
                </AppLabel>
                <AppLabel text="Дата*">
                    <AppInput type="text" 
                    placeholder="Дата*"/>
                </AppLabel>
                <AppLabel text="ID Договора">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ID Договора" />
                    </AppInputWithBtn>
                </AppLabel>
            </FormWrapper>
        } />
    )
}

export default InvoiceROEForm;