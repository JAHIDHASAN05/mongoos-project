import app from "./app";
import config from "./app/config";

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    try{

        await mongoose.connect(config.database_url as string);  
        app.listen(config.port, () => {
          console.log(`Example app listening on port ${config.port}`)
        })

    }catch(err){
        console.log(
            err
        );
    }

}




