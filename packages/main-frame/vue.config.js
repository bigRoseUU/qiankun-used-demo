const generateConfig = require("../../build/generate-config");
const { name } = require("./package");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = generateConfig({ process, __dirname, name }, {});
