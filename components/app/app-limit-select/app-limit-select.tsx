import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { limitList } from '../../../common/variables/data.variables';
import { RootState } from '../../../store/store';
import { IAppLimitSelectProps } from './app-limit-select.interfaces';
import AppBtn from '../app-btn';
import styles from './app-limit-select.module.sass';

const AppLimitSelect: FC<IAppLimitSelectProps> = ({getLimitValue}) => {
    const [limit, setLimit] = useState(limitList[0]);
    const [isShowList, setIsShowList] = useState(false);
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    useEffect(() => {
        if (getLimitValue)
            getLimitValue(limit)
    }, [limit])

    const limitListClassName = styles.appLimitSelect__limitList + 
    (isShowList ? ' ' + styles.appLimitSelect__limitList__showList : '');

    const lowVisionClassName = isLowVision ? ' lowVision' : '';

    return (
        <div className={styles.appLimitSelect + lowVisionClassName}>
            <span>Показать по:</span>
            <AppBtn className={styles.appLimitSelect__wrapper}
            onClick={() => setIsShowList(!isShowList)}
            onBlur={() => setIsShowList(false)}>
                <div className={styles.appLimitSelect__selected}>{limit}</div>
                <i className={styles.appLimitSelect__downArrowIcon} />
                <ul className={limitListClassName}>
                    {
                        limitList.map((item) => (
                            <li className={
                                styles.appLimitSelect__limitList__item + lowVisionClassName +
                                (item === limit ? ' ' + styles.appLimitSelect__limitList__item__active : '')
                            }
                            key={item}
                            onClick={() => {
                                setLimit(item);
                                setIsShowList(false);
                            }}>{item}</li>
                        ))
                    }
                </ul>
            </AppBtn>
        </div>
    )
}

export default AppLimitSelect;