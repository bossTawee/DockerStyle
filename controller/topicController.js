import Topic from '../model/topic'

const getTopics = (req, res) => {
    const topic = Topic.find(function (err, topic) {
        if (err) {
            res.status(400).json({ message: "Bad Request" })
        } else {
            res.json(topic)
        }
    })
}

const getTopicsPromise = async (req, res) => {
    try {
        const topics = await Topic.find()
        res.json(topics)
    } catch(e) {
        res.status(400).json({ message: "Bad Request" })
    }
}


const createTopic = (req, res) => {
    const topic = new Topic({name: req.body.name, userId: req.body.userId})
    topic.save(function (err, topic){
        if (err) res.status(400).json({ message: "Bad Request" })
        else {
            res.json(topic)
        }
    })
}


export default {
    getTopics,
    getTopicsPromise
}