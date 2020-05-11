const   platformsCollection = require("../db").db().collection("platforms"),
        bookIcon = require("assets/icons/book-open.svg");

let Platform = function(data) {
    this.data = data;
    // this.errors = [];
};

Platform.prototype.cleanup = function() {
    if (typeof(this.data.name) != "string") {
        this.data.name = "";
    };
    if (typeof(this.data.icon) != "string") {
        this.data.icon = bookIcon;
    };
    if (typeof(this.data.link) != "string") {
        this.data.link = "";
    };

    this.data = {
        name: this.data.name.trim(),
        icon: this.data.icon,
        link: this.data.link.trim()
    };
};

Platform.prototype.create = function() {
    return new Promise(async (resolve, reject) => {
        this.cleanup;
        await platformsCollection.insertOne(this.data);
        resolve();
    });
};