import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        const mysqlPool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        // Test the connection
        await mysqlPool.getConnection();
        console.log('MySQL Connected');

        return mysqlPool; // Return the pool for further use
    } catch (error) {
        console.log("Error connecting with MySQL: ", error.message);
        process.exit(1);
    }
};
