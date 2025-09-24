"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApiKeyScope = isApiKeyScope;
const scope_information_1 = require("./scope-information");
function isApiKeyScope(scope) {
    return scope_information_1.ALL_API_KEY_SCOPES.has(scope);
}
//# sourceMappingURL=types.ee.js.map