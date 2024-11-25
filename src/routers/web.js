const express = require("express");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const router = express.Router();

router.get("/admin/login", AuthController.login);
router.get("/admin/login", AuthController.logout);

router.get("/admin/dashboard", AdminController.index);
router.get("/admin/product/create", (req, res) => {
    res.send("create");
});
router.get("/admin/product/edit/:id", (req, res) => {
    res.send("edit");
});
router.get("/admin/product/delete/:id", (req, res) => {
    res.send("delete");
});
router.get("/admin/users", (req, res) => {
    res.send("login");
});
router.get("/admin/users/create", (req, res) => {
    res.send("logOut");
});
router.get("/admin/users/edit/:id", (req, res) => {
    res.send("dashboard");
});
router.get("/admin/users/edit/:id", (req, res) => {
    res.send("create");
});
router.get("/admin/categories", (req, res) => {
    res.send("edit");
});
router.get("/admin/categories/create", (req, res) => {
    res.send("edit");
});
router.get("/admin/categories/edit/:id", (req, res) => {
    res.send("edit");
});
router.get("/admin/categories/delete/:id", (req, res) => {
    res.send("edit");
});


module.exports = router;
