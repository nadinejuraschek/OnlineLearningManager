const   bcrypt          = require("bcryptjs"),
        validator       = require("validator"),
        md5             = require("md5"),
        usersCollection = require("../db").db().collection("users");

let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.cleanup = function() {
    if (typeof(this.data.firstname) != "string") {
        this.data.firstname = "";
    }
    if (typeof(this.data.email) != "string") {
        this.data.email = "";
    }
    if (typeof(this.data.password) != "string") {
        this.data.password = "";
    }

    this.data = {
        firstname: this.data.firstname.trim(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    };
};

User.prototype.validate = function() {
    return new Promise(async (resolve, reject) => {

        // name validation
        if (this.data.firstname == "") {
            this.errors.push("Please provide your first name.");
        };
        if (this.data.firstname != "" && !validator.isAlphanumeric(this.data.firstname)) {
            this.errors.push("Please only use letters and numbers for your name.");
        };
        if (this.data.firstname.length > 0 && this.data.firstname.length < 2) {
            this.errors.push("Your name must be at least 2 characters long.");
        };
        if (this.data.firstname.length > 30) {
            this.errors.push("Your name can not exceed 30 characters.");
        };

        // email validation
        if (!validator.isEmail(this.data.email)) {
            this.errors.push("You must provide a valid email address!");
        };

        // password validation
        if (this.data.password == "") {
            this.errors.push("You must provide a password.");
        };
        if (this.data.password.length > 0 && this.data.password.length < 6) {
            this.errors.push("Your password must be at least 6 characters long.");
        };
        if (this.data.password.length > 100) {
            this.errors.push("Your password can not exceed 100 characters.");
        };

        // only if email is valid --> check to see if it is already taken
        if (validator.isEmail(this.data.email)) {
            // if email is found, email is set, otherwise emailExists = null
            let emailExists = await usersCollection.findOne({ email: this.data.email });
            // if emailExists = null, next if statement won't run
            if (emailExists) {
                this.errors.push("This email is already being used.");
            };
        };
        
        resolve();
    });
};