import { tariffsList } from '../../../common/data.variables';

export type Tariff = typeof tariffsList[0];

export interface ITariffsListItemProps {
    tariff: Tariff
}