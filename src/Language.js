const fileSystem = require('fs');
const path = require('path');

const lang = {};

fileSystem.readdirSync(__dirname + "/lang/").forEach(file => {
    if(path.extname(file) !== ".json") {
        return;
    }
    lang[path.basename(file, ".json")] = require(__dirname + "/lang/" + file);
});

module.exports = lang;