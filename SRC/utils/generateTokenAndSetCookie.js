import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiersIn: "15d",
    });

    res.cookie("twt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    return token;
};

export default generateTokenAndSetCookie;

