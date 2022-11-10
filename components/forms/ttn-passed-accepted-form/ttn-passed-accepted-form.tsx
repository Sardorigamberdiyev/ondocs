import { FC } from 'react';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import RowForm from '../row-form';

const TtnPassedAcceptedForm: FC = () => {
    return (
        <RowForm
        leftContent={
            <>
                <AppLabel text="Сдал">
                    <AppInput type="text"
                    placeholder="Сдал" />
                </AppLabel>
                <AppLabel text="Принял">
                    <AppInput type="text"
                    placeholder="Принял" />
                </AppLabel>
            </>
        } 
        rightContent={
            <>
                <AppLabel text="Сдал вод.эксп">
                    <AppInput type="text"
                    placeholder="Сдал вод.эксп" />
                </AppLabel>
                <RowForm
                leftContent={
                    <AppLabel text="Растояние всего">
                        <AppInput type="number"
                        placeholder="Растояние всего" />
                    </AppLabel>
                }
                rightContent={
                    <AppLabel text="Растояние в городе">
                        <AppInput type="text"
                        placeholder="Растояние в городе" />
                    </AppLabel>
                } />
            </>
        }/>
    )
}

export default TtnPassedAcceptedForm;