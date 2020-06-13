const coursesCollection = require("../db").db().collection("courses");

let Course = function(data) {
    this.data = data;
    this.errors = [];
};

Course.prototype.cleanup = function() {
    if (typeof(this.data.name != "string")) {
        this.data.name = "";
    };
    if (typeof(this.data.instructor != "string")) {
        this.data.instructor = "";
    };
    if (typeof(this.data.platform != "string")) {
        this.data.platform = ""; 
    };

    this.data = {
        name: this.data.name.trim(),
        instructor: this.data.instructor.trim(),
        platform: this.data.platform.trim(),
        keywords: [],
        progress: 0,
        time: 0,
        certificate: false,
        completed: false
    };
};

Course.prototype.create = function() {
    return new Promise(async (resolve, reject) => {
        this.cleanup();

        if (!this.errors.length) {
            await coursesCollection.insertOne(this.data);
            resolve();
        } else {
            reject(this.errors);
        }
    });
};

module.exports = Course;