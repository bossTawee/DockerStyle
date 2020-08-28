import Topic from '../model/topic'

 function login(req, res) {

    let body = req.body
    if (body.username == "admin" && body.password == "1234") {
        let token = "zaxx43q90jvdfsn321"
        let role = "Admin"
        res.json({
            token, role
        })
    } else if (body.username == "customer" && body.password == "1234") {
        let token = "fdasfzaxxfddrewqfsn"
        let role = "Customer"
        res.json({
            token, role
        })
    } else {
        res.json({
            "message": "error ja"
        })
    }

}

 function getTopics(req, res) {
    // const topic = Topic.find({})
    // res.json("")

    const topic = Topic.find(function (err, topic) {
        if (err) {
            res.status(400).json({ message: "Bad Request" })
        } else {
            res.json(topic)
        }
    })
}

export default  { 
    login,
    getTopics 
}
