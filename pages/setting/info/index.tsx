import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';

const Info: FC = () => {
    return (
        <LayoutSetting
        currentPage="info">
            <h1>Информация о компании</h1>
        </LayoutSetting>
    )
}

export default Info;