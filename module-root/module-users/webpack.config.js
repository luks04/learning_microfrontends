const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "enel",
    projectName: "module-users",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@enel/module-utilities"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
