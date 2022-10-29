import { FC } from 'react';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import FormWrapper from '../../form-wrapper';

const TreatyForm: FC = () => {
    return (
        <FormWrapper text="Договор">
            <AppLabel text="Номер*">
                <AppInput type="number"
                placeholder="Номер*" />
            </AppLabel>
            <AppLabel text="Дата*">
                <AppInput type="text" 
                placeholder="Дата*"/>
            </AppLabel>
        </FormWrapper>
    )
}

export default TreatyForm;