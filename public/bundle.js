/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'babel-core'\\n    at Function.Module._resolveFilename (module.js:469:15)\\n    at Function.Module._load (module.js:417:25)\\n    at Module.require (module.js:497:17)\\n    at require (internal/module.js:20:19)\\n    at Object.<anonymous> (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/babel-loader/lib/index.js:3:13)\\n    at Module._compile (module.js:570:32)\\n    at Object.Module._extensions..js (module.js:579:10)\\n    at Module.load (module.js:487:32)\\n    at tryModuleLoad (module.js:446:12)\\n    at Function.Module._load (module.js:438:3)\\n    at Module.require (module.js:497:17)\\n    at require (internal/module.js:20:19)\\n    at loadLoader (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/loader-runner/lib/loadLoader.js:13:17)\\n    at iteratePitchingLoaders (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModule.js:179:3)\\n    at NormalModule.build (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModule.js:268:15)\\n    at Compilation.buildModule (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/Compilation.js:146:10)\\n    at factoryCallback (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/Compilation.js:329:11)\\n    at factory (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModuleFactory.js:253:5)\\n    at applyPluginsAsyncWaterfall (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModuleFactory.js:99:14)\\n    at /Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/tapable/lib/Tapable.js:204:11\\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/tapable/lib/Tapable.js:208:13)\\n    at resolver (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModuleFactory.js:74:11)\\n    at process.nextTick (/Users/steveraaen/Desktop/code/random-exercises/fails/node_modules/webpack/lib/NormalModuleFactory.js:205:8)\\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\\n    at process._tickCallback (internal/process/next_tick.js:104:9)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n/*globals __webpack_hash__ */\r\nif(false) {\r\n\tvar lastHash;\r\n\tvar upToDate = function upToDate() {\r\n\t\treturn lastHash.indexOf(__webpack_hash__) >= 0;\r\n\t};\r\n\tvar check = function check() {\r\n\t\tmodule.hot.check().then(function(updatedModules) {\r\n\t\t\tif(!updatedModules) {\r\n\t\t\t\tconsole.warn(\"[HMR] Cannot find update. Need to do a full reload!\");\r\n\t\t\t\tconsole.warn(\"[HMR] (Probably because of restarting the webpack-dev-server)\");\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\treturn module.hot.apply({\r\n\t\t\t\tignoreUnaccepted: true,\r\n\t\t\t\tignoreDeclined: true,\r\n\t\t\t\tignoreErrored: true,\r\n\t\t\t\tonUnaccepted: function(data) {\r\n\t\t\t\t\tconsole.warn(\"Ignored an update to unaccepted module \" + data.chain.join(\" -> \"));\r\n\t\t\t\t},\r\n\t\t\t\tonDeclined: function(data) {\r\n\t\t\t\t\tconsole.warn(\"Ignored an update to declined module \" + data.chain.join(\" -> \"));\r\n\t\t\t\t},\r\n\t\t\t\tonErrored: function(data) {\r\n\t\t\t\t\tconsole.warn(\"Ignored an error while updating module \" + data.moduleId + \" (\" + data.type + \")\");\r\n\t\t\t\t}\r\n\t\t\t}).then(function(renewedModules) {\r\n\t\t\t\tif(!upToDate()) {\r\n\t\t\t\t\tcheck();\r\n\t\t\t\t}\r\n\r\n\t\t\t\trequire(\"./log-apply-result\")(updatedModules, renewedModules);\r\n\r\n\t\t\t\tif(upToDate()) {\r\n\t\t\t\t\tconsole.log(\"[HMR] App is up to date.\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}).catch(function(err) {\r\n\t\t\tvar status = module.hot.status();\r\n\t\t\tif([\"abort\", \"fail\"].indexOf(status) >= 0) {\r\n\t\t\t\tconsole.warn(\"[HMR] Cannot check for update. Need to do a full reload!\");\r\n\t\t\t\tconsole.warn(\"[HMR] \" + err.stack || err.message);\r\n\t\t\t} else {\r\n\t\t\t\tconsole.warn(\"[HMR] Update check failed: \" + err.stack || err.message);\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\tvar hotEmitter = require(\"./emitter\");\r\n\thotEmitter.on(\"webpackHotUpdate\", function(currentHash) {\r\n\t\tlastHash = currentHash;\r\n\t\tif(!upToDate()) {\r\n\t\t\tvar status = module.hot.status();\r\n\t\t\tif(status === \"idle\") {\r\n\t\t\t\tconsole.log(\"[HMR] Checking for updates on the server...\");\r\n\t\t\t\tcheck();\r\n\t\t\t} else if([\"abort\", \"fail\"].indexOf(status) >= 0) {\r\n\t\t\t\tconsole.warn(\"[HMR] Cannot apply update as a previous update \" + status + \"ed. Need to do a full reload!\");\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\tconsole.log(\"[HMR] Waiting for update signal from WDS...\");\r\n} else {\r\n\tthrow new Error(\"[HMR] Hot Module Replacement is disabled.\");\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdC9vbmx5LWRldi1zZXJ2ZXIuanM/MmY4NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLypnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cclxuaWYobW9kdWxlLmhvdCkge1xyXG5cdHZhciBsYXN0SGFzaDtcclxuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcclxuXHRcdHJldHVybiBsYXN0SGFzaC5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XHJcblx0fTtcclxuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcclxuXHRcdG1vZHVsZS5ob3QuY2hlY2soKS50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XHJcblx0XHRcdGlmKCF1cGRhdGVkTW9kdWxlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiKTtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG1vZHVsZS5ob3QuYXBwbHkoe1xyXG5cdFx0XHRcdGlnbm9yZVVuYWNjZXB0ZWQ6IHRydWUsXHJcblx0XHRcdFx0aWdub3JlRGVjbGluZWQ6IHRydWUsXHJcblx0XHRcdFx0aWdub3JlRXJyb3JlZDogdHJ1ZSxcclxuXHRcdFx0XHRvblVuYWNjZXB0ZWQ6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcIklnbm9yZWQgYW4gdXBkYXRlIHRvIHVuYWNjZXB0ZWQgbW9kdWxlIFwiICsgZGF0YS5jaGFpbi5qb2luKFwiIC0+IFwiKSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvbkRlY2xpbmVkOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJJZ25vcmVkIGFuIHVwZGF0ZSB0byBkZWNsaW5lZCBtb2R1bGUgXCIgKyBkYXRhLmNoYWluLmpvaW4oXCIgLT4gXCIpKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9uRXJyb3JlZDogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiSWdub3JlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyBtb2R1bGUgXCIgKyBkYXRhLm1vZHVsZUlkICsgXCIgKFwiICsgZGF0YS50eXBlICsgXCIpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihyZW5ld2VkTW9kdWxlcykge1xyXG5cdFx0XHRcdGlmKCF1cFRvRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRjaGVjaygpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpO1xyXG5cclxuXHRcdFx0XHRpZih1cFRvRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdHZhciBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xyXG5cdFx0XHRpZihbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgY2hlY2sgZm9yIHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiKTtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gVXBkYXRlIGNoZWNrIGZhaWxlZDogXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcclxuXHRob3RFbWl0dGVyLm9uKFwid2VicGFja0hvdFVwZGF0ZVwiLCBmdW5jdGlvbihjdXJyZW50SGFzaCkge1xyXG5cdFx0bGFzdEhhc2ggPSBjdXJyZW50SGFzaDtcclxuXHRcdGlmKCF1cFRvRGF0ZSgpKSB7XHJcblx0XHRcdHZhciBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xyXG5cdFx0XHRpZihzdGF0dXMgPT09IFwiaWRsZVwiKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xyXG5cdFx0XHRcdGNoZWNrKCk7XHJcblx0XHRcdH0gZWxzZSBpZihbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlIGFzIGEgcHJldmlvdXMgdXBkYXRlIFwiICsgc3RhdHVzICsgXCJlZC4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGNvbnNvbGUubG9nKFwiW0hNUl0gV2FpdGluZyBmb3IgdXBkYXRlIHNpZ25hbCBmcm9tIFdEUy4uLlwiKTtcclxufSBlbHNlIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvaG90L29ubHktZGV2LXNlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"webpack-dev-server/client?http://localhost:8080\""); }());
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);