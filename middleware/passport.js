
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/UserModel');
const {secret} = require('../config/config');

module.exports = (passport) => {
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = secret ;
    passport.use(new JwtStrategy(opts,async (jwt_payload, done) => {  
        console.log(jwt_payload);
        
        await User.findOne({
            where:{email: jwt_payload.email}
        }, (error, user) => {

            if (error) {
                return done(error, false)
            }
            if (user) {
                console.log(user);
                
                done(null, user)
            } else {
                done(null, false)
            }
        })        
    }))
}