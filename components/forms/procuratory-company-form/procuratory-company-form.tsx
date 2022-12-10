import { FC } from 'react';
import { AppInput, AppLabel } from '../../app';
import RowForm from '../row-form';

const ProcuratoryCompanyForm: FC = () => {
    return (
        <>
            <AppLabel text="Название компании*">
                <AppInput type="text"
                placeholder="“RAQAMLI DUNYO” OOO" />
            </AppLabel>
            <AppLabel text="Расчетный счет*">
                <RowForm 
                leftContent={
                    <AppInput type="text"
                    placeholder="1234123" />
                }
                rightContent={
                    <AppInput type="text"
                    placeholder="МФО, SWIFT и др." />
                } />
            </AppLabel>
            <AppLabel text="Адрес*">
                <AppInput type="text"
                placeholder="Адрес*" />
            </AppLabel>
            <RowForm 
            leftContent={
                <AppLabel text="Директор">
                    <AppInput type="text"
                    placeholder="Сапаев Акбар Дилшодович" />
                </AppLabel>
            }
            rightContent={
                <AppLabel text="Глав.бух.">
                    <AppInput type="text"
                    placeholder="Сапаев Акбар Дилшодович" />
                </AppLabel>
            } />
        </>
    )
}

export default ProcuratoryCompanyForm;