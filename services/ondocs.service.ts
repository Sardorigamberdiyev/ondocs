import { api } from './api';

export class OndocsService {
    public async getGuid(): Promise<string> {
        const guid = await api.get<string>('/guid');
        return guid.data;
    }
    
    async loginByPassword(login: string, password: string) {
        return api.post('/login', {login, password})
    }

    async register(firstName: string, lastName: string) {
        return api.post('/register', {firstName, lastName});
    }

    loginByStir(keyId: string) {

    }
}
