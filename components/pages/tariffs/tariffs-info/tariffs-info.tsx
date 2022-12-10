import { FC, PropsWithChildren } from 'react';
import { ITariffsInfoProps } from './tariffs-info.interfaces';
import styles from './tariffs-info.module.sass';

const TariffsInfo: FC<PropsWithChildren<ITariffsInfoProps>> = (props) => {
    const { iconUrl, column, nameText, countText, priceStyle } = props;

    const countPriceClassName = priceStyle ? 
    styles.tariffInfo__textWrapper__price : 
    styles.tariffInfo__textWrapper__count;

    return (
        <div className={`${styles.tariffInfo} ${column ? styles.tariffInfo__column : ''}`}>
            <div className={styles.tariffInfo__iconWrapper}>
                <i style={{
                    maskImage: `url(${iconUrl})`,
                    WebkitMaskImage: `url(${iconUrl})`
                }} />
            </div>
            <div className={styles.tariffInfo__textWrapper}>
                <div className={styles.tariffInfo__textWrapper__text}>{nameText}</div>
                <div className={countPriceClassName}>{countText}</div>
            </div>
        </div>
    )
}

export default TariffsInfo;