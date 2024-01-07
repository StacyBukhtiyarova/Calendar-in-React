module.exports = {
  presets: [
    ["@babel/preset-env", { targets: '> 1%', useBuiltIns: "usage", corejs: 3 }],
    ["airbnb"],
  
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};
