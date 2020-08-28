import Topic from '../model/topic'

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
function putUrloveonTop(req, res) {
    
    const { name } = req.body
    const { id } = req.params.id
    let topic = Topic.updateOne({_id: id}, {name})
    // topic.save(function(err, topic){
    //     if(err){
    //         res.status(400).json({message: "Cannot save"})
    //     } else {
    //         res.json(topic)
    //     }
    // }
    // Topic.save(topic)
    res.json(topic)
}

export default  { 
    getBoss,
    putUrloveonTop 
}