import { FC } from 'react';
import AppInput from '../app-input';
import AppLabel from '../app-label';
import AppSelect from '../app-select';
import styles from './invoice-procuratory.module.sass';

const InvoiceProcuratory: FC = () => {
    return (
        <div className={styles.invoiceProcuratory}>
            <div className={styles.invoiceProcuratory__header}>
                <h2>Доверенность</h2>
                <AppSelect className={styles.invoiceProcuratory__select}
                placeholder="Выберите доверенность"
                valueList={[]} 
                value={null}
                loading={false} />
            </div>
            <div className={styles.invoiceProcuratory__rowInputs}>
                <AppLabel text="Номер доверенности">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <AppLabel text="Дата доверенности">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <AppLabel text="ИНН">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <AppLabel text="Ответственное лицо ФИО">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
            </div>
            <div className={styles.invoiceProcuratory__info}>*Все поля должны быть заполнены</div>
        </div>
    )
}

export default InvoiceProcuratory;