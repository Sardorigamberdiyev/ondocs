import { FC } from 'react';
import AppLabel from '../../app-label';
import AppInput from '../../app-input';
import FormWrapper from '../../form-wrapper';

const OldInvoiceForm: FC = () => {
    return (
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
        </FormWrapper>
    )
}

export default OldInvoiceForm;