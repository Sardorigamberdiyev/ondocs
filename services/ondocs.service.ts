import { AxiosInstance } from 'axios';
import { AuthService } from './auth/auth.service';
import { IAuthService } from './auth/auth.service.interface';

export class OndocsService {
    public auth: IAuthService;
    
    constructor(private api: AxiosInstance) {
        this.auth = new AuthService(api);
    }

    public async getGuid(): Promise<string> {
        const guid = await this.api.get<string>('/guid');
        return guid.data;
    }
}