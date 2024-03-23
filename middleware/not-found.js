const notFoundMiddleware = (req, res) => {
    return res.status(404).send("Route doesn't exist");
}

module.exports=notFoundMiddleware