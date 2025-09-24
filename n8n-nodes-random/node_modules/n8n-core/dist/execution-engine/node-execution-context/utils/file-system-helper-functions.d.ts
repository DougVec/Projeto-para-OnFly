import type { FileSystemHelperFunctions, INode } from 'n8n-workflow';
export declare function isFilePathBlocked(filePath: string): Promise<boolean>;
export declare const getFileSystemHelperFunctions: (node: INode) => FileSystemHelperFunctions;
