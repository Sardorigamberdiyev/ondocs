import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IAppTextareaProps } from './app-textarea.interfaces';
import styles from './app-textarea.module.sass';

const AppTextarea: FC<IAppTextareaProps> = (props) => {
    const { name, className, onChange, value, cols, rows, placeholder } = props;

    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);
    const lowVisionClassName = isLowVision ? ' lowVision' : '';
    return (
        <textarea 
        className={styles.appTextarea + ' ' + (className || '') + lowVisionClassName}
        placeholder={placeholder}
        cols={rows} 
        name={name}
        rows={cols}
        value={value}
        onChange={onChange} />
    )
}

export default AppTextarea;