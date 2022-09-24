const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
require("dotenv").config();

module.exports = () => {
  const envConfig = require(`./webpack.${process.env.WEBPACK_ENV}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
