
export interface IAuthService {
    loginByPassword(): Promise<void>;
    loginByKey(): Promise<void>;
    logout(): Promise<void>;
}