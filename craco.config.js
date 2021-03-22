const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#53284F', '@layout-header-background': '#231222' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};