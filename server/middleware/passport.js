import GoogleStrategy from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import pkg from "pg";
import passport from 'passport';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/google/oauth",
    },
  
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0].value || "";

      try {
        const userQuery = await pool.query(
          'SELECT * FROM users WHERE username = $1',
          [email]
        );

       
        let user;
        if (userQuery.rows.length === 0) {
         
          const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
            [email, email]
          );
            console.log(newUser) 
          user = newUser.rows[0];
        } else {
          user = userQuery.rows[0];
        }
        console.log(user)
        const token = jwt.sign(
          { id: email, username: email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

export default passport;
