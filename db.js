import "dotenv/config"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306

})



export default AppDataSource