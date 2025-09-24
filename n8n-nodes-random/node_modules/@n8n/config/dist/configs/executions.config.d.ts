declare class PruningIntervalsConfig {
    hardDelete: number;
    softDelete: number;
}
declare class ConcurrencyConfig {
    productionLimit: number;
    evaluationLimit: number;
}
declare class QueueRecoveryConfig {
    interval: number;
    batchSize: number;
}
export declare class ExecutionsConfig {
    timeout: number;
    maxTimeout: number;
    pruneData: boolean;
    pruneDataMaxAge: number;
    pruneDataMaxCount: number;
    pruneDataHardDeleteBuffer: number;
    pruneDataIntervals: PruningIntervalsConfig;
    concurrency: ConcurrencyConfig;
    queueRecovery: QueueRecoveryConfig;
    saveDataOnError: 'all' | 'none';
    saveDataOnSuccess: 'all' | 'none';
    saveExecutionProgress: boolean;
    saveDataManualExecutions: boolean;
}
export {};
