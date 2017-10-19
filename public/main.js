module.exports =
webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(24);
var reducers_1 = __webpack_require__(146);
exports.store = redux_1.createStore(reducers_1.default);
exports.default = exports.store;


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(24);
var todos_1 = __webpack_require__(147);
var reducer = redux_1.combineReducers({
    todos: todos_1.default,
});
exports.default = reducer;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(148);
var types_1 = __webpack_require__(190);
var initialState = [];
exports.default = redux_actions_1.handleActions((_a = {},
    _a[types_1.ADD_TODO] = function (state, action) {
        return [{
                id: state.reduce(function (maxId, todo) { return Math.max(todo.id || 0, maxId); }, -1) + 1,
                completed: action.payload.completed,
                text: action.payload.text,
            }].concat(state);
    },
    _a[types_1.COMPLETE_TODO] = function (state, action) {
        return state.map(function (todo) {
            return todo.id === action.payload.id ? __assign({}, todo, { completed: !todo.completed }) :
                todo;
        });
    },
    _a), initialState);
var _a;


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_TODO = 'ADD_TODO';
exports.COMPLETE_TODO = 'COMPLETE_TODO';


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __webpack_require__(192);
var Home_1 = __webpack_require__(194);
var Node_1 = __webpack_require__(195);
exports.default = [
    {
        component: App_1.default,
        routes: [
            {
                component: Home_1.default,
                exact: true,
                path: '/',
            },
            {
                component: Node_1.default,
                exact: true,
                path: '/node',
            },
        ],
    },
];


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_config_1 = __webpack_require__(55);
var Header_1 = __webpack_require__(193);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var route = this.props.route;
        return (React.createElement("div", null,
            React.createElement(Header_1.default, null),
            route && react_router_config_1.renderRoutes(route.routes)));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(57);
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.shouldComponentUpdate = function () {
        return false;
    };
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "site-header" },
            React.createElement("div", { className: "branding-container" },
                React.createElement("a", { href: "/", className: "branding" })),
            React.createElement("nav", { className: "site-nav" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/node" }, "Node"))))));
    };
    return Header;
}(React.Component));
exports.default = Header;


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "home" }, "Hello World!"));
    };
    return Home;
}(React.Component));
exports.default = Home;


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Node.prototype.render = function () {
        return (React.createElement("div", { className: "node" }, "Another Dummy page"));
    };
    return Node;
}(React.Component));
exports.default = Node;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_dom_1 = __webpack_require__(83);
var react_redux_1 = __webpack_require__(96);
var react_router_config_1 = __webpack_require__(55);
var react_router_dom_1 = __webpack_require__(57);
var store_1 = __webpack_require__(145);
var routes_1 = __webpack_require__(191);
react_dom_1.hydrate(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.BrowserRouter, null, react_router_config_1.renderRoutes(routes_1.default))), document.getElementById('root'));


/***/ })

},[80]);
//# sourceMappingURL=main.js.map