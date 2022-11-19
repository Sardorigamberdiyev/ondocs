import { FC, useState } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import AppInput from '../../../components/app-input';
import AppLabel from '../../../components/app-label';
import FormWrapper from '../../../components/form-wrapper';
import RowForm from '../../../components/forms/row-form';
import styles from './profile.module.sass';
import ToggleSwitch from '../../../components/toggle-switch';

const Profile: FC = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const viewOrNotViewIcon = isShowPassword ? "/icons/not-visible.png" : "/icons/view.png";
    const textOrPasswordInputType = isShowPassword ? "text" : "password";

    return (
        <LayoutSetting
        currentPage="profile">
            <RowForm
            leftContent={
                <FormWrapper text="Данные для входа">
                    <AppLabel text="Логин/Почта">
                        <AppInput type="text"
                        placeholder="test@gmail.com" />
                    </AppLabel>
                    <AppLabel text="Номер телефона">
                        <AppInput type="number"
                        placeholder="+998907777777" />
                    </AppLabel>
                    <div className={styles.profile__switches}>
                        <ToggleSwitch className={styles.profile__switches__item}
                        text="Получать уведомление на номер телефона"
                        textRowReverse />
                        <ToggleSwitch className={styles.profile__switches__item}
                        text="Комфортный режим"
                        textRowReverse />
                    </div>
                </FormWrapper>
            }
            rightContent={
                <FormWrapper text="Изменение пароля">
                    <AppLabel text="Введите старый пароль:">
                        <AppInput type="password"
                        placeholder="Введите старый праоль" />
                    </AppLabel>
                    <AppLabel text="Введите новый пароль:">
                        <AppInput type={textOrPasswordInputType}
                        iconUrl={viewOrNotViewIcon}
                        onMouseDownIcon={() => setIsShowPassword(true)}
                        onMouseUpIcon={() => setIsShowPassword(false)} />
                    </AppLabel>
                    <AppLabel text="Введите новый пароль, еще раз:">
                        <AppInput type={textOrPasswordInputType}
                        placeholder="Введите новый пароль"
                        iconUrl={viewOrNotViewIcon}
                        onMouseDownIcon={() => setIsShowPassword(true)}
                        onMouseUpIcon={() => setIsShowPassword(false)} />
                    </AppLabel>
                </FormWrapper>
            } />
        </LayoutSetting>
    )
}

export default Profile;