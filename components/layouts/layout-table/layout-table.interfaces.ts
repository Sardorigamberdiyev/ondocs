
export interface ILayoutTableProps {
    addBtnText?: string;
    total?: string;
    totalDisabled?: boolean;
    removeBtnText?: string;
    className?: string;
    classNameBtn?: string;
    onRemoveRow: () => void;
    onAddRow: () => void;
    onDownloadXlsx?: () => void;
    onDownloadSample?: () => void;
    onDownloadUnit?: () => void;
}