import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ISettingDropdownProps } from './setting-dropdown.interfaces';
import { RootState } from '../../../store/store';
import { active, disable } from '../../../features/low-vision/low-vision';
import ToggleSwitch from '../../toggle-switch';
import styles from './setting-dropdown.module.sass';

const SettingDropdown: FC<ISettingDropdownProps> = ({ isShowDropdown }) => {
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);
    const dispatch = useDispatch();

    const changeLowVision = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? dispatch(active()) : dispatch(disable());
    }

    const showDropdownClassName = isShowDropdown ? ' ' + styles.settingDropdown__show : '';
    const lowVisionClassName = isLowVision ? ' lowVision' : '';

    return (
        <div className={styles.settingDropdown + showDropdownClassName + lowVisionClassName}>
            <div className={styles.settingDropdown__btn}>
                <div className={styles.settingDropdown__btn__left}>
                    <div className={styles.settingDropdown__question}>
                        <i className={styles.settingDropdown__questionIcon} />
                    </div>
                    Обучение
                </div>
                <div className={styles.settingDropdown__btn__right}></div>
            </div>
            <div className={styles.settingDropdown__btn}>
                <div className={styles.settingDropdown__btn__left}>
                    <i className={styles.settingDropdown__visibilityIcon} />
                    Режим для слабовидящих
                </div>
                <div className={styles.settingDropdown__btn__right}>
                    <ToggleSwitch
                    checked={isLowVision}
                    onChange={changeLowVision}
                    classNameContent={styles.settingDropdown__toggle} />
                </div>
            </div>
            <div className={styles.settingDropdown__btn}>
                <div className={styles.settingDropdown__btn__left}>
                    <i className={styles.settingDropdown__textIcon} />
                    Размер
                </div>
                <div className={styles.settingDropdown__btn__right}>
                    <i className={styles.settingDropdown__minusIcon} />
                    <i className={styles.settingDropdown__plusIcon} />
                </div>
            </div>
        </div>
    )
}

export default SettingDropdown;