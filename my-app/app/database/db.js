import {Pool} from 'pg';

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    // port: process.env.PORT ? Number.parseInt(process.env.PORT): undefined, 
    password: process.env.PASSWORD

});

export default pool;
