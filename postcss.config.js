const path = require('path');

module.exports = () => {
    return {
        plugins: [
            require('postcss-cssnext')({
                features: {
                    customProperties: true,
                    autoprefixer: {
                        browsers: ['last 2 versions'],
                        remove: false,
                    },
                    calc: {
                        preserve: true,
                    },
                    apply: {
                        sets: true,
                    },
                    rem: false,
                },
            }),
            require('postcss-nested')({}),
            require('postcss-assets')({}),
            require('postcss-short')({}),
            require("postcss-color-function")({}),
            require('postcss-font-magician')({
                variants: {
                    'Libre Baskerville': {
                        "400":[]
                    },
                    'Archivo Narrow': {
                        "300": [],
                        "400": [],
                        "600": [],
                        "700": [],
                    },
                    'Source Serif Pro': {
                        "300": [],
                        "400": [],
                        "700": [],
                    },
                    foundries: ['google']
                }
            }),
            require('postcss-custom-properties')({}),
            require('postcss-animation')({}),
            require('postcss-import')({/*
                type: 'dependency',
                file: path.join(__dirname,'/frontEnd/style/icons.css'),
                parent: path.join(__dirname,'/frontEnd/style/index.css')*/
            })
        ]
    };
};