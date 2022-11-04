import { FC } from 'react';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import FormWrapper from '../../form-wrapper';
import RowForm from '../row-form';

const AktMiddleForm: FC = () => {
    return (
        <RowForm
        leftContent={
            <>
                <FormWrapper text="Ваши сведения">
                    <AppLabel text="ИНН / ПИНФЛ">
                        <AppInput type="number"
                        placeholder="12345678" />
                    </AppLabel>
                </FormWrapper>
                <FormWrapper text="Компания">
                    <AppLabel text="Название компании*">
                        <AppInput type="text"
                        placeholder="Raqamli Dunyo OOO" />
                    </AppLabel>
                </FormWrapper>
            </>
        }
        rightContent={
            <>
                <FormWrapper text="Сведения партнера">
                    <AppLabel text="ИНН / ПИНФЛ">
                        <AppInput type="number"
                        placeholder="12345678" />
                    </AppLabel>
                </FormWrapper>
                <FormWrapper text="Компания партнер">
                    <AppLabel text="Название компании*">
                        <AppInput type="text"
                        placeholder="Raqamli Dunyo OOO" />
                    </AppLabel>
                </FormWrapper>
            </>
        } />
    )
}

export default AktMiddleForm;