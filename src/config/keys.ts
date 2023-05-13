import { config } from "dotenv"
config()

let {
  MONGO_URI,
  APP_SECRET,
  PORT
} = process.env

export {
  MONGO_URI,
  APP_SECRET,
  PORT
}