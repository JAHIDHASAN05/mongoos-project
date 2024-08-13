import app from "./app";
import config from "./app/config";

import mongoose  from "mongoose"

main().catch(err => console.log(err));



async function main() {

    try{

        await mongoose.connect(config.database_url as string);  
        app.listen(3000, () => {
            console.log(`Exampghsd===n port ${3000}`)
          })
        

    }catch(err){
        console.log(
           'jahid ha' +err
        );
    }

}


// main()



