import mongoose, { Schema } from 'mongoose';

// create a NoteSchema
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  editMode: Boolean,
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
