import { FC } from 'react';
import AppDate from '../../app-date';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import RowForm from '../row-form';

const ProcuratoryTopForm: FC = () => {
    return (
        <RowForm
        leftContent={
            <>
                <AppLabel text="Номер*">
                    <AppInput type="text"
                    placeholder="Номер доверенности" />
                </AppLabel>
                <AppLabel text="Договор*">
                    <RowForm
                    leftContent={
                        <AppInput type="text"
                        placeholder="Номер договора" />
                    }
                    rightContent={
                        <AppInput type="text"
                        placeholder="Дата договора" />
                    } />
                </AppLabel>
            </>
        }
        rightContent={
            <>
                <AppLabel text="Дата начала">
                    <AppDate 
                    placeholder="Дата заключения"
                    onChange={(date) => console.log(date)} /> 
                </AppLabel>
                <AppLabel text="Дата окончания*">
                    <AppDate 
                    placeholder="Действителен до"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
            </>
        } />
    )
}

export default ProcuratoryTopForm;