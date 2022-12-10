import { ActionMeta, SingleValue } from 'react-select';
import { Option } from './app-select';

export interface IAppSelectProps {
    loading: boolean;
    styleTable?: boolean;
    className?: string;
    value?: SingleValue<Option>;
    valueList?: Option[];
    placeholder?: string;
    name?: string;
    onChange?: (value: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void
}