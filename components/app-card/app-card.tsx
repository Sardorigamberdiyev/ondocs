import { FC, PropsWithChildren } from 'react';
import { IAppCardProps } from './app-card.props';
import styles from './app-card.module.sass';

const AppCard: FC<PropsWithChildren<IAppCardProps>> = ({children, className}) => {
    return (
        <div className={`${styles.appCard} ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default AppCard;