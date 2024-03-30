
import mongoose, {Schema} from "mongoose";

const schema: ReferralMethodSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
  },
  {strict: "throw", toJSON: {virtuals: true}, toObject: {virtuals: true}}
);


export const ExampleModel = mongoose.model(
  "ExampleModel",
  schema
);
