
export interface ILayoutSettingProps {
    currentPage: 'profile' | 'notification' | 'codes' | 'info' | 'docs-format';
    btnsDisable?: boolean;
    onSave?: () => void;
    onCancel?: () => void;
}