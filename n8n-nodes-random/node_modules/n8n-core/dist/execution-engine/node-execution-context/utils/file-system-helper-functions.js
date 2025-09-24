"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileSystemHelperFunctions = void 0;
exports.isFilePathBlocked = isFilePathBlocked;
const backend_common_1 = require("@n8n/backend-common");
const di_1 = require("@n8n/di");
const n8n_workflow_1 = require("n8n-workflow");
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const constants_1 = require("../../../constants");
const instance_settings_1 = require("../../../instance-settings");
const getAllowedPaths = () => {
    const restrictFileAccessTo = process.env[constants_1.RESTRICT_FILE_ACCESS_TO];
    if (!restrictFileAccessTo) {
        return [];
    }
    const allowedPaths = restrictFileAccessTo
        .split(';')
        .map((path) => path.trim())
        .filter((path) => path);
    return allowedPaths;
};
async function isFilePathBlocked(filePath) {
    const allowedPaths = getAllowedPaths();
    let resolvedFilePath = '';
    try {
        resolvedFilePath = await (0, promises_1.realpath)(filePath);
    }
    catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
            resolvedFilePath = (0, node_path_1.resolve)(filePath);
        }
        else {
            throw error;
        }
    }
    const blockFileAccessToN8nFiles = process.env[constants_1.BLOCK_FILE_ACCESS_TO_N8N_FILES] !== 'false';
    const restrictedPaths = blockFileAccessToN8nFiles ? getN8nRestrictedPaths() : [];
    if (restrictedPaths.some((restrictedPath) => (0, backend_common_1.isContainedWithin)(restrictedPath, resolvedFilePath))) {
        return true;
    }
    if (allowedPaths.length) {
        return !allowedPaths.some((allowedPath) => (0, backend_common_1.isContainedWithin)(allowedPath, resolvedFilePath));
    }
    return false;
}
const getFileSystemHelperFunctions = (node) => ({
    async createReadStream(filePath) {
        if (await isFilePathBlocked(filePath.toString())) {
            const allowedPaths = getAllowedPaths();
            const message = allowedPaths.length ? ` Allowed paths: ${allowedPaths.join(', ')}` : '';
            throw new n8n_workflow_1.NodeOperationError(node, `Access to the file is not allowed.${message}`, {
                level: 'warning',
            });
        }
        try {
            await (0, promises_1.access)(filePath);
        }
        catch (error) {
            throw error.code === 'ENOENT'
                ?
                    new n8n_workflow_1.NodeOperationError(node, error, {
                        message: `The file "${String(filePath)}" could not be accessed.`,
                        level: 'warning',
                    })
                : error;
        }
        return (0, node_fs_1.createReadStream)(filePath);
    },
    getStoragePath() {
        return (0, backend_common_1.safeJoinPath)(di_1.Container.get(instance_settings_1.InstanceSettings).n8nFolder, `storage/${node.type}`);
    },
    async writeContentToFile(filePath, content, flag) {
        if (await isFilePathBlocked(filePath)) {
            throw new n8n_workflow_1.NodeOperationError(node, `The file "${String(filePath)}" is not writable.`, {
                level: 'warning',
            });
        }
        return await (0, promises_1.writeFile)(filePath, content, { encoding: 'binary', flag });
    },
});
exports.getFileSystemHelperFunctions = getFileSystemHelperFunctions;
function getN8nRestrictedPaths() {
    const { n8nFolder, staticCacheDir } = di_1.Container.get(instance_settings_1.InstanceSettings);
    const restrictedPaths = [n8nFolder, staticCacheDir];
    if (process.env[constants_1.CONFIG_FILES]) {
        restrictedPaths.push(...process.env[constants_1.CONFIG_FILES].split(','));
    }
    if (process.env[constants_1.CUSTOM_EXTENSION_ENV]) {
        const customExtensionFolders = process.env[constants_1.CUSTOM_EXTENSION_ENV].split(';');
        restrictedPaths.push(...customExtensionFolders);
    }
    if (process.env[constants_1.BINARY_DATA_STORAGE_PATH]) {
        restrictedPaths.push(process.env[constants_1.BINARY_DATA_STORAGE_PATH]);
    }
    if (process.env[constants_1.UM_EMAIL_TEMPLATES_INVITE]) {
        restrictedPaths.push(process.env[constants_1.UM_EMAIL_TEMPLATES_INVITE]);
    }
    if (process.env[constants_1.UM_EMAIL_TEMPLATES_PWRESET]) {
        restrictedPaths.push(process.env[constants_1.UM_EMAIL_TEMPLATES_PWRESET]);
    }
    return restrictedPaths;
}
//# sourceMappingURL=file-system-helper-functions.js.map