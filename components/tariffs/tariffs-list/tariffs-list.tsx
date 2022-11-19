import { FC } from 'react';
import { ITariffsListProps } from './tariffs-list.interfaces';
import TariffsListItem from '../tariffs-list-item';
import styles from './tariffs-list.module.sass';

const TariffsList: FC<ITariffsListProps> = ({tariffs}) => {
    return (
        <ul className={styles.tariffsList}>
            {
                tariffs.map((tariff) => (
                    <TariffsListItem
                    key={tariff.id}
                    tariff={tariff} />
                ))
            }
        </ul>
    )
}

export default TariffsList;