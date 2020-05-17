import passport from "passport";
// import LocalStrategy from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { User } from "../db/models/UserModel";
import { JWT_SECRET } from "../config/constants";

// const localStrategy = new LocalStrategy(async (username, password, done) => {
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return done(null, false);
//     } else if (!user._comparePassword(password)) {
//       return done(null, false);
//     }
//     return done(null, user);
//   } catch (error) {
//     return done(null, false);
//   }
// });

const JWTOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(JWTOpts, async (jwt_payload, done) => {
  try {
    const user = await User.findOne({
      where: { email: jwt_payload.email },
    });
    return done(null, user);
  } catch (error) {
    return done(null, false);
  }
});

// passport.use(localStrategy);
passport.use(jwtStrategy);

// export const localAuth = passport.authenticate("local", { session: false });
export const jwtAuth = passport.authenticate("jwt", { session: false });
