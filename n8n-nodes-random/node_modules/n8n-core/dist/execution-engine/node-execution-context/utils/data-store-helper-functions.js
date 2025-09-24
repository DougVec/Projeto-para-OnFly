"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataStoreHelperFunctions = getDataStoreHelperFunctions;
function getDataStoreHelperFunctions(additionalData, workflow, node) {
    const dataStoreProxyProvider = additionalData['data-table']?.dataStoreProxyProvider;
    if (!dataStoreProxyProvider)
        return {};
    return {
        getDataStoreAggregateProxy: async () => await dataStoreProxyProvider.getDataStoreAggregateProxy(workflow, node, additionalData.dataTableProjectId),
        getDataStoreProxy: async (dataStoreId) => await dataStoreProxyProvider.getDataStoreProxy(workflow, node, dataStoreId, additionalData.dataTableProjectId),
    };
}
//# sourceMappingURL=data-store-helper-functions.js.map