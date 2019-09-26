// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        'postcss-px-to-viewport': {
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['van'], // (Array) The selectors to ignore and leave as px. 
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
            mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
        },
    }
}