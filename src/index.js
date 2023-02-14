import app from "./app";
import dotenv  from 'dotenv';
import { sequelize } from "./database/database";
// import "./models";
// import { userRouter } from "./routes";
dotenv.config();
const PORT= process.env.SERVER_PORT || 3000;

async function main(){
    await sequelize.authenticate();
    // await sequelize.sync({force: true});
    app.listen(PORT);
    console.log(`[backend-buryson | server ] Server is running at http://localhost:${PORT} :)`);
}

main();