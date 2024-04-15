const mongoose = require('mongoose');

const createJobSchema = (data) => {
    const schemaFields = {};

    for (const key in data) {
        switch (key) {
            case 'minPrice':
            case 'maxPrice':
                schemaFields[key] = Number;
                break;
            case 'postingDate':
                schemaFields[key] = Date;
                break;
            case 'skills':
                schemaFields[key] = [String];
                break;
            default:
                schemaFields[key] = String;
                break;
        }
    }

    const jobSchema = new mongoose.Schema(schemaFields, { timestamps: true });
    return mongoose.model('Job', jobSchema);
};

module.exports = createJobSchema;
