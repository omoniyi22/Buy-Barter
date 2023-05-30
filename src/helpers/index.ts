import crypto from 'crypto';

import {
  APP_SECRET,
  HOURS_SESSION_LIFESPAN
} from "./../config/keys"


export const tokenLifeSpan = ((() => {
  return new Date(Number(new Date()) + HOURS_SESSION_LIFESPAN * 3600000)
})())

export const tokenLifeMaxAge = () => (HOURS_SESSION_LIFESPAN * 3600000)

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(APP_SECRET).digest("hex")
}

export const excludePasswordInProfile = (profile) => { 
  return
}