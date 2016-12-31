module.exports = {
    entry  : './main.js',
    output : {
        filename : 'bundle.js'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    devServer: {
        contentBase: "./",
        compress: true,
        port: 9000
    },

    module : {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
};
