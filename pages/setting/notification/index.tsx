import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import AppBtn from '../../../components/app-btn';
import AppInput from '../../../components/app-input';
import AppLabel from '../../../components/app-label';
import FormWrapper from '../../../components/form-wrapper';
import RowForm from '../../../components/forms/row-form';
import styles from './notification.module.sass';

const Notification: FC = () => {
    return (
        <LayoutSetting currentPage="notification"
        btnsDisable>
            <div className={styles.notification}>
                <RowForm
                leftContent={
                    <FormWrapper text="Подключить телеграм бот:">
                        <AppLabel text="Введите номер телефона:"
                        className={styles.notification__label}>
                            <AppInput type="number"
                            placeholder="998901234567" />
                        </AppLabel>
                        <p className={styles.notification__description}>Перед подтверждением номера мобильного телефона, убедитесь что Ваш номер зарегистрирован в @OnlineFactura в Telegram.</p>
                        <AppBtn className={styles.notification__btn}>Подключить</AppBtn>
                    </FormWrapper>
                }
                rightContent={
                    <FormWrapper text="Подключайте уведомление через телефонный номе:">
                        <AppLabel text="Введите номер телефона:">
                            <AppInput type="number"
                            placeholder="998901234567" />
                        </AppLabel>
                        <AppLabel text="Введите код отправленный через SMS:">
                            <AppInput type="text"
                            placeholder="XXX-XXX" />
                        </AppLabel>
                        <AppBtn className={styles.notification__btn}>Подключить</AppBtn>
                    </FormWrapper>
                } />
            </div>
        </LayoutSetting>
    )
}

export default Notification;