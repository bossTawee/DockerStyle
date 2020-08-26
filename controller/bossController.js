
function getBoss(req, res) {
    let userId = req.params.userId || ""
    if (userId == "") {
        res.status(404)
    }
    let user = {
        userId,
        userName: "justin",
        lastName: "oldFashion"
    }
    res.json(user)
}

export default getBoss