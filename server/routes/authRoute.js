import express from 'express';

const { Request, Response, NextFunction } = express; 

import passport from "../middleware/passport.js";
const router = express.Router();

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
    "/oauth",
    passport.authenticate("google", {
      failureRedirect: "http://localhost:3000",
      session: false,
    }),
    (req, res) => {
      const { token, user } = req.user;
      if (token && user) {
        res.redirect(`http://localhost:3000/dashboard?token=${token}`);
      } else {
        res.redirect("http://localhost:3000");
      }
    }
  );
  

export default router;
