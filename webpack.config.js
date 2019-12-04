const createExpoWebpackConfig = require("@expo/webpack-config");
module.exports = (env, argv) => {
  env.mode = "development";
  const config = createExpoWebpackConfig(env, argv);
  return config;
};