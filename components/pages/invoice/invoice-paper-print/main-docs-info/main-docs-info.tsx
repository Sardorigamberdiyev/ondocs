import { FC } from 'react';
import { IMainDocsInfoProps } from './main-docs-info.interfaces';
import styles from './main-docs-info.module.sass';

const MainInfo: FC<IMainDocsInfoProps> = ({side, national, tin}) => {

    const sideClassName = side === 'first' ? styles.mainDocsInfo__list__item__firstSide : styles.mainDocsInfo__list__item__secondSide;

    return (
        <div className={styles.mainDocsInfo}>
            <ul className={styles.mainDocsInfo__list}>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>Етказиб берувчи: </strong>
                    <span>{national.name || 'Пусто'}</span>
                </li>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>Манзил: </strong>
                    <span>{national.address || 'Пусто'}</span>
                </li>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>Етказиб берувчининг СТИР раками (СТИР): </strong>
                    <span>{tin || 'Пусто'}</span>
                </li>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>ККС туловчининг руйхаттан утиш коди: </strong>
                    <span>123456789</span>
                </li>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>Х/Р: </strong>
                    <span>123345667899521145151545</span>
                </li>
                <li className={styles.mainDocsInfo__list__item}>
                    <strong>МФО: </strong>
                    <span>{national.bankId || 'Пусто'}</span>
                </li>
                <li className={styles.mainDocsInfo__list__item + ' ' + sideClassName}>
                    <strong>QQS to'lovdan uzilish koeffitsienti butun zanjir bo'yicha: </strong>
                    <span>0.0</span>
                </li>
            </ul>
        </div>
    )
}

export default MainInfo;