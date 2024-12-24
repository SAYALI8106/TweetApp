import dotenv from "dotenv";

dotenv.config();     //Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // default port is 3000 if not specified in .env file