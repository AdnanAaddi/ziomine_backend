// config/passport.js
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';
import { User } from '../models/user.model.js';

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Token from Authorization header
  secretOrKey: process.env.JWT_SECRET, // Secret to verify token
};

// JWT Strategy
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);

      if (user) {
        return done(null, user); // User found — attach to req.user
      } else {
        return done(null, false); // No user found
      }
    } catch (err) {
      return done(err, false); // Error occurred
    }
  })
);
