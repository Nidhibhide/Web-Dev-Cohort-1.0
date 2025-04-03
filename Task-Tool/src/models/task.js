import mongoose, { Schema } from "mongoose";
import { taskStatus, taskStatusList } from "../utils/constant";

const TaskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: false, trim: true },
    status: { type: String, enum: taskStatusList, default: taskStatus.TODO,required:true},
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    attachments: { type: [{ url: String, fileType: String, size: Number }] },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
