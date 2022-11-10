import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';

const Notification: FC = () => {
    return (
        <LayoutSetting currentPage="notification"
        btnsDisable>
            <h1>Уведомление</h1>
        </LayoutSetting>
    )
}

export default Notification;