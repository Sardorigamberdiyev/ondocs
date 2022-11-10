import { FC } from 'react';
import { LayoutSetting } from '../../../components/layouts';

const Codes: FC = () => {
    return (
        <LayoutSetting currentPage="codes"
        btnsDisable>
            <h1>Коды товаров и услуг</h1>
        </LayoutSetting>
    )
}

export default Codes;