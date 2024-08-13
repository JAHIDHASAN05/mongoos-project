import { Schema, model, connect } from "mongoose";
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IUserName,
} from "./student.interface";

const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    // required: true,
  },
  midlleName: {
    type: String,
  },
  lastName: {
    type: String,
    // required: true,
  },
});

const guardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
  },
  fatherOcupation: {
    type: String,
  },
  fatherContackNo: {
    type: String,
    // required: true,
  },
  motherName: {
    type: String,
  },
  motherContackNo: {
    type: String,
    // required: true,
  },
  motherOcupation: {
    type: String,
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    // required: true,
  },
  contackNo: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  ocupation: {
    type: String,
  },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: userNameSchema,
  gender: ["female", "male"],
  dateOfBirth: {type: String,},
  // email: {type: String,   required: true, },
  bloodGroup: {type: String},
  contackNo: {
    type: String,
    // required: true,
  },
  emergencyContack: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  guardian: userNameSchema,
  localGuardian: localGuardianSchema,
  profileImg: {
    type: String,
  },
  isActive: ["active", "inactive"],
});



export const StudentModel = model<IStudent>('Student', studentSchema)