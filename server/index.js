import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.hot.js'

const app = express();
const compiler = new webpack(webpackConfig);
const port = 5000;

app.use(webpackDevMiddleware(compiler, {
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.use('*', (req, res) => {
	res.render('index.ejs', { htmlWebpackPlugin: false });
});
app.listen(port, () => {
	console.log(`Running on port: ${port}`);
});