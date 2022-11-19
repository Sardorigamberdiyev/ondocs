import { codesList } from '../../../common/data.variables';

export interface ICodeTableRowProps {
    index: number;
    code: typeof codesList[0];
    onDeleteCode: (codeId: string) => void;
}