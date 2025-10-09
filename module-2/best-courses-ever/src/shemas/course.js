import { model, Schema } from 'mongoose';

const extraMaterialsSchema = new Schema({
  title: String,
  content: Schema.Types.Mixed,
  type: {
    type: String,
    required: true,
    enum: ['video', 'article', 'document', 'code', 'link', 'image'],
  },
}, {
  timestamps: true,
  _id: true,
});

const lessonSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  commentsIds: [String],
  content: Schema.Types.Mixed,
  order: Number,
  isPublished: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
  _id: true,
});

const courseSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  inputOutputExamples: [extraMaterialsSchema],
  complexityLevel: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  tags: [String],
  extraMaterials: [extraMaterialsSchema],
  lessons: [lessonSchema],
  commentsIds: [{
    type: String,
    ref: 'Comment',
  }],
  appointedUsersIds: [{
    type: String,
    ref: 'User',
  }],
  rating: Number,
  authorId: {
    type: String,
    ref: 'User',
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  thumbnail: String,
  studentsCount: Number,
}, {
  timestamps: true,
  _id: true,
});

courseSchema.index({ title: 'text', tags: 'text' });
courseSchema.index({ rating: -1 });

export const ExtraMaterials = model('ExtraMaterials', extraMaterialsSchema);
export const Lesson = model('Lesson', lessonSchema);
export const Course = model('Course', courseSchema);
