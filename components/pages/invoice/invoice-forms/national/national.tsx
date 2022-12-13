import { FC } from 'react';
import { AppInput, AppLabel } from '../../../../app';
import { INationalProps } from './national.interfaces';
import RowForm from '../../../../forms/row-form';
import styles from './national.module.sass';

const National: FC<INationalProps> = ({national, nationalKey, handleChange}) => {
    const companyLabelText = nationalKey === 'buyer' ? 'Компания-партнера' : 'Компания';
    return (
        <div className={styles.national}>
            <AppLabel text={companyLabelText}>
                <AppInput type="text"
                placeholder="*Название"
                disabled />
            </AppLabel>
            <div className={styles.national__taxGap}>
                <input type="text"
                value="Коэффициент разрыва при уплате НДС (по всей цепочке)"
                readOnly
                disabled />
                <div className={styles.national__taxGap__square} />
            </div>
            <AppLabel text="НДС регистрационнай номер">
                <AppInput type="text"
                placeholder="Введите данные"
                name="vatRegCode"
                readOnly
                disabled
                value={national.vatRegCode} />
            </AppLabel>
            <RowForm 
            leftContent={
                <AppLabel text="Номер счета">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="account"
                    value={national.account}
                    onChange={handleChange(nationalKey)} />
                </AppLabel>
            }
            rightContent={
                <AppLabel text="МФО">
                    <AppInput type="number"
                    placeholder="Введите данные"
                    name="bankId"
                    value={national.bankId}
                    onChange={handleChange(nationalKey)} />
                </AppLabel>
            } />
            <AppLabel text="Адрес">
                <AppInput type="text"
                placeholder="Введите данные"
                name="address"
                value={national.address}
                onChange={handleChange(nationalKey)} />
            </AppLabel>
            <RowForm 
            leftContent={
                <AppLabel text="Директор">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="director"
                    value={national.director}
                    onChange={handleChange(nationalKey)} />
                </AppLabel>
            }
            rightContent={
                <AppLabel text="Главный бухгалтер">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="accountant"
                    value={national.accountant}
                    onChange={handleChange(nationalKey)} />
                </AppLabel> 
            } />
        </div>
    )
}

export default National;