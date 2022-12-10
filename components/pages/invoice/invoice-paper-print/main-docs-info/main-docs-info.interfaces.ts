import { INational } from "../../../../../features/invoice-data/invoice-data.types";

export interface IMainDocsInfoProps {
    side: 'first' | 'second';
    national: INational;
    tin: string;
}