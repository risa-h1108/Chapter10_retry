"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/categories/new/page",{

/***/ "(app-pages-browser)/./src/app/admin/categories/new/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/admin/categories/new/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_admin_categories_components_CategoryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/admin/categories/_components/CategoryForm */ \"(app-pages-browser)/./src/app/admin/categories/_components/CategoryForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault(); //フォームのデフォルトの動作をなしにする\n        try {\n            const res = await fetch(\"/api/admin/categories\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name\n                })\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to create category\");\n            }\n            // レスポンスから作成したカテゴリーのIDを取得します。\n            const { id } = await res.json();\n            router.push(\"/admin/categories/\".concat(id));\n            alert(\"カテゴリーを作成しました。\");\n        } catch (error) {\n            console.error(\"Error creating category:\", error);\n            alert(\"カテゴリーの作成に失敗しました。もう一度ご実施ください。\");\n        }\n    };\n    return(//auto：ブラウザにをマージン（外側の余白）を自動調整させる値\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-2xl font-bold\",\n                    children: \"カテゴリー作成\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\new\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\new\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_admin_categories_components_CategoryForm__WEBPACK_IMPORTED_MODULE_3__.CategoryForm, {\n                mode: \"new\",\n                name: name,\n                setName: setName,\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\new\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\new\\\\page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this));\n}\n_s(Page, \"GOhvNsg47M4XBEiwFdlVmS9d+Bs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vY2F0ZWdvcmllcy9uZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFFVztBQUNtQztBQUVoRSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1NLFNBQVNMLDBEQUFTQTtJQUV4QixNQUFNTSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjLElBQUkscUJBQXFCO1FBRXpDLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLHlCQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVo7Z0JBQUs7WUFDOUI7WUFFRixJQUFJLENBQUNNLElBQUlPLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSw2QkFBNkI7WUFDN0IsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNVCxJQUFJVSxJQUFJO1lBQzdCZCxPQUFPZSxJQUFJLENBQUMscUJBQXdCLE9BQUhGO1lBQ2pDRyxNQUFNO1FBQ1IsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDRCxNQUFNO1FBQ1I7SUFDRjtJQUVBLE9BQ0UsaUNBQWlDO2tCQUNqQyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBMEI7Ozs7Ozs7Ozs7OzBCQUcxQyw4REFBQ3hCLHVGQUFZQTtnQkFDWDBCLE1BQUs7Z0JBQ0x4QixNQUFNQTtnQkFDTkMsU0FBU0E7Z0JBQ1R3QixVQUFVdEI7Ozs7Ozs7Ozs7OztBQUlsQjtHQS9Dd0JKOztRQUVQRixzREFBU0E7OztLQUZGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FkbWluL2NhdGVnb3JpZXMvbmV3L3BhZ2UudHN4Pzc4NzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIkAvYXBwL3R5cGVzL1Bvc3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUZvcm0gfSBmcm9tIFwiQC9hcHAvYWRtaW4vY2F0ZWdvcmllcy9fY29tcG9uZW50cy9DYXRlZ29yeUZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy/jg5Xjgqnjg7zjg6Djga7jg4fjg5Xjgqnjg6vjg4jjga7li5XkvZzjgpLjgarjgZfjgavjgZnjgotcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcIi9hcGkvYWRtaW4vY2F0ZWdvcmllc1wiLCAvL+ODh+ODvOOCv+OCkumAgeOCi+WFiOOBrlVSTFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8v44CM5paw44GX44GE44KC44Gu44KS5L2c44KK44Gf44GE44KI44CN44Go44GE44GG5oSP5ZGzXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSwgLy/pgIHjgovjg4fjg7zjgr/jga7kuK3ouqtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBjYXRlZ29yeVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g44Os44K544Od44Oz44K544GL44KJ5L2c5oiQ44GX44Gf44Kr44OG44K044Oq44O844GuSUTjgpLlj5blvpfjgZfjgb7jgZnjgIJcclxuICAgICAgY29uc3QgeyBpZCB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcm91dGVyLnB1c2goYC9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YCk7XHJcbiAgICAgIGFsZXJ0KFwi44Kr44OG44K044Oq44O844KS5L2c5oiQ44GX44G+44GX44Gf44CCXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNhdGVnb3J5OlwiLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KFwi44Kr44OG44K044Oq44O844Gu5L2c5oiQ44Gr5aSx5pWX44GX44G+44GX44Gf44CC44KC44GG5LiA5bqm44GU5a6f5pa944GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvL2F1dG/vvJrjg5bjg6njgqbjgrbjgavjgpLjg57jg7zjgrjjg7PvvIjlpJblgbTjga7kvZnnmb3vvInjgpLoh6rli5Xoqr/mlbTjgZXjgZvjgovlgKRcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTJ4bCBmb250LWJvbGRcIj7jgqvjg4bjgrTjg6rjg7zkvZzmiJA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxDYXRlZ29yeUZvcm1cclxuICAgICAgICBtb2RlPVwibmV3XCJcclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIHNldE5hbWU9e3NldE5hbWV9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnlGb3JtIiwiUGFnZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiaWQiLCJqc29uIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtb2RlIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/categories/new/page.tsx\n"));

/***/ })

});