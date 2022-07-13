import { UserAuthVo } from '@shared/vo/user-auth.vo';
import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: String,
  password: String,
});

const userAuthModel = mongoose.model<UserAuthVo & mongoose.Document>('user_auths', schema);

export default userAuthModel;
