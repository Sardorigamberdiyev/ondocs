import { Option } from '../../app/app-select/app-select';

export interface ILanguageDropdownProps {
    isShowDropdown?: boolean;
    onSelected?: (option: Option & {icon: string}) => void;
}