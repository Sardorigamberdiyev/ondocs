import { FC, useState, useEffect } from 'react';
import { AppBtn, AppInput, AppTextarea } from '../../app';
import styles from './treaty-content-form.module.sass';

interface ITreatyContentFormProps {
    formId?: string;
    getFormData?: (formData: any) => void;
    onAddContentForm?: () => void;
    onRemoveContentForm?: (contentFormId: string) => void;
}

const TreatyContentForm: FC<ITreatyContentFormProps> = (props) => {
    const { onAddContentForm, onRemoveContentForm, getFormData, formId } = props;

    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (getFormData)
            getFormData({
                header,
                description
            })
    }, [
        header,
        description
    ])

    return (
        <div className={styles.treatyContentForm}>
            <AppInput 
            className={styles.treatyContentForm__input} 
            type="text"
            placeholder="Заголовок*"
            value={header}
            onChange={(e) => setHeader(e.target.value)} />
            <AppTextarea 
            placeholder="Текст*"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
            <div className={styles.treatyContentForm__btnsWrapper}>
                <AppBtn className={styles.treatyContentForm__btn}
                onClick={onAddContentForm}>
                    <i className={styles.treatyContentForm__addIcon} />
                </AppBtn>
                <AppBtn className={styles.treatyContentForm__btn}
                onClick={() => {
                    if (onRemoveContentForm)
                        onRemoveContentForm(formId || '')
                }}>
                    <i className={styles.treatyContentForm__trashIcon} />
                </AppBtn>
            </div>
        </div>
    )
}

export default TreatyContentForm;