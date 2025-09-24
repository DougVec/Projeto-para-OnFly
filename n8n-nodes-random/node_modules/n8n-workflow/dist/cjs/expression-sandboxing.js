(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@n8n/tournament", "./errors", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sanitizer = exports.PrototypeSanitizer = exports.sanitizerName = void 0;
    const tournament_1 = require("@n8n/tournament");
    const errors_1 = require("./errors");
    const utils_1 = require("./utils");
    exports.sanitizerName = '__sanitize';
    const sanitizerIdentifier = tournament_1.astBuilders.identifier(exports.sanitizerName);
    const PrototypeSanitizer = (ast, dataNode) => {
        (0, tournament_1.astVisit)(ast, {
            visitMemberExpression(path) {
                this.traverse(path);
                const node = path.node;
                if (!node.computed) {
                    // This is static, so we're safe to error here
                    if (node.property.type !== 'Identifier') {
                        throw new errors_1.ExpressionError(`Unknown property type ${node.property.type} while sanitising expression`);
                    }
                    if (!(0, utils_1.isSafeObjectProperty)(node.property.name)) {
                        throw new errors_1.ExpressionError(`Cannot access "${node.property.name}" due to security concerns`);
                    }
                }
                else if (node.property.type === 'StringLiteral' || node.property.type === 'Literal') {
                    // Check any static strings against our forbidden list
                    if (!(0, utils_1.isSafeObjectProperty)(node.property.value)) {
                        throw new errors_1.ExpressionError(`Cannot access "${node.property.value}" due to security concerns`);
                    }
                }
                else if (!node.property.type.endsWith('Literal')) {
                    // This isn't a literal value, so we need to wrap it
                    path.replace(tournament_1.astBuilders.memberExpression(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
                    node.object, 
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    tournament_1.astBuilders.callExpression(tournament_1.astBuilders.memberExpression(dataNode, sanitizerIdentifier), [
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        node.property,
                    ]), true));
                }
            },
        });
    };
    exports.PrototypeSanitizer = PrototypeSanitizer;
    const sanitizer = (value) => {
        if (!(0, utils_1.isSafeObjectProperty)(value)) {
            throw new errors_1.ExpressionError(`Cannot access "${value}" due to security concerns`);
        }
        return value;
    };
    exports.sanitizer = sanitizer;
});
//# sourceMappingURL=expression-sandboxing.js.map