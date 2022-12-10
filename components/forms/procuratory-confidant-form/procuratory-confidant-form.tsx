import { FC } from 'react';
import { AppInput, AppLabel, AppSelect } from '../../app';
import RowForm from '../row-form';

const ProcuratoryConfidantForm: FC = () => {
    return (
        <RowForm 
        leftContent={
            <>
                <AppLabel text="ПИНФЛ">
                    <AppSelect 
                    value={null}
                    valueList={[]}
                    loading={false}
                    placeholder="123123124" />
                </AppLabel>
                <AppLabel text="Должность">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <RowForm 
                leftContent={
                    <AppLabel text="Номер паспорта">
                        <AppInput type="text"
                        placeholder="AF" />
                    </AppLabel>
                }
                rightContent={
                    <AppLabel text="Серия паспорта">
                        <AppInput type="number"
                        placeholder="123142" />
                    </AppLabel>
                } />
            </>
        }
        rightContent={
            <>
                <AppLabel text="ФИО">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <AppLabel text="Дата выдачи паспорта">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <AppLabel text="Кем выдан">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
            </>
        } />
    )
}

export default ProcuratoryConfidantForm;