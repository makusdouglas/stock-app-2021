const CracoLessPlugin = require('craco-less');
const {lighten, darken} = require('polished')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // '@primary-color': '#53284F',
                            '@primary-color': darken(0.06,'#53284F'),
                            // '@layout-header-background': '#231222',
                            // '@layout-header-background': '#242423',
                            // '@layout-header-background': '#1A0D19',
                            '@layout-header-background': '#2F142C',
                            '@menu-dark-inline-submenu-bg': '#230F21'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};