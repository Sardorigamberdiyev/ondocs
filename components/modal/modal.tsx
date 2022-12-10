import { FC, PropsWithChildren } from 'react';
import { IModal } from './modal.interfaces';
import styles from './modal.module.sass';

const Modal: FC<PropsWithChildren<IModal>> = ({children}) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    )
}

export default Modal;