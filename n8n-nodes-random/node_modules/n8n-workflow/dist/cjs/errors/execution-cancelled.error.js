(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./abstract/execution-base.error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExecutionCancelledError = void 0;
    const execution_base_error_1 = require("./abstract/execution-base.error");
    class ExecutionCancelledError extends execution_base_error_1.ExecutionBaseError {
        constructor(executionId) {
            super('The execution was cancelled', {
                level: 'warning',
                extra: { executionId },
            });
        }
    }
    exports.ExecutionCancelledError = ExecutionCancelledError;
});
//# sourceMappingURL=execution-cancelled.error.js.map