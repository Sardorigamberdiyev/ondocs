import { FC, useState } from 'react';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import AppSelect from '../../app-select';
import ToggleSwitch from '../../toggle-switch';
import RowForm from '../row-form';
import styles from './middle-form.module.sass';

const MiddleForm: FC = () => {
    const [oneWayAccount, setOneWayAccount] = useState<boolean>(false);
    
    return (
        <RowForm 
        leftContent={
            <>
                <h2 className={styles.middleForm__headerText}>Ваша информация</h2>
                <AppLabel text="ИНН/ПИНФЛ*">
                    <AppInput type="number"
                    placeholder="12345667" />
                </AppLabel>
                { !oneWayAccount && (
                    <>
                        <AppLabel text="Вид дохода">
                            <AppSelect 
                            valueList={[]} 
                            value={null}
                            loading={false}
                            placeholder="Вид дохода" />
                        </AppLabel>
                        <div className={styles.middleForm__ndsCoefficient}>
                            <div className={styles.middleForm__coefficientText}>Коэффициент разрыва при уплате НДС (по всей цепочке)</div>
                            <div className={styles.middleForm__coefficientValue}></div>
                        </div>
                    </>
                ) }
                <AppLabel text="НДС регистрационнай номер">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <RowForm 
                leftContent={
                    <AppLabel text="Номер счета">
                        <AppInput type="text"
                        placeholder="Введите данные" />
                    </AppLabel>
                }
                rightContent={
                    oneWayAccount ? (
                        <AppLabel text="Номер счета">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                    ) : (
                        <AppLabel text="МФО">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                    )
                } />
                <AppLabel text="Адрес">
                    <AppInput type="text"
                    placeholder="Введите данные" />
                </AppLabel>
                <RowForm 
                leftContent={
                    <AppLabel text="Директор">
                        <AppInput type="text"
                        placeholder="Введите данные" />
                    </AppLabel>
                }
                rightContent={
                    <AppLabel text="Главный бухгалтер">
                        <AppInput type="text"
                        placeholder="Введите данные" />
                    </AppLabel>
                } />
            </>
        }
        rightContent={
            <>
                <h2 className={styles.middleForm__headerText}>Информация о порядчике</h2>
                <RowForm
                leftContent={
                    <AppLabel text="Номер счета"
                    labelHidden={oneWayAccount}>
                        <AppInput type="text"
                        placeholder="Номер счета"
                        disableTD={true} />
                    </AppLabel>
                }
                rightContentStyle={{alignSelf: 'center'}}
                rightContent={
                    <ToggleSwitch text="Односторонний счет?"
                    checked={oneWayAccount}
                    onChange={(e) => setOneWayAccount(e.target.checked)} />
                } />
                { oneWayAccount ? (
                    <>
                        <AppSelect 
                        valueList={[]}
                        value={{label: 'Физическое лицо', value: 'individual'}}
                        loading={false} />
                    </>
                ) : <>
                        <AppLabel text="Компания-партнер">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                        <div className={styles.middleForm__ndsCoefficient}>
                            <div className={styles.middleForm__coefficientText}>Коэффициент разрыва при уплате НДС (по всей цепочке)</div>
                            <div className={styles.middleForm__coefficientValue}></div>
                        </div>
                        <AppLabel text="НДС регистрационный номер">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                        <RowForm 
                        leftContent={
                            <AppLabel text="Номер счета">
                                <AppInput type="text"
                                placeholder="Введите данные" />
                            </AppLabel>
                        }
                        rightContent={
                            <AppLabel text="МФО">
                                <AppInput type="text"
                                placeholder="Введите данные" />
                            </AppLabel>
                        } />
                        <AppLabel text="Адрес">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                        <RowForm 
                        leftContent={
                            <AppLabel text="Директор">
                                <AppInput type="text"
                                placeholder="Введите данные" />
                            </AppLabel>
                        }
                        rightContent={
                            <AppLabel text="Главный бухгалтер">
                                <AppInput type="text" 
                                placeholder="Введите данные" />
                            </AppLabel>
                        } />
                </> }
            </>
        } />
    )
}

export default MiddleForm;