import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IEmpowermentDoc } from '../../../../../features/invoice-data/invoice-data.types';
import { changeEmpowerment, changeEmpowermentDate } from '../../../../../features/invoice-data/invoice-data';
import { RootState } from '../../../../../store/store';
import { AppDate, AppInput, AppLabel, AppSelect } from '../../../../app';
import styles from './factura-empowerment-doc.module.sass';

const FacturaEmpowermentDoc: FC = () => {
    const empowermentDoc = useSelector((state: RootState) => state.invoiceData.facturaEmpowermentDoc);
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (
            name === 'empowermentNo' || 
            name === 'agentFio' || 
            name === 'agentTin' || 
            name === 'agentPinfl'
        ) dispatch(changeEmpowerment({empowermentKey: name, empowermentValue: value}))
    }

    const handleChangeDate = (date: Date | null) => dispatch(changeEmpowermentDate(date));

    return (
        <div className={styles.facturaEmpowermentDoc}>
            <div className={styles.facturaEmpowermentDoc__header}>
                <h2>Доверенность</h2>
                <AppSelect className={styles.facturaEmpowermentDoc__select}
                placeholder="Выберите доверенность"
                name="agentFacturaId"
                valueList={[]} 
                value={null}
                loading={false} />
            </div>
            <div className={styles.facturaEmpowermentDoc__rowInputs}>
                <AppLabel text="Номер доверенности">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="empowermentNo"
                    value={empowermentDoc.empowermentNo}
                    onChange={handleChange} />
                </AppLabel>
                <AppLabel text="Дата доверенности">
                    <AppDate
                    widthContainer="88%"
                    placeholder="Введите данные"
                    name="empowermentDateOfIssue"
                    selected={empowermentDoc.empowermentDateOfIssue}
                    onChange={handleChangeDate} />
                </AppLabel>
                <AppLabel text="ИНН">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="agentPinfl"
                    value={empowermentDoc.agentPinfl}
                    onChange={handleChange} />
                </AppLabel>
                <AppLabel text="Ответственное лицо ФИО">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="agentFio"
                    value={empowermentDoc.agentFio}
                    onChange={handleChange} />
                </AppLabel>
            </div>
            <div className={styles.facturaEmpowermentDoc__info}>*Все поля должны быть заполнены</div>
        </div>
    )
}

export default FacturaEmpowermentDoc;