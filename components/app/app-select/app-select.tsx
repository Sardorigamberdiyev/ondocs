import { FC, useId } from 'react';
import { useSelector } from 'react-redux';
import Select, { StylesConfig } from 'react-select';
import { Colors } from '../../../common/variables/color.variables';
import { RootState } from '../../../store/store';
import { IAppSelectProps } from './app-select.interfaces';

export type Option = {
    label: string;
    value: string;
}

const AppSelect: FC<IAppSelectProps> = (props) => {
    const { 
        valueList, 
        value, 
        className, 
        loading, 
        placeholder, 
        name, 
        styleTable, 
        onChange
    } = props;

    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    const customStyles: StylesConfig<Option, false> = {
        indicatorSeparator: () => ({display: 'none'}),
        valueContainer: (provided) => ({
            ...provided,
            ...(styleTable ? {padding: 0} : {})
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            ...(styleTable ? {padding: 0} : {})
        }),
        control: (provided, state) => ({
            ...provided,
            ":hover": {borderColor: Colors.mediumGray},
            border: `1px solid ${state.menuIsOpen ? Colors.mediumGray : Colors.lightGray}`,
            boxShadow: 'none',
            backgroundColor: isLowVision ? Colors.lightYellow : 'transparent',
            height: styleTable ? '38px' : '46px',
            ...(styleTable ? {border: 'none'} : {})
        })
    }

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
