"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableConfig = void 0;
const decorators_1 = require("../decorators");
let DataTableConfig = class DataTableConfig {
    constructor() {
        this.maxSize = 50 * 1024 * 1024;
        this.warningThreshold = 45 * 1024 * 1024;
        this.sizeCheckCacheDuration = 60 * 1000;
    }
};
exports.DataTableConfig = DataTableConfig;
__decorate([
    (0, decorators_1.Env)('N8N_DATA_TABLES_MAX_SIZE_BYTES'),
    __metadata("design:type", Number)
], DataTableConfig.prototype, "maxSize", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_DATA_TABLES_WARNING_THRESHOLD_BYTES'),
    __metadata("design:type", Number)
], DataTableConfig.prototype, "warningThreshold", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_DATA_TABLES_SIZE_CHECK_CACHE_DURATION_MS'),
    __metadata("design:type", Number)
], DataTableConfig.prototype, "sizeCheckCacheDuration", void 0);
exports.DataTableConfig = DataTableConfig = __decorate([
    decorators_1.Config
], DataTableConfig);
//# sourceMappingURL=data-table.config.js.map