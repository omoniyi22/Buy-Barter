import { config } from "dotenv"
config()
const ENV: any = process.env
export const {
  MONGO_URI,
  APP_SECRET,
  APP_PORT,
  HOURS_SESSION_LIFESPAN,
  APP_DOMAIN
} = ENV