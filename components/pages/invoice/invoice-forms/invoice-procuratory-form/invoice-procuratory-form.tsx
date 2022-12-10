import { FC } from 'react';
import { AppInput, AppLabel, AppSelect } from '../../../../app';
import styles from './invoice-procuratory-form.module.sass';

const InvoiceProcuratoryForm: FC = () => {
    return (
        <div className={styles.invoiceProcuratoryForm}>
            <div className={styles.invoiceProcuratoryForm__header}>
                <h2>Доверенность</h2>
                <AppSelect className={styles.invoiceProcuratoryForm__select}
                placeholder="Выберите доверенность"
                valueList={[]} 
                value={null}
                loading={false} />
            </div>
            <div className={styles.invoiceProcuratoryForm__rowInputs}>
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
            <div className={styles.invoiceProcuratoryForm__info}>*Все поля должны быть заполнены</div>
        </div>
    )
}

export default InvoiceProcuratoryForm;