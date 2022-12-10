import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IAppCardProps } from './app-card.interfaces';
import styles from './app-card.module.sass';

const AppCard: FC<PropsWithChildren<IAppCardProps>> = ({ children, className }) => {
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);
    const lowVisionClassName = isLowVision ? ' lowVision'  : '';

    return (
        <div className={styles.appCard + lowVisionClassName + ' ' + className ?? ''}>
            {children}
        </div>
    )
}

export default AppCard;