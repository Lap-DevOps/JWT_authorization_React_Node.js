const UserModel = require("../models/user-model");

const bcrypt = require("bcrypt");
const uuid = require("uuid");

const mailService = require("./mail-service");

const tokenService = require("./token-service");

class UserService {

    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw new Error(`User with email ${email} already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({ email, password: hashPassword , activationLink });

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const tokens = tokenService.generateTokens({email});
        await tokenService.saveToken(user._id, user.refreshToken);

        return user
    }




}



module.exports = new UserService()