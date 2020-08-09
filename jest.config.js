require('dotenv').config({path: './config/.env.test'})

module.exports = {
    setupFiles: [
        "<rootDir>/src/tests/configEnzyme.js"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"]
}