import { FC } from 'react';
import RowForm from '../row-form';
import AppDate from '../../app-date';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';

const TreatyTopForm: FC = () => {
    return (
        <RowForm
        leftContent={
            <>
                <AppLabel text="Наименование договора*">
                    <AppInput type="text"
                    placeholder="Наименование договора" />
                </AppLabel>
                <AppLabel  text="Номер*">
                    <AppInput type="text"
                    placeholder="Номер контракта" />
                </AppLabel>
                <AppLabel text="Место заключение договора*">
                    <AppDate 
                    placeholder="Действителен до"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
            </>
        } 
        rightContent={
            <>
                <AppLabel text="Дата начала*">
                    <AppDate
                    placeholder="Дата заключения"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
                <AppLabel text="Дата окончание">
                    <AppDate
                    placeholder="Действителен до"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
            </>
        } />
    )
}

export default TreatyTopForm;