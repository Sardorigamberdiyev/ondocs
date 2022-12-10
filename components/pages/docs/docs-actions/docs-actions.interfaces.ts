
export interface IDocsActionsProps {
    acceptBtnDisabled?: boolean;
    acceptBtnText?: string;
    cancelBtnDisabled?: boolean;
    cancelBtnText?: string;
    getLimit?: (limit: number) => void;
    acceptClick?: () => void;
    cancelClick?: () => void;
    syncClick?: () => void;
    xlsxClick?: () => void;
}