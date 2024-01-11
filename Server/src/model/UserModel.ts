import mongoose, { Schema } from 'mongoose';

interface IUser {
  google_id?: string;
  full_name: string;
  email: string;
  password?: string;
  bookmarked_mnemonics: string[];
}

const userSchema = new Schema<IUser>({
  google_id: {
    type: String,
    required: true,
  },

  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    minlength: [8, 'Password must be at least 8 characters long'],
  },

  bookmarked_mnemonics: {
    type: [String],
  },
});

const UserModel = mongoose.model<IUser>('user', userSchema);

export = UserModel;
