const express = require("express");

const {prodHandler, devHandler} = require("./utils");

const app = express();
const port = 3001;

main();

function main() {
    app.use(express.static("public", {immutable: true, maxAge: "1y"}));
    const middleware = process.env.NODE_ENV === "production" ? prodHandler() : devHandler();

    app.use((req, res, next) => {
        res._startTime = Date.now();
        const calResponseTime = () => {
            const time2 = Date.now();
            const timeDiff = time2 - res._startTime;
            console.log(`path: ${req.path}, time: ${timeDiff}ms`);
        }
        res.once('finish', calResponseTime);
        res.once('close', calResponseTime);
        return next();
    })

    app.all("*", (req, res, next) => {
        console.log(`Request: ${req.method} ${req.url}`);
        return middleware(req, res, next);
    },);

    app.listen(port, () => {
        console.log(`Express server started on http://localhost:${port}`);
    });
}