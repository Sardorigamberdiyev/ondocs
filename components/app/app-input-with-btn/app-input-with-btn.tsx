import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IAppInputWithBtnProps } from './app-input-with-btn.interfaces';
import AppBtn from '../app-btn';
import styles from './app-input-with-btn.module.sass';

const AppInputWithBtn: FC<PropsWithChildren<IAppInputWithBtnProps>> = (props) => {
    const { children, onClick } = props;

    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);
    const lowVisionClassName = isLowVision ? ' lowVision' : '';

    return (
        <div className={styles.appInputWithBtn}>
            <div className={styles.appInputWithBtn__inputWrapper}>{children}</div>
            <AppBtn className={styles.appInputWithBtn__btn + lowVisionClassName}
            onClick={onClick}>
                <i className={styles.appInputWithBtn__searchIcon} />
            </AppBtn>
        </div>
    )
}

export default AppInputWithBtn;