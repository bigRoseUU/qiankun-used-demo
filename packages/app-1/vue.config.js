/** @format */

const generateConfig = require('../../build/generate-config')
const { name } = require('./package')

module.exports = generateConfig({ process, __dirname, name, isChild: true }, {})
