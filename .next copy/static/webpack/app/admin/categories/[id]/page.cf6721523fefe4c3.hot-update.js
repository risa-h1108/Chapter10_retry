"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/categories/[id]/page",{

/***/ "(app-pages-browser)/./src/app/admin/categories/[id]/page.tsx":
/*!************************************************!*\
  !*** ./src/app/admin/categories/[id]/page.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_admin_categories_components_CategoryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/admin/categories/_components/CategoryForm */ \"(app-pages-browser)/./src/app/admin/categories/_components/CategoryForm.tsx\");\n//カテゴリー編集ページ admin/categories/[id]\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //async(e)=>{e()}の形になる。e：の後にどんな情報なのかを示している\n    //`e`は、フォームが送信されたときに自動的に渡される情報を保持\n    const handleSubmit = async (e)=>{\n        e.preventDefault(); //フォームが送信されたときに、ブラウザが持っている「デフォルトの動作」を止めるため\n        // カテゴリーを作成します。\n        try {\n            const res = await fetch(\"/api/admin/categories/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name\n                })\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to update category\");\n            }\n            alert(\"カテゴリーを更新しました。\");\n        } catch (error) {\n            console.error(\"Error updating category:\", error);\n            alert(\"カテゴリーの更新に失敗しました。もう一度お試しください。\");\n        }\n    };\n    const handleDeletePost = async ()=>{\n        //ユーザーがキャンセルする場合、「!confirm（確認内容の否定）」になるから、削除しないことになる。つまり、returnで処理終了。\n        if (!confirm(\"カテゴリーを削除しますか？\")) return;\n        try {\n            //ユーザーが削除（OK）する場合、「confirm（確認内容の否定「＝！」の否定「＝削除」で肯定）」になる。なので、await fetch以降の処理が走る。\n            const res = await fetch(\"/api/admin/categories/\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to delete category\");\n            }\n            alert(\"カテゴリーを削除しました。\");\n            router.push(\"/admin/categories\");\n        } catch (error) {\n            console.error(\"Error deleting category:\", error);\n            alert(\"カテゴリーの削除に失敗しました。もう一度お試しください。\");\n        }\n    };\n    //`id`が変わるたびにデータを取得するように設定\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetcher = async ()=>{\n            const res = await fetch(\"/api/admin/categories/\".concat(id));\n            const { category } = await res.json();\n            // 取得したカテゴリーの名前(category.name)を`setName`関数で状態に保存\n            setName(category.name);\n        };\n        fetcher();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-2xl font-bold\",\n                    children: \"カテゴリー編集\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_admin_categories_components_CategoryForm__WEBPACK_IMPORTED_MODULE_3__.CategoryForm, {\n                mode: \"edit\",\n                name: name,\n                setName: setName,\n                onSubmit: handleSubmit,\n                onDelete: handleDeletePost\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\risa1022\\\\my-app\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"4zR+F72xtp9q5jNL+fRwR5RHcAU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vY2F0ZWdvcmllcy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUFrQzs7O0FBR1U7QUFFVztBQUN3QjtBQUVoRSxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sRUFBRU8sRUFBRSxFQUFFLEdBQUdOLDBEQUFTQTtJQUN4QixNQUFNTyxTQUFTTiwwREFBU0E7SUFFeEIsMENBQTBDO0lBQzFDLGlDQUFpQztJQUNqQyxNQUFNTyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjLElBQUksMENBQTBDO1FBRTlELGVBQWU7UUFDZixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHlCQUE0QixPQUFITixLQUFNO2dCQUNyRE8sUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUViO2dCQUFLO1lBQzlCO1lBRUEsSUFBSSxDQUFDTyxJQUFJTyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUFDLE1BQU07UUFDUixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFDMUNELE1BQU07UUFDUjtJQUNGO0lBRUEsTUFBTUcsbUJBQW1CO1FBQ3ZCLHFFQUFxRTtRQUNyRSxJQUFJLENBQUNDLFFBQVEsa0JBQWtCO1FBRS9CLElBQUk7WUFDRiwrRUFBK0U7WUFDL0UsTUFBTWIsTUFBTSxNQUFNQyxNQUFNLHlCQUE0QixPQUFITixLQUFNO2dCQUNyRE8sUUFBUTtZQUNWO1lBQ0EsSUFBSSxDQUFDRixJQUFJTyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUFDLE1BQU07WUFDTmIsT0FBT2tCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0osT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtZQUMxQ0QsTUFBTTtRQUNSO0lBQ0Y7SUFFQSwwQkFBMEI7SUFDMUJ0QixnREFBU0EsQ0FBQztRQUNSLE1BQU00QixVQUFVO1lBQ2QsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLHlCQUE0QixPQUFITjtZQUNqRCxNQUFNLEVBQUVxQixRQUFRLEVBQUUsR0FBRyxNQUFNaEIsSUFBSWlCLElBQUk7WUFDbkMsZ0RBQWdEO1lBQ2hEdkIsUUFBUXNCLFNBQVN2QixJQUFJO1FBQ3ZCO1FBRUFzQjtJQUNGLEdBQUc7UUFBQ3BCO0tBQUc7SUFFUCxxQkFDRSw4REFBQ3VCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQTBCOzs7Ozs7Ozs7OzswQkFHMUMsOERBQUM1Qix1RkFBWUE7Z0JBQ1g4QixNQUFLO2dCQUNMNUIsTUFBTUE7Z0JBQ05DLFNBQVNBO2dCQUNUNEIsVUFBVXpCO2dCQUNWMEIsVUFBVVg7Ozs7Ozs7Ozs7OztBQUlsQjtHQS9Fd0JwQjs7UUFFUEgsc0RBQVNBO1FBQ1RDLHNEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vY2F0ZWdvcmllcy9baWRdL3BhZ2UudHN4PzQ4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy/jgqvjg4bjgrTjg6rjg7znt6jpm4bjg5rjg7zjgrggYWRtaW4vY2F0ZWdvcmllcy9baWRdXHJcblwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIkAvYXBwL3R5cGVzL1Bvc3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5Rm9ybSB9IGZyb20gXCJAL2FwcC9hZG1pbi9jYXRlZ29yaWVzL19jb21wb25lbnRzL0NhdGVnb3J5Rm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9hc3luYyhlKT0+e2UoKX3jga7lvaLjgavjgarjgovjgIJl77ya44Gu5b6M44Gr44Gp44KT44Gq5oOF5aCx44Gq44Gu44GL44KS56S644GX44Gm44GE44KLXHJcbiAgLy9gZWDjga/jgIHjg5Xjgqnjg7zjg6DjgYzpgIHkv6HjgZXjgozjgZ/jgajjgY3jgavoh6rli5XnmoTjgavmuKHjgZXjgozjgovmg4XloLHjgpLkv53mjIFcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8v44OV44Kp44O844Og44GM6YCB5L+h44GV44KM44Gf44Go44GN44Gr44CB44OW44Op44Km44K244GM5oyB44Gj44Gm44GE44KL44CM44OH44OV44Kp44Or44OI44Gu5YuV5L2c44CN44KS5q2i44KB44KL44Gf44KBXHJcblxyXG4gICAgLy8g44Kr44OG44K044Oq44O844KS5L2c5oiQ44GX44G+44GZ44CCXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSwgLy/jgqvjg4bjgrTjg6rjg7zlkI3jgpLooajnpLpcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgY2F0ZWdvcnlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFsZXJ0KFwi44Kr44OG44K044Oq44O844KS5pu05paw44GX44G+44GX44Gf44CCXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhdGVnb3J5OlwiLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KFwi44Kr44OG44K044Oq44O844Gu5pu05paw44Gr5aSx5pWX44GX44G+44GX44Gf44CC44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL+ODpuODvOOCtuODvOOBjOOCreODo+ODs+OCu+ODq+OBmeOCi+WgtOWQiOOAgeOAjCFjb25maXJt77yI56K66KqN5YaF5a6544Gu5ZCm5a6a77yJ44CN44Gr44Gq44KL44GL44KJ44CB5YmK6Zmk44GX44Gq44GE44GT44Go44Gr44Gq44KL44CC44Gk44G+44KK44CBcmV0dXJu44Gn5Yem55CG57WC5LqG44CCXHJcbiAgICBpZiAoIWNvbmZpcm0oXCLjgqvjg4bjgrTjg6rjg7zjgpLliYrpmaTjgZfjgb7jgZnjgYvvvJ9cIikpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvL+ODpuODvOOCtuODvOOBjOWJiumZpO+8iE9L77yJ44GZ44KL5aC05ZCI44CB44CMY29uZmlybe+8iOeiuuiqjeWGheWuueOBruWQpuWumuOAjO+8ne+8geOAjeOBruWQpuWumuOAjO+8neWJiumZpOOAjeOBp+iCr+Wumu+8ieOAjeOBq+OBquOCi+OAguOBquOBruOBp+OAgWF3YWl0IGZldGNo5Lul6ZmN44Gu5Yem55CG44GM6LWw44KL44CCXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2FkbWluL2NhdGVnb3JpZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIGNhdGVnb3J5XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbGVydChcIuOCq+ODhuOCtOODquODvOOCkuWJiumZpOOBl+OBvuOBl+OBn+OAglwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vY2F0ZWdvcmllc1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjYXRlZ29yeTpcIiwgZXJyb3IpO1xyXG4gICAgICBhbGVydChcIuOCq+ODhuOCtOODquODvOOBruWJiumZpOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhOOAglwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL2BpZGDjgYzlpInjgo/jgovjgZ/jgbPjgavjg4fjg7zjgr/jgpLlj5blvpfjgZnjgovjgojjgYbjgavoqK3lrppcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2lkfWApO1xyXG4gICAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAvLyDlj5blvpfjgZfjgZ/jgqvjg4bjgrTjg6rjg7zjga7lkI3liY0oY2F0ZWdvcnkubmFtZSnjgpJgc2V0TmFtZWDplqLmlbDjgafnirbmhYvjgavkv53lrZhcclxuICAgICAgc2V0TmFtZShjYXRlZ29yeS5uYW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hlcigpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsIGZvbnQtYm9sZFwiPuOCq+ODhuOCtOODquODvOe3qOmbhjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPENhdGVnb3J5Rm9ybVxyXG4gICAgICAgIG1vZGU9XCJlZGl0XCJcclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIHNldE5hbWU9e3NldE5hbWV9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLy/jg5Xjgqnjg7zjg6Djga7pgIHkv6FcclxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlUG9zdH0gLy/liYrpmaTjga7lh6bnkIZcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnlGb3JtIiwiUGFnZSIsIm5hbWUiLCJzZXROYW1lIiwiaWQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZURlbGV0ZVBvc3QiLCJjb25maXJtIiwicHVzaCIsImZldGNoZXIiLCJjYXRlZ29yeSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1vZGUiLCJvblN1Ym1pdCIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/categories/[id]/page.tsx\n"));

/***/ })

});