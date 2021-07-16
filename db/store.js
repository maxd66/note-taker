const { writeFile, readFile} = require('fs').promises
const path = require('path')

class Store {
    constructor (fileName) {
        this.path = path.join(__dirname, `${fileName}.json`)
    }

    getAll() {
        return readFile(this.path, 'utf-8').then((data) => JSON.parse(data));

    }

    write(data) {
        return writeFile(this.path, JSON.stringify(data));
    }

    push(item) {
        return this.getAll().then((data) => this.write([...data, item]));
    }
}


module.exports = Store;