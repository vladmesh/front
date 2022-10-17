module.exports = {
    entry: "./script.js",
    output: {
      filename: "./script.js",
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      port: 3000,
      static: {
        directory: './',
      },
    },
  };