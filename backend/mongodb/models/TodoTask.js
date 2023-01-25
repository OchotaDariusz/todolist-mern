import mongoose from "mongoose"

const TodoTask = new mongoose.Schema({
    title: { type: String, required: true }
})

const TodoTaskSchema = mongoose.model('TodoTask', TodoTask)

export default TodoTaskSchema