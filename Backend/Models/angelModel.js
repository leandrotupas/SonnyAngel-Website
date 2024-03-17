import mongoose from "mongoose";

const angelSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    avail: {
        type: Boolean,
        required: true,
    }
});

export const Angel = mongoose.model('Angel', angelSchema);