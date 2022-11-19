import { FC, useState, useEffect } from 'react';
import { IAppLimitSelectProps } from './app-limit-select.interfaces';
import { limitList } from '../../common/data.variables';
import styles from './app-limit-select.module.sass';

const AppLimitSelect: FC<IAppLimitSelectProps> = ({getLimitValue}) => {
    const [limit, setLimit] = useState(limitList[0]);
    const [isShowList, setIsShowList] = useState(false);

    useEffect(() => {
        if (getLimitValue)
            getLimitValue(limit)
    }, [limit])

    const limitListClassName = styles.appLimitSelect__limitList + ' ' + 
    (isShowList ? styles.appLimitSelect__limitList__showList : '');

    return (
        <div className={styles.appLimitSelect}>
            <span>Показать по:</span>
            <div className={styles.appLimitSelect__wrapper}
            onClick={() => setIsShowList(!isShowList)}>
                <div className={styles.appLimitSelect__selected}>{limit}</div>
                <i className={styles.appLimitSelect__downArrowIcon} />
            </div>
            <ul className={limitListClassName}>
                {
                    limitList.map((item) => (
                        <li className={
                            styles.appLimitSelect__limitList__item + ' ' +
                            (item === limit ? styles.appLimitSelect__limitList__item__active : '')
                        }
                        key={item}
                        onClick={() => {
                            setLimit(item);
                            setIsShowList(false);
                        }}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AppLimitSelect;