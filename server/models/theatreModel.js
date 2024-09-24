const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    isActive:{
            type: Boolean,
            required: false,
        },
    }, {
        timestamps:true
    }
);

const theatreModel = mongoose.model("theatres", theatreSchema);

module.exports = theatreModel;