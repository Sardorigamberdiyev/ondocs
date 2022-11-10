import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';

const Profile: FC = () => {
    return (
        <LayoutSetting
        currentPage="profile">
            <h1>Аккаунт</h1>
        </LayoutSetting>
    )
}

export default Profile;