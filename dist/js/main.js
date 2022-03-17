/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ \"./modules/load.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ \"./modules/filter.js\");\n\r\n\r\n\r\n\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _renderdbHeroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderdbHeroes */ \"./modules/renderdbHeroes.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () =>{\r\n\r\n  const parameter = document.getElementById('parameter')\r\n  const selectParameter = document.getElementById('selectParameter')\r\n\r\n  let numOption\r\n\r\n  parameter.addEventListener('change', (e)=>{\r\n    // получаем выбранный параметр по индексу\r\n    numOption =  e.target.options[e.target.options.selectedIndex].value\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) =>{\r\n      ;(0,_filters__WEBPACK_IMPORTED_MODULE_2__.parameterSelect)(data,numOption,selectParameter)\r\n    })\r\n  })\r\n  selectParameter.addEventListener('change',(e)=>{\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) =>{\r\n      const selectParameterNum =  e.target.options[e.target.options.selectedIndex].value\r\n      ;(0,_renderdbHeroes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.parameterFilter)(data,numOption,selectParameterNum))\r\n    })\r\n    // parameterFilter = (heroes,numOption,selectParameter)\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/filters.js":
/*!****************************!*\
  !*** ./modules/filters.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParameter\": () => (/* binding */ getParameter),\n/* harmony export */   \"parameterFilter\": () => (/* binding */ parameterFilter),\n/* harmony export */   \"parameterSelect\": () => (/* binding */ parameterSelect)\n/* harmony export */ });\nconst getParameter = (heroes, parameter) =>{\r\n    for (let key in heroes[0]) {\r\n      if (!(key === 'name' || key === 'photo' || key == 'movies')) {\r\n        const option = document.createElement('option')\r\n        option.value = key\r\n        option.textContent = key\r\n        parameter.append(option)\r\n        }\r\n    }\r\n}\r\nconst parameterSelect = (heroes,numOption,selectParameter) => {\r\n  // очищаем массив с веденными данными\r\n  for (let i = selectParameter.children.length - 1; i > -1; i--) {\r\n    selectParameter.children[i].remove();\r\n  }\r\n  // создаём пустой  массив для перебора уникальных параметров\r\n  let uniqElem = []\r\n  // перебор все значений heroes и сохранение как массив\r\n  heroes.forEach((e, index) => {\r\n    uniqElem[index] = e[numOption]\r\n  });\r\n  // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы\r\n  const uniqueHeroes = Array.from(new Set(uniqElem));\r\n  uniqueHeroes.forEach(e => {\r\n    if (e) {\r\n      const option = document.createElement('option')\r\n      option.value = e\r\n      option.textContent = e\r\n      selectParameter.append(option)\r\n    }\r\n  });\r\n}\r\n\r\nconst parameterFilter = (heroes,numOption,selectParameterNum) =>{\r\n\r\n  return heroes.filter((heroesItem) =>{\r\n    console.log(heroesItem[numOption] === selectParameterNum);\r\n    return heroesItem[numOption] === selectParameterNum\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/filters.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  return fetch('../db/dbHeroes.json')\r\n  .then((responce) =>{\r\n    return responce.json()\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/load.js":
/*!*************************!*\
  !*** ./modules/load.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _renderdbHeroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderdbHeroes */ \"./modules/renderdbHeroes.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./modules/filters.js\");\n\r\n\r\n\r\n\r\n// получаем элемент чтобы создать select из параметров\r\nconst parameter = document.getElementById('parameter')\r\n\r\nconst load = () => {\r\n  ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    ;(0,_renderdbHeroes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    // функция перебора паарметров для сохранения на странице\r\n    (0,_filters__WEBPACK_IMPORTED_MODULE_2__.getParameter)(data,parameter);\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack:///./modules/load.js?");

/***/ }),

/***/ "./modules/renderdbHeroes.js":
/*!***********************************!*\
  !*** ./modules/renderdbHeroes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderdbHeroes = (heroes) => {\r\n  const heroesWrapper = document.querySelector('.heroes')\r\n\r\n  localStorage.setItem('heroes', JSON.stringify(heroes))\r\n  heroesWrapper.innerHTML = ''\r\n\r\n  heroes.forEach(heroesItem => {\r\n    const itemStart = `\r\n<!-- КАРТОЧКА Героев -->\r\n  <div class=\"col-12 col-md-6 col-lg-4 col-xl-12 mt-3\">\r\n    <div class=\"card \">\r\n      <div class=\"card-img-wrapper\">\r\n        <span class=\"card-img-top\" style=\"\r\n            background-image: url('${(heroesItem.photo) ? heroesItem.photo : '' }');\r\n\r\n          \"></span>\r\n      </div>\r\n\r\n      <div class=\"card-body justify-content-between\">\r\n        <div class=\"card-item card-name\">\r\n          <span> Name  </span>\r\n            <span>${(heroesItem.name) ? heroesItem.name : '' }</span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-species\">\r\n          <span>Species </span>\r\n          <span>${(heroesItem.species) ? heroesItem.species : ''} </span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-gender\">\r\n          <span>Gender </span>\r\n\r\n          <span>${(heroesItem.gender) ? heroesItem.gender : ''} </span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-birthDay\">\r\n          <span>BirthDay </span>\r\n          <span>${(heroesItem.birthDay) ? heroesItem.birthDay : ''}</span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-deathDay\">\r\n          <span>DeathDay </span>\r\n          <span>  ${(heroesItem.deathDay) ? heroesItem.deathDay : ''}</span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-status\">\r\n          <span>Status </span>\r\n          <span>  ${(heroesItem.status) ? heroesItem.status : ''}</span>\r\n        </div>\r\n\r\n        <div class=\"card-item card-actors\">\r\n          <span>Actors </span>\r\n          <span>${(heroesItem.actors) ? heroesItem.actors : ''} </span>\r\n        </div>\r\n        <div class=\"card-film\">\r\n              <span>Film: </span>`\r\n                let filmItem = ''\r\n                if (heroesItem.movies) {\r\n                  heroesItem.movies.forEach((element,index) => {\r\n\r\n                    if (heroesItem.movies.length - 1 == index) {\r\n                      filmItem += `<span> ${element}. </span>`\r\n                    } else {\r\n                      filmItem += `<span> ${element}, </span>`\r\n                    }\r\n                  });\r\n                }\r\n\r\n                const itemEnd = `${filmItem}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>`\r\n      heroesWrapper.insertAdjacentHTML('beforeEnd',itemStart + itemEnd)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderdbHeroes);\n\n//# sourceURL=webpack:///./modules/renderdbHeroes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;