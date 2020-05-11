
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/UserModel');
const {secret} = require('../config/config');

module.exports = (passport) => {
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = secret ;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({
            where:{email: jwt_payload.email}
        }).then((user) => {
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        })           
    }))
}