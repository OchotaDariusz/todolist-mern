import express from "express"

import TodoTaskSchema from "../mongodb/models/TodoTask.js"

const router = express.Router()

router.route('/').get(async (req, res) => {
    try {
        const tasks = await TodoTaskSchema.find({})
        res.status(200).json({ success: true, data: tasks })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: 'Fetching tasks failed, please try again.' })
    }
})

router.route('/').post(async (req, res) => {
    try {
        const { title } = req.body
        const newTask = await TodoTaskSchema.create({
            title
        })

        res.status(200).json({ success: true, data: newTask })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: 'Cannot add new task, please try again.' })
    }
})

export default router