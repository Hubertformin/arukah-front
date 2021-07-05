const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withFonts = require('next-fonts');
const { i18n } = require('./next-i18next.config');

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
    require.extensions[".less"] = (file) => {};
}

module.exports = {
    i18n,
    ...withFonts(withCSS({
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        },
        ...withLess(
            withSass({
                lessLoaderOptions: {
                    javascriptEnabled: true,
                },
            })
        ),
    })),
};
