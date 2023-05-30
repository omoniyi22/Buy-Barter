import express from "express";

import _ from 'lodash'



import { getUserBySessionToken } from "../services/profile/user";

let { get, merge } = _

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string

    if (!currentUserId) {
      console.log("stopped1")
      return res.sendStatus(403)
    }

    if (currentUserId.toString() != id) {
      console.log("stopped1saaa")
      return res.sendStatus(403)
    }
    next();
  } catch (error) {
    console.log(error)

    return res.sendStatus(400)
  }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['BARTER-RICHY']

    if (!sessionToken) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next()

  } catch (error) {
    console.log(error);
    return res.sendStatus(400)
  }
}