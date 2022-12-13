import { FC } from 'react';
import { AppInput, AppLabel, AppSelect } from '../../../../app';
import styles from './factura-empowerment-doc.module.sass';

const FacturaEmpowermentDoc: FC = () => {
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
                    name="empowermentNo" />
                </AppLabel>
                <AppLabel text="Дата доверенности">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="empowermentDateOfIssue" />
                </AppLabel>
                <AppLabel text="ИНН">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="agentPinfl" />
                </AppLabel>
                <AppLabel text="Ответственное лицо ФИО">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="agentFio" />
                </AppLabel>
            </div>
            <div className={styles.facturaEmpowermentDoc__info}>*Все поля должны быть заполнены</div>
        </div>
    )
}

export default FacturaEmpowermentDoc;