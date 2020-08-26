function login(req, res) {

    let body = req.body
    if(body.username == "admin" && body.password == "1234"){
        let token = "zaxx43q90jvdfsn321"
        let role = "Admin"
        res.json({
            token, role
        })
    }else if(body.username == "customer" && body.password == "1234"){
        let token = "fdasfzaxxfddrewqfsn"
        let role = "Customer"
        res.json({
            token, role
        })
    }else {
        res.json({
            "message": "error ja"
        })
    }
    
}

export default login