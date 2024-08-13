import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();



app.use(express.json());
app.use(cors());

app.use('/api/v1/student', StudentRoutes)





app.get("/", (req: Request, res: Response) => {
  // console.log('iside');
  let a = 10;  
  // console.log('main part');
  res.send({'jdfadfa':'ja'});
});




export default app;


