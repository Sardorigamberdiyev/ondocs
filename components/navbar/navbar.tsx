import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { RootState } from '../../store/store';
import { Option } from '../app/app-select/app-select';
import { languageList } from '../../common/variables/data.variables';
import { AppBtn } from '../app';
import LanguageDropdown from './language-dropdown';
import SettingDropdown from './setting-dropdown';
import styles from './navbar.module.sass';

const Navbar: FC = () => {
    const [isShowSettingDropdown, setIsShowSettingDropdown] = useState(false);
    const [isShowLanguageDropdown, setIsShowLanguageDropdown] = useState(false);
    const [language, setLanguage] = useState(languageList[0]);
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    const onSelectedLanguage = (option: Option & {icon: string}) => {
        setLanguage(option);
        setIsShowLanguageDropdown(false);
    };

    const router = useRouter();

    const activeToolBtnClassName = isShowSettingDropdown ? styles.navbar__btnWrapper__active : '';
    const lowVisionClassName = isLowVision ? ' lowVision' : '';
     
    return (
        <div className={styles.navbar + lowVisionClassName}>
            <div className={styles.navbar__wrapper}>
                <div className={styles.navbar__leftContent}>
                    <div className={styles.navbar__leftContent__name}>Igamberdiyev Sardor Shokir o'g'li</div>
                    <div className={styles.navbar__leftContent__INN}>ИНН / ПИНФЛ 55882333</div>
                </div>
                <div className={styles.navbar__rightContent}>
                    <div className={styles.navbar__balance}>
                        <div className={styles.navbar__balance__iconWrapper}>
                            <i className={styles.navbar__walletIcon} />
                        </div>
                        <div className={styles.navbar__balance__textWrapper}>
                            <span>Ваш баланс:</span>
                            <div className={styles.navbar__balance__quantity}>150 000 сум</div>
                        </div>
                    </div>
                    <AppBtn className={styles.navbar__activateBtn}
                    onClick={() => router.push('/tariffs/')}>Активировать тариф</AppBtn>
                    <div className={styles.navbar__tripleBtns}>
                        <div className={styles.navbar__btnWrapper}>
                            <AppBtn className={styles.navbar__bellBtn}>
                                <i className={styles.navbar__bellIcon} />
                            </AppBtn>
                        </div>
                        <div className={styles.navbar__btnWrapper}>
                            <AppBtn className={styles.navbar__language}
                            onClick={() => setIsShowLanguageDropdown(!isShowLanguageDropdown)}
                            onBlur={() => setIsShowLanguageDropdown(false)}>
                                <div className={styles.navbar__language__img}>
                                    <Image src={language.icon}
                                    width={20}
                                    height={20} />
                                </div>
                                <i className={styles.navbar__downArrowIcon} />
                                <LanguageDropdown 
                                isShowDropdown={isShowLanguageDropdown}
                                onSelected={onSelectedLanguage} />
                            </AppBtn>
                        </div>
                        <div className={styles.navbar__btnWrapper + ' ' + activeToolBtnClassName}>
                            <AppBtn className={styles.navbar__toolBtn}
                            onFocus={() => setIsShowSettingDropdown(true)}
                            onBlur={() => setIsShowSettingDropdown(false)}>
                                <i className={styles.navbar__toolIcon} />
                                <SettingDropdown isShowDropdown={isShowSettingDropdown} />
                            </AppBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;