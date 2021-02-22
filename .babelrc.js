const presets = [
  '@babel/preset-typescript',
  '@babel/preset-react',
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      modules: false,
      corejs: 3,
      shippedProposals: true,
    },
  ],
];

const plugins = [];

module.exports = {
  presets,
  plugins,
};
