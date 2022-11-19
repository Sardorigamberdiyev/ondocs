import { FC } from 'react';
import { LayoutMain } from '../../components/layouts';
import { tariffsList } from '../../common/data.variables';
import TariffsList from '../../components/tariffs/tariffs-list';
import AppList from '../../components/app-list';
import styles from './tariffs.module.sass';

const Tariffs: FC = () => {
    return (
        <LayoutMain pageName="Тарифы">
            <AppList
            error={false}
            loading={false} 
            arrayData={tariffsList}>
                <TariffsList tariffs={tariffsList} />
            </AppList>
        </LayoutMain>
    )
}

export default Tariffs;