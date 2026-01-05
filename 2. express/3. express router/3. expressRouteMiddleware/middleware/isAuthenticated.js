// Mimic Auth.
const isAuthenticated = (req, res, next) => {
    const isLogin = true;

    if (isLogin) {
        next();
    } else {
        res.json({
            message: "Un-authorized"
        })
    }
}

module.exports = isAuthenticated
