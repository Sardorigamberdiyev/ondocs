import { FC } from 'react';
import { AppDate, AppInput, AppLabel } from '../../app';
import RowForm from '../row-form';

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