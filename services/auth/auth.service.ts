import { IAuthService } from './auth.service.interface';
import { AxiosInstance } from 'axios';

export class AuthService implements IAuthService {
    constructor(private api: AxiosInstance) {}

    async loginByKey(): Promise<void> {
        
    }

    async loginByPassword(): Promise<void> {
        
    }

    async logout(): Promise<void> {
        
    }
}