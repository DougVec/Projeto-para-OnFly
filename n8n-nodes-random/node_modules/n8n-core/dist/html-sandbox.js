"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHtmlRenderedContentType = exports.getWebhookSandboxCSP = exports.isWebhookHtmlSandboxingDisabled = void 0;
const config_1 = require("@n8n/config");
const di_1 = require("@n8n/di");
const isWebhookHtmlSandboxingDisabled = () => {
    return di_1.Container.get(config_1.SecurityConfig).disableWebhookHtmlSandboxing;
};
exports.isWebhookHtmlSandboxingDisabled = isWebhookHtmlSandboxingDisabled;
const getWebhookSandboxCSP = () => {
    return 'sandbox allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols';
};
exports.getWebhookSandboxCSP = getWebhookSandboxCSP;
const isHtmlRenderedContentType = (contentType) => {
    const contentTypeLower = contentType.toLowerCase();
    return (contentTypeLower.startsWith('text/html') || contentTypeLower.startsWith('application/xhtml+xml'));
};
exports.isHtmlRenderedContentType = isHtmlRenderedContentType;
//# sourceMappingURL=html-sandbox.js.map