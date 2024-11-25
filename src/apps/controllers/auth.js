const AuthController = {
    login: (req, res) => {
        res.send("/admin/login");
    },
    logout: (req, res) => {
        res.send("/admin/logout");
    }
}

module.exports = AuthController;