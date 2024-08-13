"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    midlleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
    },
    fatherOcupation: {
        type: String,
    },
    fatherContackNo: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
    },
    motherContackNo: {
        type: String,
        required: true,
    },
    motherOcupation: {
        type: String,
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    contackNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    ocupation: {
        type: String,
    },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: userNameSchema,
    gender: ["female", "male"],
    dateOfBirth: { type: String, },
    email: { type: String, required: true, },
    bloodGroup: { type: String },
    contackNo: {
        type: String,
        required: true,
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
exports.StudentModel = (0, mongoose_1.model)('Student', studentSchema);
