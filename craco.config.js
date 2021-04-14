const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // '@primary-color': '#1890ff',
                            '@primary-color': '#1890ff',
                            // '@primary-color': darken(0.06, '#53284F'),
                            '@layout-header-background': '#0C0C53',
                            // '@menu-dark-inline-submenu-bg': '#230F21'
                            // '@menu-dark-inline-submenu-bg': '#290027'
                            '@menu-dark-inline-submenu-bg': '#000042'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: ".",
                /* tsConfigPath should point to the file where "baseUrl" and "paths" 
                are specified*/
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ],
};