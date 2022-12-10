import { FC, useState, createContext } from 'react';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export interface IWrapperProps {
    token?: string;
}

const withAuthGuard = (Wrapper: NextPage<IWrapperProps>) => {
    const AuthComponent: FC = (props) => {
        const [token, setToken] = useState<string | undefined>();

        useEffect(() => {
            const currentToken = Cookies.get('token');

            if (!currentToken)
                window.location.pathname = '/login';
            else
                setToken(currentToken);
        }, []);

        return token ? <Wrapper {...props} token={token} /> : null;
    }

    return AuthComponent;
}

export default withAuthGuard;