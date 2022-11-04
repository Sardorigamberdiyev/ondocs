import { FC } from 'react';
import { IAppTextareaProps } from './app-textarea.props';
import styles from './app-textarea.module.sass';

const AppTextarea: FC<IAppTextareaProps> = (props) => {
    const { name, className, onChange, value, cols, rows, placeholder } = props;
    return (
        <textarea 
        className={`${styles.appTextarea} ${className || ''}`}
        placeholder={placeholder}
        cols={rows} 
        name={name}
        rows={cols}
        value={value}
        onChange={onChange} />
    )
}

export default AppTextarea;