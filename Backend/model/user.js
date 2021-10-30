import mongoose from 'mongoose';


// how our document look like
const userSchema = mongoose.Schema(
    {
        photo: {
            type: String,
            default: 'about.jpg',
          },

        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true,
            trim: true,
        },

        post: {
            type: String,
            enum: ['user', 'CEO', 'FirstPrinciples', 'Manager'],
            default: 'user',
          },

        TestimonialDescription: {
            type: String,
            trim: true,
          },
        
        createdAt: {
            type: Date,
            default: Date.now(),
          },

          active: {
            type: Number,
            default: 0,  
            select: 1,
          }
}
);

const postUser = mongoose.model('testimonials', userSchema);

export default postUser;

