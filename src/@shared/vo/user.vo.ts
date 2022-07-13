import { PersonBaseVo } from './person-base.vo';
export interface UserVo extends PersonBaseVo {
    sub: string | null | undefined;
    cover: string | null | undefined;
    crtBy: string | null | undefined;
    created: Date;
    role: string; 
    status: string;
}
