const path = requiere('path');

module.exports = {
    entry: '.src/index.js', //Punto de entrada de aplicación
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,  //Regex para identificar  archivos CSS
                use: ['style-loader', 'css-loader'], //loaders para procesar
            },
            {
                test: /\.js$/, //regex para identificar archivo js
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //loader para convertir js moderno al js compatible a mas navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //genera source maps para facilitar la depuración
    devServer: {
        contentBase: path.resort(__dirname, 'dist'), //Carpeta del que corra el servidor
        compress: true, //Habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};