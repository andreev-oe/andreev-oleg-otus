import { model, Schema } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import autopopulate from 'mongoose-autopopulate';

const extraMaterialsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
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

const commentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  text: String,
  authorId: {
    type: String,
    ref: 'User',
  },
  lessonId: {
    type: String,
    ref: 'Lesson',
  }
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

courseSchema.plugin(mongooseLeanVirtuals);
courseSchema.plugin(autopopulate);
commentSchema.plugin(mongooseLeanVirtuals);
commentSchema.plugin(autopopulate);

courseSchema.index({ title: 'text', tags: 'text' });
courseSchema.index({ rating: -1 });

export const Course = model('Course', courseSchema);
export const Comment = model('Comment', commentSchema);
