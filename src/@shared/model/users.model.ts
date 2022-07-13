import { UserVo } from '../../@shared/vo/user.vo';
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  sub: String,
  cover: String,
  crtBy: String,
  created: Date,
  title: String,
  nameF: String,
  nameM: String,
  nameL: String,
  cell: String,
  email: String,
  cell2: String,
  email2: String,
  img: String,
  doB: Date,
  doD: Date,
  doA: Date,
  poB: String,
  gender: String,
  role: {
    type: String,
    enum: ['ADMIN', 'PLAYER', 'COACH'],
  },
  status: {
    type: String,
    enum: ['PENDING', 'ACTIVE', 'INACTIVE'],
  }
});

const userModel = mongoose.model<UserVo & mongoose.Document>('users', userSchema);

export default userModel;
