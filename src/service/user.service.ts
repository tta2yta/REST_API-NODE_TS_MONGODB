import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument } from "../model/user.model";
import { omit } from "lodash";

export default async function createUser(
  input: DocumentDefinition<UserDocument>
) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error);
    // throw error;
  }
}
export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
