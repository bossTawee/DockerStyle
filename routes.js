import express from 'express'
import topicController from './controller/topicController'
import userController from './controller/userController'

const router = express.Router()

router.post("/topic", function (req, res){
    const { name, createdDate } = req.body

    const topic = new Topic({ name, createdDate }) 
    topic.save(function(err, topic){
        if(err){
            res.status(400).json({message: "Bad Request"})
        } else {
            res.json(topic)
        }
    })
})

        
router.get('/topics', topicController.getTopics)

router.get('/topics-promise', topicController.getTopicsPromise)
router.post('/createUser', userController.createUser)

export default router