# React Boilerplate 2017

- React
- Redux
- React Router
- SASS
- Hot Module Replacement
- Inline SVG Icons
- Autoprefixer
- RedBox Error Catching
- Mocha + Chai Testing Environment
- ES6/ES7 (class properties + decorators)

---

## EJS and HTML generation
To be able to use only one html 
template we use ```views/index.ejs``` as our express dev template and with ```HtmlWebpackPlugin```
For more details see: https://github.com/ampedandwired/html-webpack-plugin
---

## Scripts

#### npm test
#### npm start
#### npm run build:dev
Build your project to ```build/development``` with source-maps and no minimize

#### npm run build:prod
Build your project to ```build/production``` with no source-maps and minimized

## Configurations

Run tests through WebStorm, add Node options: ```--require babel-core/register```
