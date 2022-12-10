import { docsStatus } from '../../../../common/variables/data.variables';

export interface IInnerDocsStatusCardProps {
    status: keyof typeof docsStatus;
    signClick?: () => void;
    cancelClick?: () => void;
    copyClick?: () => void;
}