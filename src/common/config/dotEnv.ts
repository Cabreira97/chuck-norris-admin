import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.API_URL as string;

export {
  API_URL
};
