import mongoose, { Schema } from "mongoose";

const subTaskSchema = new Schema(
  {
    TaskId: { type: Schema.Types.ObjectId, required: true, ref: "Task" },
    title: { type: String, required: true, trim: true },
    isCompleted: { type: Boolean, required: true,default:false },
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

export const subTask = mongoose.model("subTask", subTaskSchema);
