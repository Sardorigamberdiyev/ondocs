import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './sidebar.module.sass';
import AppBtn from '../app-btn';

const Sidebar: FC = () => {
    const router = useRouter();

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__topContent}>
                <div className={styles.sidebar__header}>
                    <Link href="/">
                        <a>
                            <img src="/images/logo.png" />
                        </a>
                    </Link>
                </div>
                <div className={styles.sidebar__body}>
                    <div className={styles.sidebar__addMenu}>
                        <div className={styles.sidebar__addMenu__addLi}>
                            <div>
                                <i className={styles.sidebar__addIcon} />
                                <span>Создать</span>
                            </div>
                            <i className={styles.sidebar__rightArrowIcon} />
                        </div>
                        <ul className={styles.sidebar__addMenu__dropDownList}>
                            <li onClick={() => router.push('/document-creation/treaty')}>Договор</li>
                            <li onClick={() => router.push('/document-creation/procuratory')}>Доверенность</li>
                            <li onClick={() => router.push('/document-creation/invoice')}>Счет-фактура</li>
                            <li onClick={() => router.push('/document-creation/akt')}>Акт</li>
                            <li onClick={() => router.push('/document-creation/ttn')}>ТТН</li>
                        </ul>
                    </div>
                    <ul className={styles.sidebar__mainList}>
                        <li>
                            <i className={styles.sidebar__homeIcon} />
                            <span>Главная</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__downArrowIcon} />
                            <span>Входящие (2)</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__topArrowIcon} />
                            <span>Исходящие (3)</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__diskIcon} />
                            <span>Сохраненные (0)</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__trashIcon} />
                            <span>Архив (0)</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__newsIcon} />
                            <span>Новости</span>
                        </li>
                        <li>
                            <i className={styles.sidebar__settingIcon} />
                            <span>Настройка</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.sidebar__footer}>
                <AppBtn className={styles.sidebar__btnConsult}>
                    <i className={styles.sidebar__operatorIcon} />
                    <span>Консультация</span>
                </AppBtn>
                <div className={styles.sidebar__btnLogout}>
                    <i className={styles.sidebar__logoutIcon} />
                    <span>Выйти</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;