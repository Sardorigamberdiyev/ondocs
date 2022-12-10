import { FC } from 'react';
import { AppInput, AppLabel, AppSelect } from '../../app';

interface TtnMiddleFormProps {
    isShippingRailway?: boolean;
}

const TtnMiddleForm: FC<TtnMiddleFormProps> = (props) => {
    const { isShippingRailway } = props;
    return (
        <>
            <AppLabel text="ИНН / ПИНФЛ">
                <AppInput type="number"
                placeholder="1234567" />
            </AppLabel>
            <AppLabel text="Название*">
                <AppInput type="text"
                placeholder="Raqmli Dunyo OOO" />
            </AppLabel>
            <AppLabel text="ИНН / ПИНФЛ">
                <AppInput type="number"
                placeholder="1234567" /> 
            </AppLabel>
            <AppLabel text="Грузоотправитель">
                <AppInput type="text"
                placeholder="Грузоотправитель" />
            </AppLabel>
            {isShippingRailway ? (
                <>
                    <AppLabel text="Разгрузочная станция 1">
                        <AppSelect
                        value={null}
                        valueList={[]}
                        loading={false}
                        placeholder="Разгрузочная станция 1" />
                    </AppLabel>
                    <AppLabel text="Разгрузочная станция 2">
                        <AppSelect
                        value={null}
                        valueList={[]}
                        loading={false}
                        placeholder="Разгрузочная станция 2" />
                    </AppLabel>
                </>
            ) : (
                <>
                    <AppLabel text="Пункт погрузки 1">
                        <AppInput type="text"
                        placeholder="Пункт погрузки 1" />
                    </AppLabel>
                    <AppLabel text="Пункт погрузки 2">
                        <AppInput type="text"
                        placeholder="Пункт погрузки 2" />
                    </AppLabel>
                </>
            )}
            <AppLabel text="Переадресовка">
                <AppInput type="text"
                placeholder="Переадресовка" />
            </AppLabel>
        </>
    )
}

export default TtnMiddleForm;