import app from "./app.js";
import dotenv  from 'dotenv';
import { sequelize } from "./database/database.js";

dotenv.config();
const PORT= process.env.SERVER_PORT || 3000;

async function main(){
    await sequelize.sync({force: true})
    app.listen(PORT);
    console.log(`[backend-buryson | server ] Server is running at http://localhost:${PORT} :)`);
}

main();