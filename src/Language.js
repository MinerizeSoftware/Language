const fileSystem = require('fs');
const path = require('path');

const lang = {};

fileSystem.readdirSync(__dirname + "/lang/").forEach(file => {
    if(path.extname(file) !== ".json") {
        return;
    }
    let name = path.basename(file, ".json");
    lang[name] = require(__dirname + "/lang/" + file);
});

module.exports = lang;