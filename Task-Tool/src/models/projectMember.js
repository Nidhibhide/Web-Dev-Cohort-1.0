import mongoose, { Schema } from "mongoose";
import { roles,rolesList } from "../utils/constant";

const projectMemberSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    projectID: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  role:{type:String,enum:rolesList,default:roles.MEMBER,required:true},
  },
  { timestamps: true }
);

export const projectMember = mongoose.model(
  "projectMember",
  projectMemberSchema
);
