npm run build 
https://github.com/ninjapayofficial/sample-plugin.git





Process:
git init
git remote add origin https://github.com/ninjapayofficial/sample-plugin.git
npm init -y
npm install moment
mkdir src
touch src/index.js

touch webpack.config.js

npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env

touch .babelrc

npm install sequelize pg