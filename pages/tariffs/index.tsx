import { FC } from 'react';
import { LayoutMain } from '../../components/layouts';
import { AppList } from '../../components/app';
import { TariffsList } from '../../components/pages/tariffs';
import { tariffsList } from '../../common/data.variables';
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