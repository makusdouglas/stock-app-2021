const CracoLessPlugin = require('craco-less');
const { darken } = require('polished');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // '@primary-color': '#1890ff',
                            '@primary-color': '#53284f',
                            // '@primary-color': darken(0.06, '#53284F'),
                            '@layout-header-background': '#3B1C38',
                            // '@menu-dark-inline-submenu-bg': '#230F21'
                            '@menu-dark-inline-submenu-bg': '#290027'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};