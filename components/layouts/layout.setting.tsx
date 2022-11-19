import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ILayoutSettingProps } from './layout.interfaces';
import LayoutMain from './layout.main';
import AppBtn from '../app-btn';
import AppCard from '../app-card';
import styles from './layout.module.sass';

const LayoutSetting: FC<PropsWithChildren<ILayoutSettingProps>> = (props) => {
    const { children, currentPage, btnsDisable, onCancel, onSave } = props;

    const { push } = useRouter();

    const activeClassName = styles.layoutSetting__active;

    const prifleActive = 'profile' === currentPage ? activeClassName : '';
    const notificationActive = 'notification' === currentPage ? activeClassName : '';
    const infoActive = 'info' === currentPage ? activeClassName : '';
    const docsFormatActive = 'docs-format' === currentPage ? activeClassName : '';
    const codesActive = 'codes' === currentPage ? activeClassName : '';

    return (
        <LayoutMain pageName="Настройки">
            <div className={styles.layoutSetting__navListWrapper}>
                <ul className={styles.layoutSetting__navList}>
                    <li className={`${styles.layoutSetting__navList__item} ${prifleActive}`} 
                    onClick={() => push('profile/')}>
                        Аккаунт
                    </li>
                    <li className={`${styles.layoutSetting__navList__item} ${notificationActive}`} 
                    onClick={() => push('notification/')}>
                        Уведомление
                    </li>
                    <li className={`${styles.layoutSetting__navList__item} ${codesActive}`} 
                    onClick={() => push('codes/')}>
                        Коды товаров и услуг
                    </li>
                    <li className={`${styles.layoutSetting__navList__item} ${infoActive}`} 
                    onClick={() => push('info/')}>
                        Информация о компании
                    </li>
                    <li className={`${styles.layoutSetting__navList__item} ${docsFormatActive}`} 
                    onClick={() => push('docs-format/')}>
                        Формат документов
                    </li>
                </ul>
            </div>
            <AppCard className={styles.layoutSetting__card}>
                {children}
            </AppCard>
            {!btnsDisable && (
                <div className={styles.layoutSetting__btns}>
                    <AppBtn className={styles.layoutSetting__btns__btn}
                    onClick={onSave}>
                        <i className={styles.layoutSetting__acceptIcon} />
                        Сохранить
                    </AppBtn>
                    <AppBtn className={styles.layoutSetting__btns__btn}
                    onClick={onCancel}>
                        <i className={styles.layoutSetting__cancelIcon} />
                        Отменить
                    </AppBtn>
                </div>
            )}
        </LayoutMain>
    )
}

export default LayoutSetting;