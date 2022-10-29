import { FC, useId } from 'react';
import Select, { SingleValue, ActionMeta, StylesConfig } from 'react-select';
import { Colors } from '../../common/color.variables';

export type Option = {
    label: string;
    value: string;
}

export interface IAppSelectProps {
    loading: boolean;
    className?: string;
    value?: SingleValue<Option>;
    valueList?: Option[];
    placeholder?: string;
    name?: string;
    onChange?: (value: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void
}

const customStyles: StylesConfig<Option, false> = {
    indicatorSeparator: () => ({display: 'none'}),
    control: (provided, state) => ({
        ...provided,
        height: '46px',
        border: `1px solid ${state.menuIsOpen ? Colors.mediumGray : Colors.lightGray}`,
        boxShadow: 'none',
        ":hover": {borderColor: Colors.mediumGray}
    })
}

const AppSelect: FC<IAppSelectProps> = (props) => {
    const { valueList, value, className, loading, placeholder, name, onChange } = props;

    return (
        <Select 
        className={className || ''}
        instanceId={useId()}
        styles={customStyles}
        options={valueList}
        isLoading={loading}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange} />
    )
}

export default AppSelect;
