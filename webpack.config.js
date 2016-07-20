const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./lib/parts');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  style: path.join(__dirname, 'src', 'scss', 'application.scss'),
  favicon: path.join(__dirname, 'src', 'assets', 'img', 'favicon.png'),
  images: path.join(__dirname, 'src', 'assets', 'img')
};

const common = merge(
  {
    entry: {
      src: PATHS.src,
      style: PATHS.style
    },
    output : {
      path: PATHS.dist,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },
  parts.indexTemplate({
    title: 'flashcards',
    appMountId: 'root',
    favicon: PATHS.favicon
  }),
  parts.loadImages(PATHS.images),
  parts.loadJSX(PATHS.src),
  parts.lintJSX(PATHS.src)
);


let config;

if (process.env.npm_lifecycle_event === 'build') {
  config = merge(
    common,
    {
      devtool: 'source-map',
      output: {
        path: PATHS.dist,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
      }
    },
    parts.clean(PATHS.dist),
    parts.setFreeVariable(
      'process.env.NODE_ENV',
      'production'
    ),
    parts.extractBundle({
      name: 'vendor',
      entries: ['react', 'react-dom']
    }),
    parts.minify(),
    parts.extractSCSS(PATHS.style)
  )
}
else {
  config = merge(
    common,
    {
      devtool: 'eval-source-map'
    },
    parts.setupSCSS(PATHS.style),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT,
      poll: process.env.ENABLE_POLLING
    }),
    parts.npmInstall()
  );
}


module.exports = validate(config, {
  quiet: true
});
