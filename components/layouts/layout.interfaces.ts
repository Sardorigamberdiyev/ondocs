// ----------------------- ILayoutMainProps
export interface ILayoutMainProps {
    pageName?: string;
    btnBackPageText?: string;
    btnBackPageLink?: string;
    prePathText?: string;
    currentPathText?: string;
    isUrlInfo?: boolean;
}

// ------------------------ ILayoutLoginProps
export interface ILayoutLoginProps {
    contentText?: string;
    contentTextMB?: string;
}

// ------------------------ ILayoutTableProps
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

// ------------------------- ILayoutDocCreationProps
export interface ILayoutDocCreationProps {
    cancelHandler?: () => void;
    viewDocHandler?: () => void;
    saveHandler?: () => void;
    signHandler?: () => void;
}

// ------------------------- ILayoutTableRowProps
export interface ILayoutTableRowProps {
    index: number;
    className?: string;
    getLayoutRowData?: (layoutData: any) => void;
}

// -------------------------- ILayoutSettingProps
export interface ILayoutSettingProps {
    currentPage: 'profile' | 'notification' | 'codes' | 'info' | 'docs-format';
    btnsDisable?: boolean;
    onSave?: () => void;
    onCancel?: () => void;
}
