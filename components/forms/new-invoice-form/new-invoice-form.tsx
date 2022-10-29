import { FC } from 'react';
import AppLabel from '../../app-label';
import AppInput from '../../app-input';
import FormWrapper from '../../form-wrapper';

const NewInvoiceForm: FC = () => {
    return (
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
    )
}

export default NewInvoiceForm;