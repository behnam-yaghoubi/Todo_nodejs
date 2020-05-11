const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
module.exports = {
    async registerController(req, res){
        try {
            const result =await User.create({
                id: req.body.id,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async loginController(req, res){
        try {
            const user = await User.findOne({
                where:{
                    email: req.body.email
                }
            })
            if (!user) {
                    return res.status(401).send({
                        success: false,
                        msg: 'کاربری با این مشخصات وجود ندارد'
                    });
            }else{
                        await bcrypt.compare(req.body.password, user.password,(err, isMatch)=>{
                            if (isMatch && !err) {
                                let userEmail = user.email;
                                const token = jwt.sign(user.toJSON(), config.secret, {
                                    expiresIn: '1h'
                                })
                                return  res.status(200).json({
                                    success: true,
                                    token: `jwt ${token}`,
                                    msg : 'شما با موفقیت وارد شدید.',
                                    redirect:'/Todo'
                                })
                            }else{
                                res.status(401).send({
                                    success: false,
                                    msg: 'پسورد اشتباه است'
                                });
                            }
                        });
            }
            
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    }
}