import mongoose, { Schema } from "mongoose";
import { refreshAccessToken } from "../controllers/auth.controllers";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unque: true,
        trime: true
    },
    description: {
        type: String

    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref : "User",
        required: true
    }
},{timestamps: true},
);
export const Project = mongoose.model("Project", projectSchema);
