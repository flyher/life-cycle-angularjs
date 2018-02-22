# life-cycle-angularjs

[![Build Status](https://travis-ci.org/flyher/life-cycle-angularjs.svg?branch=master)](https://travis-ci.org/flyher/life-cycle-angularjs?branch=master)
[![Release Version](https://img.shields.io/github/release/flyher/life-cycle-angularjs.svg)](https://github.com/flyher/life-cycle-angularjs/releases)
[![Issues](https://img.shields.io/github/issues/flyher/life-cycle-angularjs.svg)](https://github.com/flyher/life-cycle-angularjs/issues)
[![Software License](https://img.shields.io/github/license/flyher/life-cycle-angularjs.svg?branch=master)](https://github.com/flyher/life-cycle-angularjs/blob/master/LICENSE)

Life cycle demo base on AngularJS, Typescript, Package by Webpack.

You can visit this website here:

[Mirror 1](https://life-cycle-angularjs.99diary.com)

[Mirror 2](https://www.99diary.com/life-cycle-angularjs/)

### todo list

- [x] base on AngularJS component

- [x] support Typescript

- [x] package by Webpack

- [x] support router

### install


```shell
npm install
```

release

the code will release in `./dist/`
```
npm run release
```

pre

the code  will release in `./dist/` with sourceMap
```shell
npm run pre
```

### Q&A 

[Failed to instantiate module ngAnimate](https://stackoverflow.com/questions/23634393/failed-to-instantiate-module-nganimate-due-to)

[resolve `templateUrl` by angularjs-template-loader](https://www.npmjs.com/package/angularjs-template-loader)

##### 出现`<about class="ng-scope ng-isolate-scope">./about.html</about>`的问题:
``` log
`templateUrl`错误处理成`template`
```

[life-cycle-hooks](https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks)

### Tools

Build By Visual Studio Code

### License

Code in life-cycle-angularjs project is licensed under the GPL
