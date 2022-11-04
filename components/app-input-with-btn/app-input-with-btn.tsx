import { FC, PropsWithChildren } from 'react';
import { IAppInputWithBtnProps } from './app-input-with-btn.props';
import AppBtn from '../app-btn';
import styles from './app-input-with-btn.module.sass';

const AppInputWithBtn: FC<PropsWithChildren<IAppInputWithBtnProps>> = (props) => {
    const { children, onClick } = props;

    return (
        <div className={styles.appInputWithBtn}>
            <div className={styles.appInputWithBtn__inputWrapper}>{children}</div>
            <AppBtn className={styles.appInputWithBtn__btn}
            onClick={onClick}>
                <i className={styles.appInputWithBtn__searchIcon} />
            </AppBtn>
        </div>
    )
}

export default AppInputWithBtn;