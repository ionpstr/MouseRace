// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/models/mouse-element.model.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chase = exports.ArrowPosition = void 0;
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Shape = /** @class */function () {
  function Shape() {
    this.name = "";
    this.imageURL = "";
  }
  Shape.prototype.setShape = function (name, imageURL) {
    this.name = name;
    this.imageURL = imageURL;
  };
  return Shape;
}();
var Square = /** @class */function (_super) {
  __extends(Square, _super);
  function Square(a) {
    var _this = _super.call(this) || this;
    _this.setShape("Square", a);
    return _this;
  }
  return Square;
}(Shape);
var Rectangle = /** @class */function (_super) {
  __extends(Rectangle, _super);
  function Rectangle() {
    var _this = _super.call(this) || this;
    _this.setShape("Rectangle", "a");
    return _this;
  }
  return Rectangle;
}(Shape);
var Circle = /** @class */function (_super) {
  __extends(Circle, _super);
  function Circle() {
    var _this = _super.call(this) || this;
    _this.setShape("Circle", "a");
    return _this;
  }
  return Circle;
}(Shape);
var ElementType = /** @class */function () {
  function ElementType() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.size = 0;
  }
  ElementType.prototype.setElementPosition = function (x, y) {
    this.x = x;
    this.y = y;
  };
  ElementType.prototype.getElementPosition = function () {
    return {
      x: this.x,
      y: this.y
    };
  };
  ElementType.prototype.move = function (x, y) {};
  ElementType.prototype.getRandom = function () {
    return Math.random();
  };
  return ElementType;
}();
var Chase = /** @class */function (_super) {
  __extends(Chase, _super);
  function Chase() {
    var _this = _super.call(this) || this;
    _this.speed = RandomNumber.getRandomSpeed();
    _this.size = RandomNumber.getRandomSize();
    _this.shape = new Square("C://Users//Demo//Desktop//mouseRace//media//square.svg");
    return _this;
  }
  Chase.prototype.move = function (x, y) {
    var position = this.getElementPosition();
    if (x > position.x && y > position.y) {
      this.setElementPosition(++position.x, ++position.y);
    } else if (x < position.x && y > position.y) {
      this.setElementPosition(--position.x, ++position.y);
    } else if (x > position.x && y < position.y) {
      this.setElementPosition(++position.x, --position.y);
    } else if (x < position.x && y < position.y) {
      this.setElementPosition(--position.x, --position.y);
    } else if (x > position.x) {
      this.setElementPosition(--position.x, position.y);
    } else if (x < position.x) {
      this.setElementPosition(++position.x, position.y);
    } else if (y > position.y) {
      this.setElementPosition(position.x, --position.y);
    } else if (y < position.y) {
      this.setElementPosition(position.x, ++position.y);
    } else {
      this.onHitTarget();
    }
  };
  Chase.prototype.getRandom = function () {
    return 1;
  };
  Chase.prototype.onHitTarget = function () {
    console.log("game over");
  };
  return Chase;
}(ElementType);
exports.Chase = Chase;
var Escape = /** @class */function (_super) {
  __extends(Escape, _super);
  function Escape() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Escape.prototype.move = function (x, y) {
    var position = this.getElementPosition();
    if (x > position.x && y > position.y) {
      this.setElementPosition(--position.x, --position.y);
    } else if (x < position.x && y > position.y) {
      this.setElementPosition(++position.x, --position.y);
    } else if (x > position.x && y > position.y) {
      this.setElementPosition(--position.x, ++position.y);
    } else if (x < position.x && y < position.y) {
      this.setElementPosition(++position.x, ++position.y);
    }
  };
  return Escape;
}(ElementType);
var Random = /** @class */function (_super) {
  __extends(Random, _super);
  function Random() {
    var _this = _super.call(this) || this;
    _this.directionX = 0;
    _this.directionY = 0;
    _this.setRandomDirection();
    return _this;
  }
  Random.prototype.checkScreenEnd = function (x, y) {
    var position = this.getElementPosition();
    if (position.x === x && position.y === y) {
      this.setRandomDirection();
    }
  };
  Random.prototype.move = function () {
    var position = this.getElementPosition();
    this.setElementPosition(position.x + this.directionX, position.y + this.directionY);
  };
  Random.prototype.setRandomDirection = function () {
    this.directionX = this.getRandom();
    this.directionY = this.getRandom();
  };
  Random.prototype.getRandom = function () {
    return RandomNumber.getRandomDirection();
  };
  return Random;
}(ElementType);
var RandomNumber = /** @class */function () {
  function RandomNumber() {}
  RandomNumber.getRandomSpeed = function () {
    return Math.random();
  };
  RandomNumber.getRandomSize = function () {
    return Math.random();
  };
  RandomNumber.getRandomDirection = function () {
    return Math.random();
  };
  return RandomNumber;
}();
var ArrowPosition = /** @class */function () {
  function ArrowPosition() {
    this.x = 0;
    this.y = 0;
  }
  ArrowPosition.prototype.getArrowPosition = function () {
    return {
      x: this.x,
      y: this.y
    };
  };
  ArrowPosition.prototype.setArrowPosition = function (x, y) {
    this.x = x;
    this.y = y;
  };
  return ArrowPosition;
}();
exports.ArrowPosition = ArrowPosition;
var Speed = /** @class */function () {
  function Speed() {
    this.speed = 0;
  }
  Speed.prototype.setSpeed = function (s) {
    this.speed = s;
  };
  Speed.prototype.getSpeed = function () {
    return this.speed;
  };
  return Speed;
}();
var Size = /** @class */function () {
  function Size() {
    this.size = 0;
  }
  Size.prototype.setSize = function (s) {
    this.size = s;
  };
  Size.prototype.getSize = function () {
    return this.size;
  };
  return Size;
}();
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var _mouseElement = require("./src/models/mouse-element.model");
var Main = /** @class */function () {
  function Main() {
    this.number = 20;
    this.mouse = new _mouseElement.ArrowPosition();
  }
  Main.prototype.start = function () {
    var _this = this;
    var _loop_1 = function _loop_1(i) {
      var chase = new _mouseElement.Chase();
      setInterval(function () {
        return chase.move(_this.mouse.getArrowPosition().x, _this.mouse.getArrowPosition().y);
      }, 10000);
    };
    for (var i = 0; i < this.number; ++i) {
      _loop_1(i);
    }
  };
  Main.prototype.changeMousePosition = function (event) {
    this.mouse.setArrowPosition(event.clientX, event.clientY);
    console.log("asd");
  };
  return Main;
}();
var game = new Main();
game.start();
function changePosition(event) {
  game.changeMousePosition(event);
}
},{"./src/models/mouse-element.model":"src/models/mouse-element.model.ts"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "2508" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/mouseRace.77de5100.js.map