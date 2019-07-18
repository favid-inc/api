'use strict';

function exportModule(module) {
  for (var key in module) 
    if (!Object.prototype.hasOwnProperty.call(exports, key))
      exports[key] = module[key];
}

Object.defineProperty(exports, '__esModule', { value: true });
exportModule(require('./lib'));
