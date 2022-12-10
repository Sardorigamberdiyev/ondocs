import { FC } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { RootState } from '../../../store/store';
import { languageList } from '../../../common/variables/data.variables';
import { ILanguageDropdownProps } from './language-dropdown.interfaces';
import styles from './language-dropdown.module.sass';

const LanguageDropdown: FC<ILanguageDropdownProps> = ({ isShowDropdown, onSelected }) => {
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    const showDropdownClassName = isShowDropdown ? ' ' + styles.languageDropdown__show : '';
    const lowVisionClassName = isLowVision ? ' lowVision' : '';

    return (
        <div className={styles.languageDropdown + showDropdownClassName + lowVisionClassName}>
            <ul className={styles.languageDropdown__list}>
                {languageList.map((language) => (
                    <li className={styles.languageDropdown__list__item}
                    key={language.value}
                    onClick={() => {
                        if (onSelected)
                            onSelected(language)
                    }}>
                        <div className={styles.languageDropdown__list__item__img}>
                            <Image src={language.icon}
                            width={20}
                            height={20} />
                        </div>
                        {language.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageDropdown;