const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema(
  {
    title: {
    type: String,
    required: true,
  },
  description: {
      type: String,
    },
  status: {
    type: String,
    enum: ["completed", "Progress", "Incomplete"],
    default: "Incomplete",
  },
  }, 
  {
    timestamps: true,
  }
)
module.exports=mongoose.model("Task", TaskSchema);