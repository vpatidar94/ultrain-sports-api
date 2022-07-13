import { UserVo } from '../../@shared/vo/user.vo';
import { Request, Response, Router } from 'express';
import { URL } from '../const/url';
import { Route } from '../interface/route.interface';
import authMiddleware from "../middleware/auth.middleware";
import { UserService } from '../service/user.service';
import { ResponseUtility } from '../utility/response.utility';
import { UserPasswordDto } from '@shared/dto/user-password.dto';

class UserApi implements Route {
    public path = URL.MJR_USER;
    public router = Router();

    private userService = new UserService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {

        // /api/core/v1/user/app-update
        this.router.post(`${this.path}${URL.ADD_UPDATE}`, async (req: Request, res: Response) => {
            try {
                const body = req.body as UserPasswordDto;
                const user = await this.userService.saveUser(body.user, body.password);
                if (!user) {
                    ResponseUtility.sendFailResponse(res, null, 'User already exists');
                    return;
                }
                ResponseUtility.sendSuccess(res, user);
            } catch (error) {
                console.log(error);
                ResponseUtility.sendFailResponse(res, error);
            }
        });

        // /api/core/v1/user/emp-add-update
        // this.router.post(`${this.path}${URL.EMP_ADD_UPDATE}`, authMiddleware, async (req: Request, res: Response) => {
        //     try {
        //         const emp = await this.userService.addUpdateEmp(req.body as UserEmpDepartmentDto);
        //         if (!emp) {
        //             ResponseUtility.sendFailResponse(res, null, 'User already exists');
        //             return;
        //         }
        //         ResponseUtility.sendSuccess(res, emp, 'Employee Added Successfully');
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error);
        //     }
        // });

        // // /api/core/v1/user/cust-add-update
        // this.router.post(`${this.path}${URL.CUST_ADD_UPDATE}`, authMiddleware, async (req: Request, res: Response) => {
        //     try {
        //         const emp = await this.userService.addUpdateCustomer(req.body as UserCustTypeDto);
        //         if (!emp) {
        //             ResponseUtility.sendFailResponse(res, null, 'User already exists');
        //             return;
        //         }
        //         ResponseUtility.sendSuccess(res, emp, 'Customer Added Successfully');
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error);
        //     }
        // });

        // // /api/core/v1/user/emp-list
        // this.router.get(`${this.path}${URL.EMP_LIST}`, authMiddleware, async (req: Request, res: Response) => {
        //     try {
        //         const list = await this.userService.getEmployeeList();
        //         if (!list) {
        //             ResponseUtility.sendFailResponse(res, null);
        //             return;
        //         }
        //         ResponseUtility.sendSuccess(res, list);
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error);
        //     }
        // });

        // // /api/core/v1/user/cust-list
        // this.router.get(`${this.path}${URL.CUST_LIST}`, authMiddleware, async (req: Request, res: Response) => {
        //     try {
        //         const list = await this.userService.getCustomerList();
        //         if (!list) {
        //             ResponseUtility.sendFailResponse(res, null);
        //             return;
        //         }
        //         ResponseUtility.sendSuccess(res, list);
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error);
        //     }
        // });

        // // /api/core/v1/user/authenticate
        // this.router.post(`${this.path}${URL.AUTH}`, async (req: Request, res: Response) => {
        //     try {
        //         const auth = req.body as UserAuthDto;
        //         const user = await this.userService.authenticate(auth.email, auth.password);
        //         if (!user) {
        //             ResponseUtility.sendFailResponse(res, null, 'Invalid email or password');
        //             return;
        //         }
        //         ResponseUtility.sendSuccess(res, user);
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error, error);
        //     }
        // });

        // // /api/core/v1/user/update-password
        // this.router.post(`${this.path}${URL.CHANGE_PASSWORD}`, passwordMiddleware, async (req: Request, res: Response) => {
        //     try {
        //         const auth = req.body as UserPasswordDto;
        //         const changed = await this.userService.changeUserAuth(auth, req.body.claim);
        //         if (changed) {
        //             ResponseUtility.sendSuccess(res, changed);
        //             return;
        //         }
        //         ResponseUtility.sendFailResponse(res, null, 'Not authorized to update password');
        //     } catch (error) {
        //         ResponseUtility.sendFailResponse(res, error, error);
        //     }
        // });
    }
}

export default UserApi;
