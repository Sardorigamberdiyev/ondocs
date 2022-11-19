import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import AppInput from '../../../components/app-input';
import AppLabel from '../../../components/app-label';
import RowForm from '../../../components/forms/row-form';
import styles from './info.module.sass';

const Info: FC = () => {
    return (
        <LayoutSetting
        currentPage="info">
            <div className={styles.info}>
                <h2>Сведение:</h2>
                <div className={styles.info__stir}>
                    <input type="radio"
                    checked
                    readOnly />
                    <div className={styles.info__stir__data}>
                        <div className={styles.info__stir__data__col}>
                            <div className={styles.info__stir__data__text}>
                                <strong>ИНН / ПИНФЛ: </strong>
                                1456484
                            </div>
                            <div className={styles.info__stir__data__text}>
                                <strong>Организация: </strong>
                                Не указано
                            </div>
                        </div>
                        <div className={styles.info__stir__data__col}>
                            <div className={styles.info__stir__data__text}>
                                <strong>Ф.И.О: </strong>
                                Sobirov Jamshid
                            </div>
                            <div className={styles.info__stir__data__text}>
                                <strong>Амал килиш мудати: </strong>
                                2022.11.12 11:53
                            </div>
                        </div>
                    </div>
                </div>
                <RowForm
                leftContent={
                    <>
                        <AppLabel text="Адресс">
                            <AppInput type="text"
                            disabled
                            placeholder="Адресс" />
                        </AppLabel>
                        <AppLabel text="Район">
                            <AppInput type="text"
                            disabled
                            placeholder="Район" />
                        </AppLabel>
                        <AppLabel text="OKED">
                            <AppInput type="text"
                            disabled
                            placeholder="OKED" />
                        </AppLabel>
                        <AppLabel text="MFO">
                            <AppInput type="text"
                            disabled
                            placeholder="MFO" />
                        </AppLabel>
                    </>
                }
                rightContent={
                    <>
                        <AppLabel text="Директор">
                            <AppInput type="text"
                            disabled
                            placeholder="Директор" />
                        </AppLabel>
                        <AppLabel text="Номер счета">
                            <AppInput type="number"
                            disabled
                            placeholder="Номер счета" />
                        </AppLabel>
                        <AppLabel text="Название">
                            <AppInput type="text"
                            disabled
                            placeholder="Название" />
                        </AppLabel>
                        <AppLabel text="Счет">
                            <AppInput type="number"
                            disabled
                            placeholder="Счет" />
                        </AppLabel>
                    </>
                } />
            </div>
        </LayoutSetting>
    )
}

export default Info;