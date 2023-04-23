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
})({"utils/Utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSize = exports.RandomNumber = exports.Direction = exports.ArrowPosition = void 0;
var RandomNumber = /** @class */function () {
  function RandomNumber() {}
  RandomNumber.getRandomSpeed = function () {
    return Math.round(Math.random() * 100 + 10);
  };
  RandomNumber.getRandomSize = function () {
    return Math.round(Math.random() * 70 + 30);
  };
  RandomNumber.getRandomDirection = function (s) {
    return Math.round(Math.random() * s);
  };
  return RandomNumber;
}();
exports.RandomNumber = RandomNumber;
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
var WindowSize = /** @class */function () {
  function WindowSize() {
    this.width = window.innerWidth;
    this.length = window.innerHeight;
  }
  WindowSize.prototype.getWindowSize = function () {
    return {
      width: this.width - 200,
      height: this.length - 100
    };
  };
  return WindowSize;
}();
exports.WindowSize = WindowSize;
var Direction = /** @class */function () {
  function Direction(x, y) {
    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  return Direction;
}();
exports.Direction = Direction;
},{}],"models/Shape.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square = exports.Shape = exports.Rectangle = exports.Circle = void 0;
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
  function Shape(width, height) {
    this.imageURL = "";
    this.borderRadius = 0;
    this.color = "";
    this.width = width;
    this.height = height;
  }
  Shape.prototype.getUrl = function () {
    return this.imageURL;
  };
  Shape.prototype.getWidth = function () {
    return this.width;
  };
  Shape.prototype.getHeight = function () {
    return this.height;
  };
  Shape.prototype.getBorderRadius = function () {
    return this.borderRadius;
  };
  Shape.prototype.getColor = function () {
    return this.color;
  };
  Shape.prototype.setShape = function (imageURL) {
    this.imageURL = imageURL;
  };
  Shape.prototype.setBorderRadius = function (s) {
    this.borderRadius = s;
  };
  Shape.prototype.setColor = function (s) {
    this.color = s;
  };
  return Shape;
}();
exports.Shape = Shape;
var Square = /** @class */function (_super) {
  __extends(Square, _super);
  function Square(size) {
    var _this = _super.call(this, size, size) || this;
    _this.setShape("/square.db3ff434.png");
    _this.setColor("aquamarine");
    return _this;
  }
  return Square;
}(Shape);
exports.Square = Square;
var Rectangle = /** @class */function (_super) {
  __extends(Rectangle, _super);
  function Rectangle(size) {
    var _this = _super.call(this, 2 * size, size) || this;
    _this.setShape("/rectangle.065c7623.png");
    _this.setColor("blue");
    return _this;
  }
  return Rectangle;
}(Shape);
exports.Rectangle = Rectangle;
var Circle = /** @class */function (_super) {
  __extends(Circle, _super);
  function Circle(size) {
    var _this = _super.call(this, size, size) || this;
    _this.setBorderRadius(50);
    _this.setShape("/circle.c74be8b8.png");
    _this.setColor("rose");
    return _this;
  }
  return Circle;
}(Shape);
exports.Circle = Circle;
},{}],"models/ElementType.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementType = void 0;
var _Shape = require("./Shape");
var _Utils = require("../utils/Utils");
var ElementType = /** @class */function () {
  function ElementType() {
    var _a = new _Utils.WindowSize().getWindowSize(),
      width = _a.width,
      height = _a.height;
    this.x = _Utils.RandomNumber.getRandomDirection(width);
    this.y = _Utils.RandomNumber.getRandomDirection(height);
    this.shape = new _Shape.Shape();
  }
  ElementType.prototype.getElementPosition = function () {
    return {
      x: this.x,
      y: this.y
    };
  };
  ElementType.prototype.setElementPosition = function (x, y) {
    this.x = x;
    this.y = y;
  };
  return ElementType;
}();
exports.ElementType = ElementType;
},{"./Shape":"models/Shape.ts","../utils/Utils":"utils/Utils.ts"}],"views/Game.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;
var Game = /** @class */function () {
  function Game() {
    this.id = "game";
    this.score = 0;
  }
  Game.gameInstance = function () {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  };
  Game.prototype.startScore = function (elem) {
    var _this = this;
    setInterval(function () {
      ++_this.score;
      elem.innerHTML = "Score: ".concat(_this.score);
    }, 1000);
  };
  Game.prototype.gameOver = function () {
    var el = document.getElementById(this.id);
    el.innerHTML = "<h1 style='font-size:50px;width:300px; margin:auto'>Game Over!</h1>";
  };
  return Game;
}();
exports.Game = Game;
},{}],"controllers/Chase.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chase = void 0;
var _ElementType = require("../models/ElementType");
var _Utils = require("../utils/Utils");
var _Shape = require("../models/Shape");
var _Game = require("../views/Game");
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
var Chase = /** @class */function (_super) {
  __extends(Chase, _super);
  function Chase() {
    var _this = _super.call(this) || this;
    _this.speed = _Utils.RandomNumber.getRandomSpeed();
    _this.size = _Utils.RandomNumber.getRandomSize();
    _this.shape = new _Shape.Square(_this.size);
    return _this;
  }
  Chase.prototype.move = function (x, y) {
    var position = this.getElementPosition();
    x = Math.round(x);
    y = Math.round(y);
    var x_Adder = 1;
    var y_Adder = 1;
    var _a = new _Utils.WindowSize().getWindowSize(),
      width = _a.width,
      height = _a.height;
    if (position.x >= width && x >= width || position.x <= 0 && x > 0) {
      x_Adder = 0;
    }
    if (position.y >= height && y >= height || position.y <= 0 && y > 0) {
      y_Adder = 0;
    }
    if (x >= position.x && x <= position.x + this.shape.getWidth() && y >= position.y && y <= position.y + this.shape.getHeight()) {
      this.onHitTarget();
      return;
    }
    if (x > position.x && y > position.y) {
      this.setElementPosition(position.x + x_Adder, position.y + y_Adder);
    } else if (x < position.x && y > position.y) {
      this.setElementPosition(position.x - x_Adder, position.y + y_Adder);
    } else if (x > position.x && y < position.y) {
      this.setElementPosition(position.x + x_Adder, position.y - y_Adder);
    } else if (x < position.x && y < position.y) {
      this.setElementPosition(position.x - x_Adder, position.y - y_Adder);
    } else if (x > position.x) {
      this.setElementPosition(position.x + x_Adder, position.y);
    } else if (x < position.x) {
      this.setElementPosition(position.x - x_Adder, position.y);
    } else if (y > position.y) {
      this.setElementPosition(position.x, position.y + y_Adder);
    } else if (y < position.y) {
      this.setElementPosition(position.x, position.y - y_Adder);
    }
  };
  Chase.prototype.onHitTarget = function () {
    var game = _Game.Game.gameInstance();
    game.gameOver();
  };
  return Chase;
}(_ElementType.ElementType);
exports.Chase = Chase;
},{"../models/ElementType":"models/ElementType.ts","../utils/Utils":"utils/Utils.ts","../models/Shape":"models/Shape.ts","../views/Game":"views/Game.ts"}],"controllers/Random.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Random = void 0;
var _ElementType = require("../models/ElementType");
var _Utils = require("../utils/Utils");
var _Shape = require("../models/Shape");
var _Game = require("../views/Game");
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
var Random = /** @class */function (_super) {
  __extends(Random, _super);
  function Random() {
    var _this = _super.call(this) || this;
    _this.direction = new _Utils.Direction(_Utils.RandomNumber.getRandomDirection(500), _Utils.RandomNumber.getRandomDirection(500));
    _this.speed = _Utils.RandomNumber.getRandomSpeed();
    _this.size = _Utils.RandomNumber.getRandomSize();
    _this.shape = new _Shape.Rectangle(_this.size);
    return _this;
  }
  Random.prototype.move = function (x, y) {
    var position = this.getElementPosition();
    var _a = new _Utils.WindowSize().getWindowSize(),
      width = _a.width,
      height = _a.height;
    if (position.x >= width || position.y >= height || position.x <= 0 || position.y <= 0) {
      this.direction.x = _Utils.RandomNumber.getRandomDirection(width);
      this.direction.y = _Utils.RandomNumber.getRandomDirection(height);
    }
    if (x >= position.x && x <= position.x + this.shape.getWidth() && y >= position.y && y <= position.y + this.shape.getHeight()) {
      this.onHitTarget();
      return;
    }
    if (this.direction.x > position.x && this.direction.y > position.y) {
      this.setElementPosition(++position.x, ++position.y);
      this.direction.x = ++this.direction.x;
      this.direction.y = ++this.direction.y;
    } else if (this.direction.x < position.x && this.direction.y > position.y) {
      this.setElementPosition(--position.x, ++position.y);
      this.direction.x = --this.direction.x;
      this.direction.y = ++this.direction.y;
    } else if (this.direction.x > position.x && this.direction.y < position.y) {
      this.setElementPosition(++position.x, --position.y);
      this.direction.x = ++this.direction.x;
      this.direction.y = --this.direction.y;
    } else if (this.direction.x < position.x && this.direction.y < position.y) {
      this.setElementPosition(--position.x, --position.y);
      this.direction.x = --this.direction.x;
      this.direction.y = --this.direction.y;
    } else if (this.direction.x > position.x) {
      this.setElementPosition(++position.x, position.y);
      this.direction.x = ++this.direction.x;
    } else if (this.direction.x < position.x) {
      this.setElementPosition(--position.x, position.y);
      this.direction.x = --this.direction.x;
    } else if (this.direction.y > position.y) {
      this.setElementPosition(position.x, ++position.y);
      this.direction.y = ++this.direction.y;
    } else if (this.direction.y < position.y) {
      this.setElementPosition(position.x, --position.y);
      this.direction.y = --this.direction.y;
    }
  };
  Random.prototype.onHitTarget = function () {
    var game = _Game.Game.gameInstance();
    game.gameOver();
  };
  return Random;
}(_ElementType.ElementType);
exports.Random = Random;
},{"../models/ElementType":"models/ElementType.ts","../utils/Utils":"utils/Utils.ts","../models/Shape":"models/Shape.ts","../views/Game":"views/Game.ts"}],"controllers/Escape.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Escape = void 0;
var _ElementType = require("../models/ElementType");
var _Utils = require("../utils/Utils");
var _Shape = require("../models/Shape");
var _Game = require("../views/Game");
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
var Escape = /** @class */function (_super) {
  __extends(Escape, _super);
  function Escape() {
    var _this = _super.call(this) || this;
    _this.speed = _Utils.RandomNumber.getRandomSpeed();
    _this.size = _Utils.RandomNumber.getRandomSize();
    _this.shape = new _Shape.Circle(_this.size);
    return _this;
  }
  Escape.prototype.move = function (x, y) {
    var position = this.getElementPosition();
    x = Math.round(x);
    y = Math.round(y);
    var x_Adder = 1;
    var y_Adder = 1;
    var _a = new _Utils.WindowSize().getWindowSize(),
      width = _a.width,
      height = _a.height;
    if (position.x >= width && x <= width || position.x <= 0 && x > 0) {
      x_Adder = 0;
    }
    if (position.y >= height && y <= height || position.y <= 0 && y > 0) {
      y_Adder = 0;
    }
    if (x >= position.x && x <= position.x + this.shape.getWidth() && y >= position.y && y <= position.y + this.shape.getHeight()) {
      this.onHitTarget();
      return;
    }
    if (x > position.x && y > position.y) {
      this.setElementPosition(position.x - x_Adder, position.y - y_Adder);
    } else if (x < position.x && y > position.y) {
      this.setElementPosition(position.x + x_Adder, position.y - y_Adder);
    } else if (x > position.x && y < position.y) {
      this.setElementPosition(position.x - x_Adder, position.y + y_Adder);
    } else if (x < position.x && y < position.y) {
      this.setElementPosition(position.x + x_Adder, position.y + y_Adder);
    } else if (x > position.x) {
      this.setElementPosition(position.x - x_Adder, position.y);
    } else if (x < position.x) {
      this.setElementPosition(position.x + x_Adder, position.y);
    } else if (y > position.y) {
      this.setElementPosition(position.x, position.y - y_Adder);
    } else if (y < position.y) {
      this.setElementPosition(position.x, position.y + y_Adder);
    }
  };
  Escape.prototype.onHitTarget = function () {
    var _a = new _Utils.WindowSize().getWindowSize(),
      width = _a.width,
      height = _a.height;
    this.setElementPosition(_Utils.RandomNumber.getRandomDirection(width), _Utils.RandomNumber.getRandomDirection(height));
    var game = _Game.Game.gameInstance();
    game.score = game.score + 5;
  };
  return Escape;
}(_ElementType.ElementType);
exports.Escape = Escape;
},{"../models/ElementType":"models/ElementType.ts","../utils/Utils":"utils/Utils.ts","../models/Shape":"models/Shape.ts","../views/Game":"views/Game.ts"}],"views/ScoreBoard.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreBoard = void 0;
var ScoreBoard = /** @class */function () {
  function ScoreBoard() {
    this.element = document.createElement("h1");
  }
  ScoreBoard.prototype.setScore = function (score) {
    this.element.innerHTML = score;
  };
  ScoreBoard.prototype.getScoreBoard = function () {
    return this.element;
  };
  return ScoreBoard;
}();
exports.ScoreBoard = ScoreBoard;
},{}],"views/InitElementView.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitElementView = void 0;
var InitElementView = /** @class */function () {
  function InitElementView(type) {
    this.htmlElement = document.createElement("div");
    this.htmlElement.style.backgroundImage = "url(".concat(type.shape.getUrl(), ")");
    this.htmlElement.style.backgroundSize = "cover";
    this.htmlElement.style.width = "".concat(type.shape.getWidth(), "px");
    this.htmlElement.style.height = "".concat(type.shape.getHeight(), "px");
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.borderRadius = "".concat(type.shape.getBorderRadius(), "%");
    this.htmlElement.style.backgroundColor = "".concat(type.shape.getColor());
  }
  InitElementView.prototype.getElement = function () {
    return this.htmlElement;
  };
  return InitElementView;
}();
exports.InitElementView = InitElementView;
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var _Utils = require("./utils/Utils");
var _Chase = require("./controllers/Chase");
var _Random = require("./controllers/Random");
var _Escape = require("./controllers/Escape");
var _Game = require("./views/Game");
var _ScoreBoard = require("./views/ScoreBoard");
var _InitElementView = require("./views/InitElementView");
var _a;
var Main = /** @class */function () {
  function Main() {
    this.number = 10;
    this.mouse = new _Utils.ArrowPosition();
    this.game = _Game.Game.gameInstance();
    this.scoreboard = new _ScoreBoard.ScoreBoard();
  }
  Main.prototype.start = function () {
    var _a, _b, _c, _d;
    var scoreElement = this.scoreboard.getScoreBoard();
    this.game.startScore(scoreElement);
    (_a = document.getElementById("game")) === null || _a === void 0 ? void 0 : _a.appendChild(scoreElement);
    for (var i = 0; i < this.number; ++i) {
      var chase = new _Chase.Chase();
      var escape = new _Escape.Escape();
      var random = new _Random.Random();
      var elementChase = new _InitElementView.InitElementView(chase).getElement();
      var elementEscape = new _InitElementView.InitElementView(escape).getElement();
      var elementRandom = new _InitElementView.InitElementView(random).getElement();
      (_b = document.getElementById("game")) === null || _b === void 0 ? void 0 : _b.appendChild(elementChase);
      (_c = document.getElementById("game")) === null || _c === void 0 ? void 0 : _c.appendChild(elementEscape);
      (_d = document.getElementById("game")) === null || _d === void 0 ? void 0 : _d.appendChild(elementRandom);
      this.startElement(chase, elementChase);
      this.startElement(escape, elementEscape);
      this.startElement(random, elementRandom);
    }
  };
  Main.prototype.changeMousePosition = function (event) {
    this.mouse.setArrowPosition(event.clientX, event.clientY);
  };
  Main.prototype.startElement = function (type, element) {
    var _this = this;
    setInterval(function () {
      type.move(_this.mouse.getArrowPosition().x, _this.mouse.getArrowPosition().y);
      element.style.left = "".concat(type.getElementPosition().x, "px");
      element.style.top = "".concat(type.getElementPosition().y, "px");
    }, type.speed);
  };
  return Main;
}();
var game = new Main();
window.addEventListener("mousemove", function (event) {
  return changePosition(event);
});
(_a = document.getElementById("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
  return handleButton("game", "button");
});
function handleButton(nameOfGame, button) {
  var gameElement = document.getElementById(nameOfGame);
  var buttonElement = document.getElementById(button);
  gameElement.style.display = "block";
  buttonElement.style.display = "none";
  game.start();
}
function changePosition(event) {
  game.changeMousePosition(event);
}
},{"./utils/Utils":"utils/Utils.ts","./controllers/Chase":"controllers/Chase.ts","./controllers/Random":"controllers/Random.ts","./controllers/Escape":"controllers/Escape.ts","./views/Game":"views/Game.ts","./views/ScoreBoard":"views/ScoreBoard.ts","./views/InitElementView":"views/InitElementView.ts"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1076" + '/');
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map