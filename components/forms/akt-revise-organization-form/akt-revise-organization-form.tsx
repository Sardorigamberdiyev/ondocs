import { FC } from 'react';
import { AppInput, AppLabel } from '../../app';
import RowForm from '../row-form';

const AktReviseOrganizationForm: FC = () => {
    return (
        <>
            <AppLabel text="Название организации">
                <AppInput type="text"
                placeholder="Raqamli Dunyo OOO" />
            </AppLabel>
            <RowForm
            leftContent={
                <AppLabel text="ПИНФЛ ответственного лица*">
                    <AppInput type="number"
                    placeholder="1234567" />
                </AppLabel>
            }
            rightContent={
                <AppLabel text="ФИО ответственного лица*">
                    <AppInput type="text"
                    placeholder="Ботиров Асадбек Олим угли" />
                </AppLabel>
            } />
        </>
    )
}

export default AktReviseOrganizationForm;