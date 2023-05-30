import { createUser, getUserByEmail } from "../services/profile/user";
import express from "express";
import { random, authentication, tokenLifeSpan } from '../helpers'
import {
  APP_DOMAIN,
  APP_SECRET
} from "./../config/keys"
import Status from "./../handlers/Status";
import Response from "./../handlers/Response";
import { loginValidator, registerValidator } from "./../validators/user";

const response = new Response();

export const login = async (req: express.Request, res: express.Response) => {
  try {
    let { error } = loginValidator.validate(req.body)
    if (error) {
      response.ErrorResponse(
        res,
        Status.NOT_FOUND,
        error.details[0].message,
      );
    } else {
      const { email, password } = req.body;
      const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')

      if (!user) {
        response.ErrorResponse(
          res,
          Status.NOT_FOUND,
          "User Not Found.",
        );
      }

      const expectedHash = authentication(user.authentication.salt, password);

      if (user.authentication.password != expectedHash) {
        response.ErrorResponse(
          res,
          Status.FORBIDDEN,
          "Wrong Password.",
        );

      } else {
        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        await user.save()

        let profile = {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          location: user.location,
          email: user.email,
          user_type: user.user_type,
        }

        res.cookie(APP_SECRET, user.authentication.sessionToken, { expires: tokenLifeSpan, domain: APP_DOMAIN, path: "/" })
        response.SuccessResponse(res, Status.OK.code, Status.OK.message, {
          profile,
        });
      }
    }
  } catch (error) {
    response.ErrorResponse(
      res,
      Status.SERVER_ERROR.code,
      Status.SERVER_ERROR.message,
      "An error occured, please try again"
    );
  }
}


export const signUp = async (req: express.Request, res: express.Response) => {
  try {
    let { error } = registerValidator.validate(req.body)
    if (error) {
      response.ErrorResponse(
        res,
        Status.BAD_REQUEST.code,
        error.details[0].message,
      );

      const existingUser = await getUserByEmail(req.body.email)

      if (!existingUser) {
        console.log("User Exist Already")
        response.ErrorResponse(
          res,
          Status.BAD_REQUEST.code,
          "Email is registered already",
        );
      }

      let user_data = {
        ...req.body,
        redirect_path: "authReg",
        msg: " verify your email address",
        subject: "Welcome to Buy-Bater",
      }


      

    }

    /**
     * 
        const salt = random()
          const user = await createUser({
            firstName,
            lastName,
            phoneNumber,
            email,
            user_type,
            location,
            authentication: {
              salt,
              password: authentication(salt, req.body.password)
            }
          })    
    */

  } catch (error) {
    console.log(error);
    return res.sendStatus(400)
  }
}