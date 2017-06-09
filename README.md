# vue-cms-integration-demo

> [Live demo](https://www.paddingleft.com/Vue-CMS-integration-demo/) how to integration CMS in Vue.js 

# How things work

Logic could find in [main.js](./src/main.js)
1. [async Component](https://vuejs.org/v2/guide/components.html#Async-Components) `cms-subscriber` fetch CMS data
2. Set CMS content as `cms-subscriber`'s template
3. Vue.js will handle any custom directive or component in the template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
