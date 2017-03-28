var j = require('path').join;
module.exports = {
    entry: ['./asterix-core.js', './index.js'],
    output: {
        filename: 'bundle.js',
        path: j(__dirname, './output'),
        library: 'app',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    //externals: {
    //morningstar: 'morningstar'
    //},
    resolve: {
        alias: {
            morningstar: './asterix-core.js'
        }
    },
    module: {
        rules: [{
            test: j(__dirname, './asterix-core.js'),
            use: ['exports-loader?window.morningstar']
        }]
    }
};
