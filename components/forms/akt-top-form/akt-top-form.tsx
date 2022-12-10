import { FC } from 'react';
import { AppDate, AppInput, AppLabel } from '../../app';
import RowForm from '../row-form';

const AktTopForm: FC = () => {
    return (
        <RowForm
        leftContent={
            <>
                <AppLabel text="АКТ номер*">
                    <AppInput type="number"
                    placeholder="АКТ номер" />
                </AppLabel>
                <AppLabel text="Номер контракта*">
                    <AppInput type="number"
                    placeholder="Номер котракта" />
                </AppLabel>
            </>
        }
        rightContent={
            <>
                <AppLabel text="Дата документа*">
                    <AppDate 
                    placeholder="Дата документа"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
                <AppLabel text="Дата контракта*">
                    <AppDate
                    placeholder="Дата контракта"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
            </>
        } />
    )
}

export default AktTopForm;