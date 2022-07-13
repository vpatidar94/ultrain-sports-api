import { UserVo } from "@shared/vo/user.vo";

export interface UserPasswordDto {
    user: UserVo;
    password: string;
}
