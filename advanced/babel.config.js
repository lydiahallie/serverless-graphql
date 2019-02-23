module.exports = function(api) {
  api.cache(true);

  const plugins = ['transform-es2015-modules-commonjs', '@babel/plugin-proposal-class-properties'];

  return {
    plugins
  };
};
