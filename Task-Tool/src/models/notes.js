import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema(
  {
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    projectId: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    content: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Notes = mongoose.model("Notes", NotesSchema);
