const app = require(__dirname + "/../apps/app")

const server = app.listen((port = 8000), (req, res) => {
    console.log(`server running on port ${port}`);
});