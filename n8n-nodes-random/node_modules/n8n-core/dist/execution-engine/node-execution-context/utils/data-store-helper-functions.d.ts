import type { DataStoreProxyFunctions, INode, Workflow, IWorkflowExecuteAdditionalData } from 'n8n-workflow';
export declare function getDataStoreHelperFunctions(additionalData: IWorkflowExecuteAdditionalData, workflow: Workflow, node: INode): Partial<DataStoreProxyFunctions>;
