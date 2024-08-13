import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB=async(student:IStudent)=>{

    const result = await StudentModel.create(student)
    return result

}


export const StudentService ={
    createStudentIntoDB,
}