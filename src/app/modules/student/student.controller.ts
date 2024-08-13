import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
try{
    const student = req.body.student;
    console.log('inside contron' , student);
    const result = await StudentService.createStudentIntoDB(student);
  
    res.status(200).json({
      success: "true",
      message: "Student created successfully",
      data: result,
    });
}catch(err){
    console.log('jahidddddddddddddddddddddddddddd',err);
}
};


export const StudentsControllers={
    createStudent,
}