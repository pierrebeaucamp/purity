// Generated by psc-bundle 0.7.6.1
var PS = { };
(function(exports) {
  /* global exports, console */
  "use strict";

  // module Control.Monad.Eff.Console

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["log"] = $foreign.log;;
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  /* global exports */

  // module Control.Monad.Eff.WebGL


      "use strict";

      exports.runWebGl_ = function (f) {
        return f;
    };
 
})(PS["Control.Monad.Eff.WebGL"] = PS["Control.Monad.Eff.WebGL"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff.WebGL"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["runWebGl_"] = $foreign.runWebGl_;;
 
})(PS["Control.Monad.Eff.WebGL"] = PS["Control.Monad.Eff.WebGL"] || {});
(function(exports) {
  /* global exports */

  // module Graphics.WebGL

      "use strict";


      exports.initGL_ = function (canvasId, attr) {
              return function() {
                var canvas = document.getElementById(canvasId);
                try {
                  gl = canvas.getContext("webgl", attr) || canvas.getContext("experimental-webgl", attr);
                }
                catch(e) {return false;}
                if (!gl)
                {
                  gl = null;
                  return false;
                }
                return true;
            };
        };                                            
 
})(PS["Graphics.WebGL"] = PS["Graphics.WebGL"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Graphics.WebGL"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff_WebGL = PS["Control.Monad.Eff.WebGL"];
  var Graphics_WebGLRaw = PS["Graphics.WebGLRaw"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Data_TypedArray = PS["Data.TypedArray"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Array_Unsafe = PS["Data.Array.Unsafe"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Function = PS["Data.Function"];
  var Extensions = PS["Extensions"];
  var defContextAttributes = {
      alpha: true, 
      depth: true, 
      stencil: false, 
      antialias: true, 
      premultipliedAlpha: true, 
      preserveDrawingBuffer: false, 
      preferLowPowerToHighPerformance: false, 
      failIfMajorPerformanceCaveat: false
  };
  var runWebGL = function (canvasId) {
      return function (failure) {
          return function (success) {
              var makeContext = {
                  canvasName: canvasId
              };
              return function __do() {
                  var _1 = $foreign.initGL_(canvasId, defContextAttributes)();
                  return (function () {
                      if (_1) {
                          return Control_Monad_Eff_WebGL.runWebGl_(success(makeContext));
                      };
                      if (!_1) {
                          return failure("Unable to initialize WebGL. Your browser may not support it.");
                      };
                      throw new Error("Failed pattern match at Graphics.WebGL line 149, column 1 - line 150, column 1: " + [ _1.constructor.name ]);
                  })()();
              };
          };
      };
  };
  exports["runWebGL"] = runWebGL;
  exports["defContextAttributes"] = defContextAttributes;;
 
})(PS["Graphics.WebGL"] = PS["Graphics.WebGL"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var Graphics_WebGL = PS["Graphics.WebGL"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Graphics_WebGLAll = PS["Graphics.WebGLAll"];
  var Prelude = PS["Prelude"];     
  var main = Graphics_WebGL.runWebGL("glcanvas")(function (s) {
      return Control_Monad_Eff_Console.log(s);
  })(function (context) {
      return Control_Monad_Eff_Console.log("Canvas initialized");
  });
  exports["main"] = main;;
 
})(PS["LudumDare"] = PS["LudumDare"] || {});