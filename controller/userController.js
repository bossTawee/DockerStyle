import User from '../model/user.js'

const createUser = (req, res) => {
    const newUser = new User(req.body)
    // newUser.save()
    newUser.save(function(err, _){
        if(err){
            res.status(400).json({message: "Cannot save"})
        } else {
            res.json()
        }
    })
    // res.json()
}

export default {
    createUser
}